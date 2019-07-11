var express = require('express');
var router = express.Router();

router.post('/lives', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let data = req.body;

    let live = await req.app.locals.controllers.videos.saveLiveVideo(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(live);
});

router.get('/lives', async (req, res)=>{
    mainController = req.app.locals.mainController;

    let lives = await req.app.locals.controllers.videos.getLiveVideos(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(lives);
});

router.delete('/lives/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;

    await req.app.locals.controllers.videos.removeLiveVideo(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json({});
});

router.get('/recorded-videos/:email', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let email = req.params.email;

    let videos = await req.app.locals.controllers.videos.getRecordedVideos(email, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(videos);
});

router.get('/recorded-videos/by-unique-name/:unique_name', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let unique_name = req.params.unique_name;

    let video = await req.app.locals.controllers.videos.getVideosByUniqueName(unique_name, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(video);
});

router.get('/recorded-videos/by-name/:name', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let name = req.param.name;

    let video = await req.app.locals.controllers.videos.getVideosName(name, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(video);
});

router.post('/recorded-videos', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let data = req.body;

    let videos = await req.app.locals.controllers.videos.saveRecordedVideo(data, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(videos);
});

router.delete('/recorded-videos/:id', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let id = req.params.id;

    let video = await req.app.locals.controllers.videos.deleteRecordedVideo(id, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(video);
});

router.put('/recorded-videos/update-uid', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let data = req.body;

    let video = await req.app.locals.controllers.videos.setUID(data.id, data.unique_name, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(video);
});

router.put('/recorded-videos/update-status', async (req, res)=>{
    mainController = req.app.locals.mainController;
    let data = req.body;

    let video = await req.app.locals.controllers.videos.updateVideoStatus(data.id, data.status, req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json(video);
});

router.get('/remove-all', async (req, res)=>{
    mainController = req.app.locals.mainController;

    await req.app.locals.controllers.videos.removeAll(req, res).catch((e)=>{
        return mainController.returnError(res, 500, 0);
    });

    res.status(200).json({});
});





module.exports = router;
