
let services;
let logger;
let db;
let models;
var sequelize = require('sequelize');
var op = sequelize.Op

let init = (app, locals)=>{
    logger = locals.logger.getLogger("cuentasController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Cuentas = {
        saveCuentas,
        getCuentas,
        deleteCuentas,
        updateCuentas,
        getCuentasbyid,
        getCuentaslikeid
    }

    logger.info("Initialization finished.");

}

let getCuentas = ()=>{
    return new Promise((resolve, reject)=>{
        models.Cuentas.findAll({ raw : true }).then(cuentas => resolve(cuentas)).catch(e=>reject(e));
    });
}

let getCuentasbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Cuentas.findByPk(id).then(cuentas => resolve(cuentas)).catch(e=>reject(e));
    });
}

let getCuentaslikeid = (id, limit, req, res)=>{
    
    return new Promise((resolve, reject)=>{
      models.Cuentas.findAll( { limit : parseInt(limit), where : { cod_cta : { [op.like] : `%${id}%`}}}).then(cuentas => resolve(cuentas)).catch(e=>reject(e));
    });

}

let saveCuentas = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Cuentas.create(data).then(async (pais)=>{
            resolve(pais.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteCuentas = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Cuentas.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateCuentas = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Cuentas.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };