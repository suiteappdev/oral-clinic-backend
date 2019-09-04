var express = require('express');
var router = express.Router();

router.post('/sedes', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let sedes = await req.app.locals.controllers.Sedes.saveSedes(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(sedes);
});

router.get('/sedes', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let sedes = await req.app.locals.controllers.Sedes.getSedes(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(sedes);
});

router.get('/sedes/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let sedes = await req.app.locals.controllers.Sedes.getSedesbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(sedes);
});

router.delete('/sedes/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let sedes= await req.app.locals.controllers.Sedes.deleteSedes(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(sedes);
});

router.put('/sedes/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let sedes = await req.app.locals.controllers.Sedes.updateSedes(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(sedes);
});

module.exports = router;
