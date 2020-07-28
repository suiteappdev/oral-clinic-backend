var express = require('express');
var router = express.Router();

router.post('/modulosocp/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let modulosocp = await req.app.locals.controllers.Modulosocp.savemodulosocp(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(modulosocp);
});

router.get('/modulosocp', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let modulosocp = await req.app.locals.controllers.Modulosocp.getModulosocp(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(modulosocp);
});

router.get('/modulosocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let modulosocp = await req.app.locals.controllers.Modulosocp.getModulosocpbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(modulosocp);
});

router.delete('/modulosocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let modulosocp= await req.app.locals.controllers.Modulosocp.Modulosocp(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(modulosocp);
});

router.put('/modulosocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let modulosocp = await req.app.locals.controllers.Modulosocp.Modulosocp(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(modulosocp);
});

module.exports = router;
