let Sequelize = require("sequelize");

class Municipios extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Municipios.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, codigo : Sequelize.STRING,  nombre: Sequelize.STRING, departa : Sequelize.STRING,  marca: Sequelize.TINYINT, agencia : Sequelize.STRING,  provincia: Sequelize.STRING, ica : Sequelize.STRING,  categoria: Sequelize.STRING }, { sequelize, modelName: 'municipio' });

	locals.models.Municipios =  sequelize.models.municipio;
}

module.exports = Init;