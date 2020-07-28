
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("modulosocpController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Modulosocp = {
        saveModulosocp,
        getModulosocp,
        deleteModulosocp,
        updateModulosocp,
        getModulosocpbyid
    }

    logger.info("Initialization finished.");

}

let getModulosocp = ()=>{
    return new Promise((resolve, reject)=>{
        models.Modulosocp.findAll({ raw : true }).then(modulosocp => resolve(modulosocp)).catch(e=>reject(e));
    });
}

let getModulosocpbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Modulosocp.findByPk(id).then(modulosocp => resolve(modulosocp)).catch(e=>reject(e));
    });
}

let saveModulosocp = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Modulosocp.create(data).then(async (modulosocp)=>{
            resolve(Modulosocp.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteModulosocp = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Modulosocp.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateModulosocp = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Modulosocp.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };