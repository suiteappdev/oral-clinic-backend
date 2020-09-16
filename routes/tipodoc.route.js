var express = require('express');
var router = express.Router();

router.post('/tdoc/', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let tdoc = await req.app.locals.controllers.Tdoc.saveTdoc(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tdoc);
});

router.get('/tdoc', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let tdoc = await req.app.locals.controllers.Tdoc.getTdoc(req, res).catch((e)=>{
        console.log(e);
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tdoc);
});

router.get('/tdoc/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let tdoc = await req.app.locals.controllers.Tdoc.getTdocbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tdoc);
});

router.delete('/tdoc/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let tdoc= await req.app.locals.controllers.Tdoc.deleteTdoc(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tdoc);
});

router.put('/tdoc/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let tdoc = await req.app.locals.controllers.Tdoc.updateTdoc(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(tdoc);
});

module.exports = router;
