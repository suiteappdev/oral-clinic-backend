
let services;
let logger;
let db;
let models;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("productoController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Producto = {
        saveProducto,
        getProducto,
        deleteProducto,
        updateProducto,
        getProductobyid
    }

    logger.info("Initialization finished.");

}

let getProducto = ()=>{
    return new Promise((resolve, reject)=>{
        models.Producto.findAll({ raw : true }).then(producto => resolve(producto)).catch(e=>reject(e));
    });
}

let getProductobyid = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        models.Producto.findByPk(id).then(producto => resolve(producto)).catch(e=>reject(e));
    });
}

let saveProducto = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        console.log('data', data);
        models.Producto.create(data).then(async (producto)=>{
            resolve(producto.get({ plain : true}));

            //let auditoria = await req.app.locals.controllers.Auditoria.saveAuditoria({ }, req, res);

        }).catch((e)=>console.log(e));
    });
}

let deleteProducto = (id, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        
        models.Producto.destroy({where: { id : id }}).then((rowDeleted)=>{
            resolve();
        }).catch((e)=>reject(e));
    });
}

let updateProducto = (id, data, req, res)=>{

    return new Promise((resolve, reject)=>{
        models.Producto.update( data, {returning: true, where: {id: id} }).then((updated)=>resolve(updated)).catch((e)=>reject(e));
    });
}

module.exports = { init };