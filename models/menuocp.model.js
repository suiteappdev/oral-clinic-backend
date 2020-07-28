let Sequelize = require("sequelize");

class Menuocp extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Menuocp.init({ 
		id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		idmodulo : { type: Sequelize.INTEGER, references: 'moduloscp', referenceskey: 'id' },
		nombre: Sequelize.STRING  }, 
		{ sequelize, modelName: 'menuocp' });

	locals.models.Menuocp =  sequelize.models.menuocp;
}

module.exports = Init;