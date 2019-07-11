var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({ any : {} });

schema.pre('save', (next) => {
  	next();
});

module.exports = mongoose.model('videos',  schema); 