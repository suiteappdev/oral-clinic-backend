var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({ any : {} });

schema.pre('save', (next) => {
  	next();
});

//add plugins

module.exports = mongoose.model('lives',  schema); 