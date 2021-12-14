if(typeof require !== 'undefined') XLSX = require('xlsx');
const path = require('path');
let logger;

let jsontoxlsx = (data, output)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            const reader = require('xlsx');
  
            let workBook = reader.utils.book_new();
            const workSheet = reader.utils.json_to_sheet(data);
            reader.utils.book_append_sheet(workBook, workSheet, `Plantilla`);
              
            reader.writeFile(workBook, path.resolve(output));

            resolve(data);
            
        } catch (error) {
            reject(error);
        }
    });
}

let init = async (app, locals)=>{
    logger = locals.logger.getLogger("JsonToXlsx Service");

    return new Promise(async (resolve, reject)=>{
        
        logger.info(`Loading JsonToXlsx service`);
        
        try{
            locals.services = locals.services || {};
            locals.services.jsontoxlsx = jsontoxlsx|| {};

            return resolve();
        
        }catch(e){
            logger.error(`Error loading service jsontoxlsx`);
            reject(new Error(`[ERROR]: loading service jsontoxlsx`));
        }

        logger.info(`jsontoxlsx done.`);

    });

}

module.exports = { init };