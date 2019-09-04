var express = require('express');
var router = express.Router();

router.post('/ccosto', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let ccosto = await req.app.locals.controllers.Ccosto.saveCcosto(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(ccosto);
});

router.get('/ccosto', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let ccosto = await req.app.locals.controllers.Ccosto.getCcosto(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(ccosto);
});

router.get('/ccosto/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let ccosto = await req.app.locals.controllers.Ccosto.getCcostobyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(ccosto);
});

router.delete('/ccosto/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let ccosto= await req.app.locals.controllers.Ccosto.deleteCcosto(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(ccosto);
});

router.put('/ccosto/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let ccosto = await req.app.locals.controllers.Ccosto.updateCcosto(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(ccosto);
});

module.exports = router;
