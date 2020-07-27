
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("empleadosController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Empleados = {
        saveEmpleado,
        getEmpleados,
        deleteEmpleados,
        updateEmpleados,
        getEmpleadosbyid
    }

    logger.info("Initialization finished.");

}

let getEmpleados = ()=>{
    return new Promise((resolve, reject)=>{
        models.Empleados.findAll({ raw : true }).then(empleados => resolve(empleados)).catch(e=>reject(e));
    });
}

let getEmpleadosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Empleados.findByPk(id).then(empleados => resolve(empleados)).catch(e=>reject(e));
    });
}

let saveEmpleado = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Empleados.create(data).then(async (empleados)=>{
            resolve(empleados.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteEmpleados = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Empleados.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateEmpleados = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Empleados.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };