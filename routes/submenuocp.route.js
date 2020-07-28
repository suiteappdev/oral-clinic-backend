var express = require('express');
var router = express.Router();

router.post('/submenuocp/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let submenuocp = await req.app.locals.controllers.Submenuocp.saveSubmenuocp(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(submenuocp);
});

router.get('/submenuocp', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let submenuocp = await req.app.locals.controllers.Submenuocp.getSubmenuocp(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(submenuocp);
});

router.get('/submenuocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let submenuocp = await req.app.locals.controllers.Submenuocp.getSubmenuocpbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(submenuocp);
});

router.delete('/submenuocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let submenuocp= await req.app.locals.controllers.Submenuocp.deleteSubmenuocp(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(submenuocp);
});

router.put('/submenuocp/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let submenuocp = await req.app.locals.controllers.Submenuocp.updateSubmenuocp(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(submenuocp);
});

module.exports = router;
