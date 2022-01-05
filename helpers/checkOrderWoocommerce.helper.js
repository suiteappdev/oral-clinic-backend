
let logger;

let checkOrderWoocommerce = (order)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            let order_formated = {
                    "Name" : `${order['order_key']}`,
                    "Nombres del destinatario" : `${order.shipping['first_name']}`,
                    "Apellidos del destinatario" : `${order.shipping['last_name']}`,
                    "Dirección destino" : `${order.billing['address_1']}`,
                    "Ciudad destino" : `${order.billing['city']}`,
                    "Departamento destino" : `${order.billing['state']}`,
                    "Barrio destino" : `${order.billing['address_2']}`,
                    "Transportadora" : 'servientrega',
                    "Telefono" : `${order.billing['phone']}`,
                    "Nombre del producto" : `${order.line_items[0]['name']}`,
                    "Precio del producto" : `${order.line_items[0]['price']}`,
                    "Cantidad del producto" : `${order.line_items[0]['quantity']}`,
                    "createdAt" : order['date_created'],
                    "Alto" : ``,
                    "Largo" : ``,
                    "Ancho" : ``,
                    "Peso" : ``,
                    "Total a recaudar" :`${order.line_items[0]['total']}`,
                    "Total del pedido" :`${order.line_items[0]['total']}`,
                    "Notas" : `${order['notes'] || ''}`,
                    "Envio gratis" : `${(order['shipping_total'] != '') ? 'SI' : 'NO'}`,
                    "Dirección remitente" :`${order.shop.address2}`,
                    "Ciudad remitente" : `${order.shop.city}`,
                    "Departamento remitente" : `${order.shop.state}`,
                    "Barrio remitente" : `${order.shop.address1}`,
                    "Celular remitente" : `${order.shop.phone}`
                }
            
            resolve(order_formated)
            
        } catch (error) {
            reject(error);
        }
    });
}

getCustomer = (order)=>{
    let customer = {
        "Nombres del destinatario" : `${order.lineItems[0]['Billing Name']}`,
        "Apellidos del destinatario" : `${''}`,
        "Dirección destino" : `${order.lineItems[0]['Shipping Address1']}`,
        "Ciudad destino" : `${order.lineItems[0]['Shipping City']}`,
        "Departamento destino" : `${order.lineItems[0]['Shipping Province Name']}`,
        "Barrio destino" : `${order.lineItems[0]['Shipping Address2']}`,
        "Telefono" :`${order.lineItems[0]['Shipping Phone'].replace("'", "") ? order.lineItems[0]['Shipping Phone'].replace("'", "") : order.lineItems[0]['Billing Phone'].replace("'", "")}`,
        "Total a recaudar" :`${order.lineItems[0]['Total']}`,
        "Total del pedido" :`${order.lineItems[0]['Total']}`       
    }

    return customer;
}

let init = async (app, locals)=>{
    logger = locals.logger.getLogger("CheckOrder");

    return new Promise(async (resolve, reject)=>{
        
        logger.info(`Loading checkOrderWoocommerce Helper`);
        
        try{
            locals.helpers = locals.helpers || {};
            locals.helpers.checkOrderWoocommerce = checkOrderWoocommerce || {};
            locals.helpers.getCustomer = getCustomer;

            return resolve();
        
        }catch(e){
            logger.error(`Error loading checkOrderWoocommerce helper`);
            reject(new Error(`[ERROR]: Error loading checkOrderWoocommerce helper`));
        }

        logger.info(`checkOrderWoocommerce helper done.`);

    });

}

module.exports = { init };