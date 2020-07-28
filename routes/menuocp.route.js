var express = require('express');
var router = express.Router();

router.post('/menuocp/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let pais = await req.app.locals.controllers.Menuocp.savePais(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(pais);
});

router.get('/menuocp', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let menuocp = await req.app.locals.controllers.Menuocp.getMenuocp(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(menuocp);
});

router.get('/menuocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let menuocp = await req.app.locals.controllers.Menuocp.getMenuocpbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(menuocp);
});

router.delete('/menuocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let menuocp= await req.app.locals.controllers.Menuocp.deletePais(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(menuocp);
});

router.put('/menuocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let pais = await req.app.locals.controllers.Menuocp.updatePais(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(menuocp);
});

module.exports = router;
