
let services;
let logger;
let db;
let models;
var sequelize = require('sequelize');
var op = sequelize.Op


let init = (app, locals)=>{
    logger = locals.logger.getLogger("nitsController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Nits = {
        saveNits,
        getNits,
        deleteNits,
        updateNits,
        getNitsbyid,
        getNitslikeid
    }

    logger.info("Initialization finished.");

}

let getNits = ()=>{
    return new Promise((resolve, reject)=>{
        models.Nits.findAll({ raw : true }).then(nits => resolve(nits)).catch(e=>reject(e));
    });
}

let getNitsbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Nits.findByPk(id).then(nits => resolve(nits)).catch(e=>reject(e));
    });
}

let getNitslikeid = (id, limit, req, res)=>{
    
    return new Promise((resolve, reject)=>{
      models.Nits.findAll( { limit : parseInt(limit), where : { nit : { [op.like] : `%${id}` }}}).then(nits => resolve(nits)).catch(e=>reject(e));
    });

}

let saveNits = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Nits.create(data).then(async (nits)=>{
            resolve(nits.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteNits = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Nits.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateNits = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Nits.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };