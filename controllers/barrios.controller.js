
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("barriosController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Barrios = {
        saveBarrios,
        getBarrios,
        deleteBarrios,
        updateBarrios,
        getBarriosbyid,
        getBarriosbyZonasregistrosid
    }

    logger.info("Initialization finished.");

}

let getBarrios = ()=>{
    return new Promise((resolve, reject)=>{
        models.Barrios.findAll({ raw : true }).then(barrios => resolve(barrios)).catch(e=>reject(e));
    });
}

let getBarriosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Barrios.findByPk(id).then(barrios => resolve(barrios)).catch(e=>reject(e));
    });
}

let getBarriosbyZonasregistrosid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Barrios.findAll( {where : { cod_zona : id } } ).then(barrios => resolve(barrios)).catch(e=>reject(e));
    });
}

let saveBarrios = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Barrios.create(data).then(async (barrios)=>{
            resolve(barrios.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteBarrios = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Barrios.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateBarrios = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Barrios.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };