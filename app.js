var express = require("express");
var app = express();

var cors = require('cors');
var cookieParser = require('cookie-parser');
var morgan = require("morgan");
var bodyParser = require('body-parser')
let logger = require('log4js');

app.workspace = __dirname;
app.locals.logger = logger;

(async app => {
        
        let isReady = require('./boot').boot(app).catch((e)=>{
            throw(new Error(`[ERROR]: starting app ${e.message}`));
        })

        app.use(cors());
        app.use(cookieParser());
        app.use(bodyParser.json());
        app.use(morgan("dev"));

        app.use('/api/db-manager', require('./routes/video.route'));

        if(isReady){
            app.listen(process.env.PORT || 3005, function () {
                console.log(`db-manager started on PORT ${(process.env.PORT || 3005)}`);
            });
        }

})(app);


