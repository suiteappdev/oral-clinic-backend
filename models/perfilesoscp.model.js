let Sequelize = require("sequelize");

class Perfilesocp extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Perfilesocp.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, perfil : Sequelize.STRING }, { sequelize, modelName: 'perfilesocp' });

	locals.models.Perfilesocp =  sequelize.models.perfilesocp;
}

module.exports = Init;