const express = require('express');
const router = express.Router();
const _ = require('lodash');

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
                        let customer =  req.app.locals.helpers.getCustomer(o.lineItems);
                        for (let index = 0; index < o.lineItems.length; index++) {
                            const line_item = o.lineItems[index];
                            let order_result = await req.app.locals.helpers.checkOrder(line_item).catch((e)=>console.log(e));
                            order_result = {...order_result, ...customer}
                            csv_data.push(order_result);
                        }
                    }
                }
            }

            req.app.locals.mainController.apiResponder(res, 200, csv_data);
        }
    });
});

module.exports = router;
