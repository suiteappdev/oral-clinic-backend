
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("zonasregistrosController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Zonasregistros = {
        saveZonasregistros,
        getZonasregistros,
        getZonasregistrosbyid,
        deleteZonasregistros,
        updateZonasregistros,
        getZonasregistrosbyMunicipiosid
    }

    logger.info("Initialization finished.");

}

let getZonasregistros = ()=>{
    return new Promise((resolve, reject)=>{
        models.Zonasregistros.findAll({ raw : true }).then(zonasregistros => resolve(zonasregistros)).catch(e=>reject(e));
    });
}

let getZonasregistrosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Zonasregistros.findByPk(id).then(zonasregistros => resolve(zonasregistros)).catch(e=>reject(e));
    });
}

let getZonasregistrosbyMunicipiosid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Zonasregistros.findAll({ where : {ciudad : id} }).then(zonasregistros => resolve(zonasregistros)).catch(e=>reject(e));
    });
}

let saveZonasregistros = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Zonasregistros.create(data).then((zonasregistros)=>{
            resolve(zonasregistros.get({ plain : true}));
        }).catch((e)=>console.log(e));
    });
}

let deleteZonasregistros = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Zonasregistros.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateZonasregistros = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Zonasregistros.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };