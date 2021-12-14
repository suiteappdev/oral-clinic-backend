const csv = require('csvtojson');
let logger;

let csvTojson = (filename)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            const jsonArray = await csv().fromFile(filename);
            resolve(jsonArray);
            
        } catch (error) {
            reject(error);
        }
    });
}

let init = async (app, locals)=>{
    logger = locals.logger.getLogger("CsvToJsonService");

    return new Promise(async (resolve, reject)=>{
        
        logger.info(`Loading CsvToJson service`);
        
        try{
            locals.services = locals.services || {};
            locals.services.csvTojson = csvTojson|| {};
            return resolve();
        
        }catch(e){
            logger.error(`Error loading service CsvToJsonService`);
            reject(new Error(`[ERROR]: loading service CsvToJsonService`));
        }

        logger.info(`CsvToJsonService done.`);

    });

}

module.exports = { init };