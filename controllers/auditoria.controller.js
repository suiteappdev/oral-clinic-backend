
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("auditoriaController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Auditoria = {
        saveAuditoria
    }

    logger.info("Initialization finished.");
}


let saveAuditoria = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Auditoria.create(data).then((auditoria)=>{
            resolve(auditoria.get({ plain : true}));
        }).catch((e)=>console.log(e));
    });
}

module.exports = { init };