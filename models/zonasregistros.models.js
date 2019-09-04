let Sequelize = require("sequelize");

class Zonasregistros extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Zonasregistros.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, codigo : Sequelize.STRING,  nombre: Sequelize.STRING, ciudad : Sequelize.STRING,  depto: Sequelize.TINYINT, pais : Sequelize.STRING }, { sequelize, modelName: 'zonas_registro' });

	locals.models.Zonasregistros =  sequelize.models.zonas_registro;
}

module.exports = Init;