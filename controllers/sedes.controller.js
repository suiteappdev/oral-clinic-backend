
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("sedesController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Sedes = {
        saveSedes,
        getSedes,
        deleteSedes,
        updateSedes,
        getSedesbyid
    }

    logger.info("Initialization finished.");

}

let getSedes = ()=>{
    return new Promise((resolve, reject)=>{
        models.Sedes.findAll({ raw : true }).then(sedes => resolve(sedes)).catch(e=>reject(e));
    });
}

let getSedesbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Sedes.findByPk(id).then(sedes => resolve(sedes)).catch(e=>reject(e));
    });
}

let saveSedes = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Sedes.create(data).then(async (sedes)=>{
            resolve(sedes.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteSedes = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Sedes.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateSedes = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Sedes.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };