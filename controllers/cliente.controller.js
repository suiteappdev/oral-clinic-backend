
let services;
let logger;
let db;
let models;
let { QueryTypes } = require('sequelize');


let lastclid = (req, res)=>{

    let db = req.app.locals.services.sequelize;

    return new Promise(async (resolve, reject)=>{

        const userInfo = await db.query(`SELECT * FROM entidades WHERE id=(SELECT MAX(id) FROM entidades)`, { type: QueryTypes.SELECT }).catch((e)=>reject(e));
        resolve(userInfo);
    });
}

let init = (app, locals)=>{
    logger = locals.logger.getLogger("clienteController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Cliente = {
        saveCliente,
        getCliente,
        deleteCliente,
        updateCliente,
        getClientebyid,
        lastclid
    }

    logger.info("Initialization finished.");

}

let getCliente = ()=>{
    return new Promise((resolve, reject)=>{
        models.Cliente.findAll({ raw : true }).then(cliente => resolve(cliente)).catch(e=>reject(e));
    });
}

let getClientebyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Cliente.findByPk(id).then(cliente => resolve(cliente)).catch(e=>reject(e));
    });
}

let saveCliente = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Cliente.create(data).then(async (cliente)=>{
            resolve(cliente.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteCliente = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Cliente.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateCliente = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Cliente.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };