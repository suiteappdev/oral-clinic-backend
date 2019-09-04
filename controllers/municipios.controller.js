
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("municipiosController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Municipios = {
        saveMunicipios,
        getMunicipios,
        deleteMunicipios,
        updateMunicipios,
        getMunicipiosbyid,
        getMunicipiosbyDepartamentoid
    }

    logger.info("Initialization finished.");

}

let getMunicipios = ()=>{
    return new Promise((resolve, reject)=>{
        models.Municipios.findAll({ raw : true }).then(municipio => resolve(municipio)).catch(e=>reject(e));
    });
}

let getMunicipiosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Municipios.findByPk(id).then(municipios => resolve(municipios)).catch(e=>reject(e));
    });
}

let getMunicipiosbyDepartamentoid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Municipios.findAll({ where : {departa : id} }).then(municipios => resolve(municipios)).catch(e=>reject(e));
    });
}

let deleteMunicipios = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Municipios.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let saveMunicipios = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Municipios.create(data).then((municipio)=>{
            resolve(municipio.get({ plain : true}));
        }).catch((e)=>console.log(e));
    });
}

let updateMunicipios = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Municipios.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };