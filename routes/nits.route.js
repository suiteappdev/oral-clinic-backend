var express = require('express');
var router = express.Router();

router.post('/nits', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let nits = await req.app.locals.controllers.Nits.saveNits(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(nits);
});

router.get('/nits', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let nits = await req.app.locals.controllers.Nits.getNits(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(nits);
});

router.get('/nits/buscar-nits/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.query.id;
    let limit = req.query.limit;
    let nits = await req.app.locals.controllers.Nits.getNitslikeid(id, limit, req, res).catch((e)=>{
         console.log("e", e.message);
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(nits);
});

router.get('/nit/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let nits = await req.app.locals.controllers.Nits.getNitsbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(nits);
});

router.delete('/nits/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let nits= await req.app.locals.controllers.nits.deleteNits(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(nits);
});

router.put('/nits/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let nits = await req.app.locals.controllers.Nits.updateNits(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(nits);
});

module.exports = router;
