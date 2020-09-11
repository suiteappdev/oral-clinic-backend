var express = require('express');
var router = express.Router();

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
    let cliente = await req.app.locals.controllers.Clientes.getClientesbyid(id, req, res).catch((e)=>{
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
