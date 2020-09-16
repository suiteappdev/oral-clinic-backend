
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("EntidadesController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Entidades = {
        saveEntidades,
        getEntidades,
        deleteEntidades,
        updateEntidades,
        getEntidadesbyid
    }

    logger.info("Initialization finished.");

}

let getEntidades = ()=>{
    return new Promise((resolve, reject)=>{
        models.Entidades.findAll({}).then(Entidades => resolve(Entidades)).catch(e=>reject(e));
    });
}

let getEntidadesbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Entidades.findByPk(id).then(Entidades => resolve(Entidades)).catch(e=>reject(e));
    });
}

let saveEntidades = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Entidades.create(data).then(async (Entidades)=>{
            resolve(Entidades.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteEntidades = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Entidades.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateEntidades = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Entidades.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };