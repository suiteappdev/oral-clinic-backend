var express = require('express');
var router = express.Router();

router.post('/permisosocp/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let permisosocp = await req.app.locals.controllers.Permisosocp.savePermisosocp(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(permisosocp);
});

router.get('/permisosocp', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let permisosocp = await req.app.locals.controllers.Permisosocp.getPermisosocp(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(permisosocp);
});

router.get('/permisosocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let permisosocp = await req.app.locals.controllers.Permisosocp.getPermisosocpbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(permisosocp);
});

router.delete('/permisosocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let permisosocp= await req.app.locals.controllers.permisosocp.deletePermisosocp(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(permisosocp);
});

router.put('/permisosocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let permisosocp = await req.app.locals.controllers.Permisosocp.updatePermisosocp(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(permisosocp);
});

module.exports = router;
