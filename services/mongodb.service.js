let fs = require('fs');
let mongojs = require('mongojs');
const connection_string = process.env.MONGO_CSTRING;
let logger;

let init = async (app, locals)=>{
    logger = locals.logger.getLogger("mongodbService");

    return new Promise(async (resolve, reject)=>{
        
        logger.info(`Connecting with mongodb server`);

        let connection = await initialize().catch((e)=>{
            logger.error(`Error connection with mongodb instance ${e.message}`);
            return reject(new Error(`Error connection with mongodb instance ${e.message}`));
        }); 

        logger.info(`Connection Done.`);

        if(connection){
            try{
                locals.db = connection|| {};
                return resolve();
            
            }catch(e){
                logger.error(`Error loading model ${models[m]}`);
                reject(new Error(`[ERROR]: loading model ${models[m]}`));
            }
        }
    });

}

let initialize = async ()=>{

    return new Promise((resolve, reject)=>{
        try{
            let db = mongojs(connection_string, ['video', 'video_converted', 'lives']);
           
            return resolve(db);
        }catch(e){
            logger.error(`Error connection with mongodb instance`);
            reject(e);
        }
    });

};

module.exports = { init };