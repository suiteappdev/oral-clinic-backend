var express = require('express');
var router = express.Router();

router.post('/barrios', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let barrios = await req.app.locals.controllers.Barrios.saveBarrios(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(barrios);
});

router.get('/barrios', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let barrios = await req.app.locals.controllers.Barrios.getBarrios(req, res).catch((e)=>{
        console.log(e.message)
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(barrios);

});

router.get('/barrios/zonasregistros/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;

    let barrios = await req.app.locals.controllers.Barrios.getBarriosbyZonasregistrosid(id, req, res).catch((e)=>{
        console.log(e.message)
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(barrios);

});

router.get('/barrios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let barrios = await req.app.locals.controllers.Barrios.getBarriosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(barrios);
});

router.delete('/barrios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
    await req.app.locals.controllers.Barrios.deleteBarrios(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json({});
});

router.put('/barrios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let barrios = await req.app.locals.controllers.Barrios.updateBarrios(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(barrios);
});

module.exports = router;