var express = require('express');
var router = express.Router();

router.post('/perfilesocp/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let perfilesocp = await req.app.locals.controllers.Perfilesocp.savePerfilesocp(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(perfilesocp);
});

router.get('/perfilesocp', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let perfilesocp = await req.app.locals.controllers.Perfilesocp.getPerfilesocp(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(perfilesocp);
});

router.get('/perfilesocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let perfilesocp = await req.app.locals.controllers.Perfilesocp.getPerfilesocpbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(perfilesocp);
});

router.delete('/perfilesocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let perfilesocp= await req.app.locals.controllers.Perfilesocp.deletePerfilesocp(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(perfilesocp);
});

router.put('/perfilesocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let perfilesocp = await req.app.locals.controllers.Perfilesocp.updatePerfilesocp(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(perfilesocp);
});

module.exports = router;
