
let services;
let logger;
let db;
let models;
let sequelize;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("registrodeconsecutivosController");

    services = locals.services || {};
    models = locals.models;
    sequelize = locals.services.sequelize;

    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Registrodeconsecutivos = {
        saveRegistrodeconsecutivos,
        getRegistrodeconsecutivos,
        deleteRegistrodeconsecutivos,
        updateRegistrodeconsecutivos,
        getRegistrodeconsecutivosbyid
    }

    logger.info("Initialization finished.");

}

/*let getRegistrodeconsecutivos = ()=>{
    return new Promise((resolve, reject)=>{
        sequelize.query('SELECT * FROM con_inv;').then((result, metadata)=>resolve(result)).catch((e)=>reject(e));
    });
}*/

let getRegistrodeconsecutivos = ()=>{
    return new Promise((resolve, reject)=>{
        models.Registrodeconsecutivos.findAll({ raw : true }).then(registrodeconsecutivos => resolve(registrodeconsecutivos)).catch(e=>reject(e));
    });
}

let getRegistrodeconsecutivosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Registrodeconsecutivos.findByPk(id).then(registrodeconsecutivos => resolve(registrodeconsecutivos)).catch(e=>reject(e));
    });
}

let saveRegistrodeconsecutivos = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Registrodeconsecutivos.create(data).then(async (registrodeconsecutivos)=>{
            resolve(registrodeconsecutivos.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteRegistrodeconsecutivos = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Registrodeconsecutivos.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateRegistrodeconsecutivos = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Registrodeconsecutivos.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };