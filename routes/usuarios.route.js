var express = require('express');
var router = express.Router();

router.post('/usuarios', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let usuarios = await req.app.locals.controllers.Usuarios.saveUsuarios(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(usuarios);
});

router.get('/usuarios', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let usuarios = await req.app.locals.controllers.Usuarios.getUsuarios(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(usuarios);
});

router.get('/usuarios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let usuarios = await req.app.locals.controllers.Usuarios.getUsuariosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(usuarios);
});

router.delete('/usuarios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let usuarios= await req.app.locals.controllers.Usuarios.deleteUsuarios(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(usuarios);
});

router.put('/usuarios/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
    await req.app.locals.controllers.Usuarios.updateUsuarios(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    let usuario = await req.app.locals.controllers.Usuarios.getUsuariosbyid(id, req, res);

    res.status(200).json(usuario);
});

module.exports = router;
