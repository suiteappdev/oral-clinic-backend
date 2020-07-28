
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("menuocpController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Menuocp = {
        saveMenuocp,
        getMenuocp,
        deleteMenuocp,
        updateMenuocp,
        getMenuocpbyid
    }

    logger.info("Initialization finished.");

}

let getMenuocp = ()=>{
    return new Promise((resolve, reject)=>{
        models.Menuocp.findAll({ raw : true }).then(menuocp => resolve(menuocp)).catch(e=>reject(e));
    });
}

let getMenuocpbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Menuocp.findByPk(id).then(menuocp => resolve(menuocp)).catch(e=>reject(e));
    });
}

let saveMenuocp = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.menuocp.create(data).then(async (menuocp)=>{
            resolve(menuocp.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteMenuocp = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Menuocp.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateMenuocp = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Menuocp.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };