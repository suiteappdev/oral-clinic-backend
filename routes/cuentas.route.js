var express = require('express');
var router = express.Router();

router.post('/cuentas', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let cuentas = await req.app.locals.controllers.Cuentas.saveCuentas(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cuentas);
});

router.get('/cuentas', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let cuentas = await req.app.locals.controllers.Cuentas.getCuentas(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cuentas);
});

router.get('/cuentas/buscar-cuentas/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.query.id;
    let limit = req.query.limit;
    let cuentas = await req.app.locals.controllers.Cuentas.getCuentaslikeid(id, limit, req, res).catch((e)=>{
         console.log("e", e.message);
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cuentas);
});

router.put('/cuenta/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let cuentas = await req.app.locals.controllers.Cuentas.updateCuentas(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(cuentas);
});

module.exports = router;
