let fs = require('fs');
let logger;
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});

const upload = multer({ storage });

let uploadService = (filename)=>{
    return upload.single(filename);
}

let init = async (app, locals)=>{
    logger = locals.logger.getLogger("UploadService");

    return new Promise(async (resolve, reject)=>{
        
        logger.info(`Loading upload service`);
        
        try{
            locals.services = locals.services || {};
            locals.services.uploadService = uploadService|| {};
            return resolve();
        
        }catch(e){
            logger.error(`Error loading service UploadService`);
            reject(new Error(`[ERROR]: loading model UploadService`));
        }

        logger.info(`Upload service done.`);

    });

}

module.exports = { init };