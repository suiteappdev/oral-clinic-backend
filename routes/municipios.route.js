var express = require('express');
var router = express.Router();

router.post('/municipios', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let municipios = await req.app.locals.controllers.Municipios.saveMunicipios(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(municipios);
});

router.get('/municipios', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let municipios = await req.app.locals.controllers.Municipios.getMunicipios(req, res).catch((e)=>{
        console.log(e.message)
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(municipios);

});

router.get('/municipios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let municipios = await req.app.locals.controllers.Municipios.getMunicipiosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(municipios);
});

router.get('/municipios/departamento/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let municipios = await req.app.locals.controllers.Municipios.getMunicipiosbyDepartamentoid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(municipios);
});

router.delete('/municipios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
    await req.app.locals.controllers.Municipios.deleteMunicipios(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json({});
});

router.put('/municipios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let municipios = await req.app.locals.controllers.Municipios.updateMunicipios(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(municipios);
});

module.exports = router;
