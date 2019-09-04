
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("departamentosController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Departamentos = {
        saveDepartamentos,
        getDepartamentos,
        deleteDepartamentos,
        updateDepartamentos,
        getDepartamentosbyid,
        getDepartamentosbyidPais
    }

    logger.info("Initialization finished.");

}

let getDepartamentos = ()=>{
    console.log("dpto", models);
    return new Promise((resolve, reject)=>{
        models.Departamentos.findAll({ raw : true }).then(departamentos => resolve(departamentos)).catch(e=>reject(e));
    });
}

let getDepartamentosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Departamentos.findByPk(id).then(departamentos => resolve(departamentos)).catch(e=>reject(e));
    });
}

let getDepartamentosbyidPais = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Departamentos.findAll({ where: { pais: id } }).then(departamentos => resolve(departamentos)).catch(e=>reject(e));
    });
}

let saveDepartamentos = (data, req, res)=>{
   
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Departamentos.create(data).then((departamentos)=>{
            resolve(departamentos.get({ plain : true}));
        }).catch((e)=>console.log(e));
    });

}

let deleteDepartamentos = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Departamentos.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateDepartamentos = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Departamentos.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}
module.exports = { init };