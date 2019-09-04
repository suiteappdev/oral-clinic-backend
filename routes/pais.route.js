var express = require('express');
var router = express.Router();

router.post('/paises', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let pais = await req.app.locals.controllers.Paises.savePais(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(pais);
});

router.get('/paises', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let paises = await req.app.locals.controllers.Paises.getPaises(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(paises);
});

router.get('/paises/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let paises = await req.app.locals.controllers.Paises.getPaisesbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(paises);
});

router.delete('/paises/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let paises= await req.app.locals.controllers.Paises.deletePais(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(paises);
});

router.put('/paises/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let pais = await req.app.locals.controllers.Paises.updatePais(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(pais);
});

module.exports = router;
