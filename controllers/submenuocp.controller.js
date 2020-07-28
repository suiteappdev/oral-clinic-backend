
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("submenuocpController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Submenuocp = {
        saveSubmenuocp,
        getSubmenuocp,
        deleteSubmenuocp,
        updateSubmenuocp,
        getSubmenuocpbyid
    }

    logger.info("Initialization finished.");

}

let getSubmenuocp = ()=>{
    return new Promise((resolve, reject)=>{
        models.Submenuocp.findAll({ raw : true }).then(submenuocp => resolve(submenuocp)).catch(e=>reject(e));
    });
}

let getSubmenuocpbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Submenuocp.findByPk(id).then(submenuocp => resolve(submenuocp)).catch(e=>reject(e));
    });
}

let saveSubmenuocp = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Submenuocp.create(data).then(async (submenuocp)=>{
            resolve(submenuocp.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteSubmenuocp = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Submenuocp.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateSubmenuocp = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Submenuocp.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };