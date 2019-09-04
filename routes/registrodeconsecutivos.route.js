var express = require('express');
var router = express.Router();

router.post('/registrodeconsecutivos', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let registrodeconsecutivos = await req.app.locals.controllers.Registrodeconsecutivos.saveRegistrodeconsecutivos(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(registrodeconsecutivos);
});

router.get('/registrodeconsecutivos', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let registrodeconsecutivos = await req.app.locals.controllers.Registrodeconsecutivos.getRegistrodeconsecutivos(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(registrodeconsecutivos);
});

router.get('/registrodeconsecutivos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let registrodeconsecutivos = await req.app.locals.controllers.Registrodeconsecutivos.getRegistrodeconsecutivosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(registrodeconsecutivos);
});

router.delete('/registrodeconsecutivos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let registrodeconsecutivos= await req.app.locals.controllers.Registrodeconsecutivos.deleteRegistrodeconsecutivos(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(registrodeconsecutivos);
});

router.put('/registrodeconsecutivos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let registrodeconsecutivos = await req.app.locals.controllers.Registrodeconsecutivos.updateRegistrodeconsecutivos(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(registrodeconsecutivos);
});

module.exports = router;
