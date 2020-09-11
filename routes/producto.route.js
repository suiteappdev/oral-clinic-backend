var express = require('express');
var router = express.Router();

router.post('/producto/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let producto = await req.app.locals.controllers.Producto.saveProducto(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(producto);
});

router.get('/producto', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let producto = await req.app.locals.controllers.Producto.getProducto(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(producto);
});

router.get('/producto/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let producto = await req.app.locals.controllers.Producto.getProductobyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(producto);
});

router.delete('/producto/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let producto= await req.app.locals.controllers.Producto.deleteProducto(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(producto);
});

router.put('/producto/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let producto = await req.app.locals.controllers.Producto.updateProducto(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(producto);
});

module.exports = router;
