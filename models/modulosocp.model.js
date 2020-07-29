let Sequelize = require("sequelize");

class Modulosocp extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Modulosocp.init(
		{ 
		id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, 
		orden : Sequelize.INTEGER,
		nombre : Sequelize.STRING 

	}, 
		{ sequelize, modelName: 'modulosocp' });

	locals.models.Modulosocp =  sequelize.models.modulosocp;
}

module.exports = Init;