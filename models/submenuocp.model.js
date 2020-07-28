let Sequelize = require("sequelize");

class Submenuocp extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Submenuocp.init({ 
		id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		idmenu : { type: Sequelize.INTEGER, references: 'menuocp', referenceskey: 'id' }, 
		nombre : Sequelize.STRING,  
		Administrador: Sequelize.INTEGER,
		Odontologo: Sequelize.INTEGER,
		Higienista_Oral: Sequelize.INTEGER,
		Recepcion: Sequelize.INTEGER,
		Cajero: Sequelize.INTEGER,
		Auxiliares: Sequelize.INTEGER,
		Doctor: Sequelize.INTEGER
	},
		{ sequelize, modelName: 'submenuocp' });

	locals.models.Submenuocp =  sequelize.models.submenuocp;
}

module.exports = Init;