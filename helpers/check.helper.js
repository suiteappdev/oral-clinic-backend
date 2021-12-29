const { resolve } = require("bluebird");

let logger;

let checkOrder = (line)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            let order = {
                    "Name" : `${line['Name']}`,
                    "Nombres del destinatario" : `${line['Billing Name']}`,
                    "Apellidos del destinatario" : `${''}`,
                    "Dirección destino" : `${line['Shipping Address1'] || line['Billing Address1']}`,
                    "Ciudad destino" : `${line['Shipping City'] || line['Billing City']} `,
                    "Departamento destino" : `${line['Shipping Province Name'] || line['Billing Province Name']}`,
                    "Barrio destino" : `${line['Shipping Address2'] || line['Billing Address2']}`,
                    "Transportadora" : 'servientrega',
                    "Telefono" : `${line['Shipping Phone'] || line['Billing Phone']}`,
                    "Nombre del producto" : `${line['Lineitem name']}`,
                    "Precio del producto" : `${line['Lineitem price']}`,
                    "Cantidad del producto" : `${line['Lineitem quantity']}`,
                    "createdAt" : line['Created at'],
                    "Alto" : ``,
                    "Largo" : ``,
                    "Ancho" : ``,
                    "Peso" : ``,
                    "Total a recaudar" :`${line['Total']}`,
                    "Total del pedido" :`${line['Total']}`,
                    "Notas" : `${line['Notes']}`,
                    "Envio gratis" : `${(line['Lineitem requires shipping'] == 'true') ? 'SI' : 'NO'}`,
                    "Dirección remitente" : `cra 26A#45-56`,
                    "Ciudad remitente" : `Sincelejo`,
                    "Departamento remitente" : `Sucre`,
                    "Barrio remitente" : `pioneros`,
                    "Celular remitente" : `30024588541`
                }
            
            resolve(order)
            
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
        
        logger.info(`Loading CheckOrder Helper`);
        
        try{
            locals.helpers = locals.helpers || {};
            locals.helpers.checkOrder = checkOrder || {};
            locals.helpers.getCustomer = getCustomer;

            return resolve();
        
        }catch(e){
            logger.error(`Error loading CheckOrder helper`);
            reject(new Error(`[ERROR]: Error loading CheckOrder helper`));
        }

        logger.info(`CheckOrder helper done.`);

    });

}

module.exports = { init };