const express = require('express');
const router = express.Router();
const _ = require('lodash');
const WooCommerceRestApi  = require('@woocommerce/woocommerce-rest-api').default;

router.post('/rocketfy-shopify-import', async (req, res)=>{
        let output = `${req.app.workspace}/output.xlsx`;
        let orders = req.body.orders.map((o)=>{
            delete o.Name;
            return o;
        });

        let rs = await req.app.locals.services.jsontoxlsx(orders, output).catch((e)=>console.log(e));

        res.download(output); 
});

router.post('/rocketfy-shopify-format', async (req, res)=>{
    req.app.locals.services.uploadService('csv')(req, res, async (err)=>{
        if(!err){
            let csv = (req.file.path);
            let data = await req.app.locals.services.csvTojson(csv);
            let shop = JSON.parse(req.body.shop);

            let grouped = _(data)
            .groupBy((order) => order.Name)
            .map((value, key) => {
                return { name: key, lineItems: value }
            })
            .value();

            let csv_data = [];

            if(grouped.length > 0){
                for (let index = 0; index < grouped.length; index++) {
                    const o = grouped[index];

                    if(o.lineItems.length == 1){
                        for (let index = 0; index < o.lineItems.length; index++) {
                            const line_item = o.lineItems[index];
                            line_item.shop = shop;
                            let order_result = await req.app.locals.helpers.checkOrder(line_item).catch((e)=>console.log(e));
                            csv_data.push(order_result);
                        }
                    }
                }
            }

            req.app.locals.mainController.apiResponder(res, 200, csv_data);
        }
    });
});

router.post('/rocketfy-woocommerce-format', async (req, res)=>{
    
    const WooCommerce = new WooCommerceRestApi({
        url: req.body.url,
        consumerKey: req.body.ck,
        consumerSecret: req.body.cs,
        version: 'wc/v3'
    });

    let shop = req.body.shop;
    let order_list = [];
    let orders = await WooCommerce.get("orders");

    if(orders && orders.data.length > 0){
        orders = orders.data;
        for (let index = 0; index < orders.length; index++) {
            const o = orders[index];
            if(o.line_items.length == 1){
                o.shop = shop;
                let order_result = await req.app.locals.helpers.checkOrderWoocommerce(WooCommerce, o).catch((e)=>console.log(e));
                order_list.push(order_result);
            }
        }
    }

    req.app.locals.mainController.apiResponder(res, 200, order_list);
});

module.exports = router;
