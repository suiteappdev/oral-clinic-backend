
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("tiposdepagosController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Tiposdepagos = {
        saveTiposdepagos,
        getTiposdepagos,
        deleteTiposdepagos,
        updateTiposdepagos,
        getTiposdepagosbyid
    }

    logger.info("Initialization finished.");

}

let getTiposdepagos = ()=>{
    return new Promise((resolve, reject)=>{
        models.Tiposdepagos.findAll({ raw : true }).then(tiposdepagos => resolve(tiposdepagos)).catch(e=>reject(e));
    });
}

let getTiposdepagosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Tiposdepagos.findByPk(id).then(tiposdepagos => resolve(tiposdepagos)).catch(e=>reject(e));
    });
}

let saveTiposdepagos = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Tiposdepagos.create(data).then(async (tiposdepagos)=>{
            resolve(tiposdepagos.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteTiposdepagos = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Tiposdepagos.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateTiposdepagos = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Tiposdepagos.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };