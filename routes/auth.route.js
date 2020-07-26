var express = require('express');
var router = express.Router();

router.post('/login', async (req, res)=>{
   let loginData = await req.app.locals.controllers.Auth.login(req, res);

   if(loginData){
        return req.app.locals.mainController.apiResponder(res, 200, loginData);
   }

   return req.app.locals.mainController.apiResponder(res, 401, {});
});

router.post('/signup', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let data = req.body;

    let userInfo = await req.app.locals.controllers.Auth.signup(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(userInfo);
});


module.exports = router;
