let Sequelize = require("sequelize");

class Departamentos extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Departamentos.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, cod : Sequelize.STRING,  depto: Sequelize.STRING, pais : Sequelize.STRING  }, { sequelize, modelName: 'deptos' });


	locals.models.Departamentos =  sequelize.models.deptos;
}

module.exports = Init;