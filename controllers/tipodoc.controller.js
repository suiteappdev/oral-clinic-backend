
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("tdocController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Tdoc = {
        saveTdoc,
        getTdoc,
        deleteTdoc,
        updateTdoc,
        getTdocbyid
    }

    logger.info("Initialization finished.");

}

let getTdoc = ()=>{
    return new Promise((resolve, reject)=>{
        models.Tdoc.findAll({}).then(Tdoc => resolve(Tdoc)).catch(e=>reject(e));
    });
}

let getTdocbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Tdoc.findByPk(id).then(Tdoc => resolve(Tdoc)).catch(e=>reject(e));
    });
}

let saveTdoc = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Tdoc.create(data).then(async (Tdoc)=>{
            resolve(Tdoc.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteTdoc = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Tdoc.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateTdoc = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Tdoc.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };