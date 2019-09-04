var express = require('express');
var router = express.Router();

router.post('/zonasregistros', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let zonasregistros = await req.app.locals.controllers.Zonasregistros.saveZonasregistros(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(zonasregistros);
});

router.get('/zonasregistros', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let zonasregistros = await req.app.locals.controllers.Zonasregistros.getZonasregistros(req, res).catch((e)=>{
        console.log(e.message)
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(zonasregistros);

});

router.get('/zonasregistros/municipio/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;

    let zonasregistros = await req.app.locals.controllers.Zonasregistros.getZonasregistrosbyMunicipiosid(id, req, res).catch((e)=>{
        console.log(e.message)
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(zonasregistros);

});

router.get('/zonasregistros/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let zonasregistros = await req.app.locals.controllers.Zonasregistros.getZonasregistrosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(zonasregistros);
});

router.delete('/zonasregistros/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
    await req.app.locals.controllers.Zonasregistros.deleteZonasregistros(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json({});
});

router.put('/zonasregistros/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let zonasregistros = await req.app.locals.controllers.Zonasregistros.updateZonasregistros(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(zonasregistros);
});

module.exports = router;