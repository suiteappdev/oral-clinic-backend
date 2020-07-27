var express = require('express');
var router = express.Router();

router.post('/empleados', async (req, res)=>{
    mainController = req.app.locals.mainController;
    console.log("body", req.body);
    let data = req.body;

    let empleados = await req.app.locals.controllers.Empleados.saveEmpleados(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(empleados);
});

router.get('/empleados', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let empleados = await req.app.locals.controllers.Empleados.getEmpleados(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(empleados);
});

router.get('/empleados/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let empleados = await req.app.locals.controllers.Empleados.getEmpleadosbyid(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(empleados);
});

router.delete('/empleados/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
                                                        
   let empleados= await req.app.locals.controllers.Empleados.deleteEmpleados(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(empleados);
});

router.put('/empleados/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;
    let data = req.body;
                                                        
   let empleados = await req.app.locals.controllers.Empleados.updateEmpleados(id, data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(empleados);
});

module.exports = router;
