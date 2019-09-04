
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("ccostoController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Ccosto = {
        saveCcosto,
        getCcosto,
        deleteCcosto,
        updateCcosto,
        getCcostobyid
    }

    logger.info("Initialization finished.");

}

let getCcosto = ()=>{
    return new Promise((resolve, reject)=>{
        models.Ccosto.findAll({ raw : true }).then(ccosto => resolve(ccosto)).catch(e=>reject(e));
    });
}

let getCcostobyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Ccosto.findByPk(id).then(ccosto => resolve(ccosto)).catch(e=>reject(e));
    });
}

let saveCcosto = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Ccosto.create(data).then(async (ccosto)=>{
            resolve(ccosto.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteCcosto = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Ccosto.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateCcosto = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Ccosto.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };