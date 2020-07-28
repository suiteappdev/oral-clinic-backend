let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("perfilesocpController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Perfilesocp = {
        savePerfilesocp,
        getPerfilesocp,
        deletePerfilesocp,
        updatePerfilesocp,
        getPerfilesocpbyid
    }

    logger.info("Initialization finished.");

}

let getPerfilesocp = ()=>{
    return new Promise((resolve, reject)=>{
        models.Perfilesocp.findAll({ raw : true }).then(perfilesocp => resolve(perfilesocp)).catch(e=>reject(e));
    });
}

let getPerfilesocpbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Perfilesocp.findByPk(id).then(perfilesocp => resolve(perfilesocp)).catch(e=>reject(e));
    });
}

let savePerfilesocp = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Perfilesocp.create(data).then(async (perfilesocp)=>{
            resolve(perfilesocp.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deletePerfilesocp = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Perfilesocp.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updatePerfilesocp = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Perfilesocp.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };