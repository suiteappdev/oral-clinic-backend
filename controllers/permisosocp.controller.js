
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("permisosocpController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Permisosocp = {
        savePermisosocp,
        getPermisosocp,
        deletePermisosocp,
        updatePermisosocp,
        getPermisosocpbyid
    }

    logger.info("Initialization finished.");

}

let getPermisosocp = ()=>{
    return new Promise((resolve, reject)=>{
        models.Permisosocp.findAll({ raw : true }).then(permisosocp => resolve(permisosocp)).catch(e=>reject(e));
    });
}

let getPermisosocpbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Permisosocps.findByPk(id).then(permisosocp => resolve(permisosocp)).catch(e=>reject(e));
    });
}

let savePermisosocp = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Permisosocp.create(data).then(async (permisosocp)=>{
            resolve(permisosocp.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deletePermisosocp = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Permisosocp.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updatePermisosocp = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Permisosocp.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };