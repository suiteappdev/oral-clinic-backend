var express = require('express');
var router = express.Router();

router.post('/tiposdepagos', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let tiposdepagos = await req.app.locals.controllers.Tiposdepagos.saveTiposdepagos(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tiposdepagos);
});

router.get('/tiposdepagos', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let tiposdepagos = await req.app.locals.controllers.Tiposdepagos.getTiposdepagos(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tiposdepagos);
});

router.get('/tiposdepagos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let tiposdepagos = await req.app.locals.controllers.Tiposdepagos.getTiposdepagosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tiposdepagos);
});

router.delete('/tiposdepagos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let tiposdepagos= await req.app.locals.controllers.Tiposdepagos.deleteTiposdepagos(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tiposdepagos);
});

router.put('/tiposdepagos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let tiposdepagos = await req.app.locals.controllers.Tiposdepagos.updateTiposdepagos(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tiposdepagos);
});

module.exports = router;
