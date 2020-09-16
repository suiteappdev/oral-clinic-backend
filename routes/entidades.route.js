var express = require('express');
var router = express.Router();

router.post('/entidades/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let entidades = await req.app.locals.controllers.Entidades.saveEntidades(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(entidades);
});

router.get('/entidades', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let entidades = await req.app.locals.controllers.Entidades.getEntidades(req, res).catch((e)=>{
        console.log(e);
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(entidades);
});

router.get('/entidades/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let entidades = await req.app.locals.controllers.Entidades.getEntidadesbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(entidades);
});

router.delete('/entidades/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let entidades= await req.app.locals.controllers.Entidades.deleteEntidades(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(entidades);
});

router.put('/entidades/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let entidades = await req.app.locals.controllers.Entidades.updateEntidades(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(entidades);
});

module.exports = router;
