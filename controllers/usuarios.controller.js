let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("UsuariosController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Usuarios = {
        saveUsuarios,
        getUsuarios,
        deleteUsuarios,
        updateUsuarios,
        getUsuariosbyid,
    }

    logger.info("Initialization finished.");

}

let getUsuarios = ()=>{
    return new Promise((resolve, reject)=>{
        models.Usuarios.findAll({ raw : true }).then(usuarios => resolve(usuarios)).catch(e=>reject(e));
    });
}

let getUsuariosbyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Usuarios.findByPk(id).then(usuarios => resolve(usuarios)).catch(e=>reject(e));
    });
}


let saveUsuarios = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Usuarios.create(data).then(async (usuarios)=>{
            resolve(usuarios.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteUsuarios = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Usuarios.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateUsuarios = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Usuarios.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };