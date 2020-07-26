
let services;
let logger;
let models;
let { QueryTypes } = require('sequelize');
let  jwt = require('jsonwebtoken');
let config = require(`../config/${process.env.NODE_ENV || 'development'}.config.js`);

let init = (app, locals)=>{
    logger = locals.logger.getLogger("authController");

    services = locals.services || {};
    models = locals.models;
    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.Auth = {
        login,
        signup
    }

    logger.info("Initialization finished.");

}

let login = (req, res)=>{
    const { username, password } = req.body;
    let db = req.app.locals.services.sequelize;

    return new Promise(async (resolve, reject)=>{
        const userInfo = await db.query(`select * from usuarios as u where u.cedula = "${username}" and u.clave = "${password}"`, { type: QueryTypes.SELECT }).catch((e)=>reject(e));
        
        if(userInfo && userInfo.length > 0){
            let data = userInfo[0];
            let token = jwt.sign({
                cedula : data.cedula,
                nombres : data.usuario
            }, config.JWT_SECRET);

            resolve({ data, token });
        }else{
            resolve(null);
        }
    });
}

let signup = (data, req, res)=>{
    
    return new Promise((resolve, reject)=>{
        models.Cuentas.create(data).then(async (pais)=>{
            resolve(pais.get({ plain : true}));
        }).catch((e)=>console.log(e));
    });
    
}

module.exports = { init };