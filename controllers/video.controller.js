
let services;
let logger;
let db;

let init = (app, locals)=>{
    logger = locals.logger.getLogger("videoController");

    services = locals.services || {};
    db = locals.db;

    logger.info("Initialization started.");


    locals.controllers = locals.controllers || {}
    
    locals.controllers.videos = {
        saveLiveVideo,
        removeLiveVideo,
        getLiveVideos,
        saveRecordedVideo,
        getRecordedVideos,
        getVideosByUniqueName,
        getVideosName,
        deleteRecordedVideo,
        updateVideoStatus,
        setUID,
        removeAll
    }

    logger.info("Initialization finished.");

}


let saveLiveVideo = (stream, req, res )=>{
    return new Promise((resolve, reject)=>{

        db.lives.save(stream, (err, live)=>{
            if( err || !live ) reject(err);

            resolve(live);
        });

    });
}

let removeLiveVideo = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        db.lives.remove({ id : id }, (err, removed)=>{
            if(err) {
                return reject(err);
            }

            resolve(removed);
        });
    });
}

let getLiveVideos = ()=>{
    return new Promise((resolve, reject)=>{
        db.lives.find({}, (err, videos)=>{
            if(err){
               return reject(err); 
            }

            resolve(videos);
        });
    });
}

let saveRecordedVideo = (data, req, res)=>{
    return new Promise((resolve, reject)=>{
        
        db.recorded_videos.save(data, (err, video)=>{
            if(err){
                return reject(err);
            }

            resolve(video);
        });
    });
}

let getRecordedVideos = (user, req, res)=>{
    return new Promise((resolve, reject)=>{
        db.recorded_videos.find({ user }, (err, recorded)=>{
            if(!err){
                return reject(err);
            }

            resolve(recorded);
        });
    });
}

let getVideosName = (name, req, res)=>{
    return new Promise((resolve, reject)=>{
        db.recorded_videos.find({ name }, (err, videos)=>{
            if(!err){
                return reject(err);
            }

            resolve(videos);
        });
    });
}

let getVideosByUniqueName = (unique_name, req, res)=>{
    return new Promise((resolve, reject)=>{
        db.recorded_videos.find({ unique_name }, (err, videos)=>{
            if(!err){
                return reject(err);
            }

            resolve(videos);
        });
    });
}

let deleteRecordedVideo = (id, req, res)=>{
    return new Promise((resolve, reject)=>{
        db.recorded_videos.findOneAndRemove({ id }, (err, removed)=>{
            if(err) {
                return reject(err);
            }

            resolve(removed);
        });
    });
}

let updateVideoStatus = (id, status, req, res)=>{
    return new Promise((resolve, reject)=>{
        db.recorded_videos.update({ id }, { $set : { status } }, (err, updated)=>{
            if(!err){
                return reject(err);
            }

            resolve(updated);
        });
    });
}

let setUID = (id, unique_name, req, res)=>{
    return new Promise((resolve, reject)=>{
        recorded_videos.update({ id }, { $set : { unique_name } }, (err, updated)=>{
            if(!err){
                return reject(err);
            }

            resolve(updated);
        });
    });
}

let removeAll  = ()=>{
    return new Promise((resolve, reject)=>{
        db.lives.remove((err)=>{
            if(err) {
                return reject(err);
            }
            resolve();
        });
    });
}


module.exports = { init };