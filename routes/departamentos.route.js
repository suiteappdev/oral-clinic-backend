var express = require('express');
var router = express.Router();

router.post('/departamentos', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let departamentos = await req.app.locals.controllers.Departamentos.saveDepartamentos(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(departamentos);
});

router.get('/departamentos', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let departamentos = await req.app.locals.controllers.Departamentos.getDepartamentos(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(departamentos);
});

router.get('/departamentos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let departamentos = await req.app.locals.controllers.Departamentos.getDepartamentosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(departamentos);
});

router.get('/departamentos/pais/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let departamentos = await req.app.locals.controllers.Departamentos.getDepartamentosbyidPais(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(departamentos);
});

router.delete('/departamentos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
    await req.app.locals.controllers.Departamentos.deleteDepartamentos(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    

    res.status(200).json({});
});

router.put('/departamentos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let departamentos = await req.app.locals.controllers.Departamentos.updateDepartamentos(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(departamentos);
});

module.exports = router;
