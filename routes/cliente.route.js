var express = require('express');
var router = express.Router();

router.get('/lastclid', async (req, res)=>{
    let lastclidData = await req.app.locals.controllers.Cliente.lastclid(req, res);
 
    if(lastclidData){
         return req.app.locals.mainController.apiResponder(res, 200, lastclidData);
    }
 
    return req.app.locals.mainController.apiResponder(res, 401, {});
 });

router.post('/cliente/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let cliente = await req.app.locals.controllers.Cliente.saveCliente(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cliente);
});

router.get('/cliente', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let cliente = await req.app.locals.controllers.Cliente.getCliente(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cliente);
});

router.get('/cliente/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let cliente = await req.app.locals.controllers.Cliente.getClientebyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cliente);
});

router.delete('/cliente/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let cliente= await req.app.locals.controllers.Cliente.deletecliente(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cliente);
});

router.put('/cliente/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let cliente = await req.app.locals.controllers.Cliente.updateCliente(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cliente);
});

module.exports = router;
