
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("paisController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Paises = {
        savePais,
        getPaises,
        deletePais,
        updatePais,
        getPaisesbyid
    }

    logger.info("Initialization finished.");

}

let getPaises = ()=>{
    return new Promise((resolve, reject)=>{
        models.Paises.findAll({ raw : true }).then(paises => resolve(paises)).catch(e=>reject(e));
    });
}

let getPaisesbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Paises.findByPk(id).then(paises => resolve(paises)).catch(e=>reject(e));
    });
}

let savePais = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Paises.create(data).then(async (pais)=>{
            resolve(pais.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deletePais = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Paises.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updatePais = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Paises.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };