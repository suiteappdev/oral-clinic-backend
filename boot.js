const fs = require('fs');

const CONTROLLER_DIR = `${__dirname}/controllers/`;
const SERVICE_DIR = `${__dirname}/services/`;
const ROUTE_DIR = `${__dirname}/routes/`;

let getControllers = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readdir(`${CONTROLLER_DIR}`, (err, items) => {
            if(err){
                return reject(err);
            }

            resolve(items.filter( (js)=>js.match('.js') ) );
        });   
    });
}

let getServices = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readdir(`${SERVICE_DIR}`, (err, items) => {
            if(err){
                return reject(err);
            }

            resolve(items.filter( (js)=>js.match('.js') ) );
        });   
    }); 
}

let getRoutes= ()=>{
    return new Promise((resolve, reject)=>{
        fs.readdir(`${ROUTE_DIR}`, (err, items) => {
            if(err){
                return reject(err);
            }

            resolve(items.filter( (js)=>js.match('.js') ) );
        });   
    }); 
}


let boot = async (app) =>{
    let controllers = await getControllers();
    let services = await getServices();
    let routes = await getRoutes();

    return new Promise(async (resolve, reject)=>{
        try{

            for(s in services){
                let service = require(`${SERVICE_DIR}${services[s]}`);
                await service.init(app, app.locals);
            }

            for(c in controllers){
                let contrls = require(`${CONTROLLER_DIR}${controllers[c]}`)
                await contrls.init(app, app.locals);
            }
        
            app.locals.mainController = {
                returnError: returnError
            };

            resolve(true);

        }catch(e){
            return reject(e);
        }
    });
}

const returnError = (res, httpCode, code)=>{
    res.status(httpCode);
    res.send(JSON.stringify({error_id: code}));
    res.end();
}

module.exports = {
    boot
}