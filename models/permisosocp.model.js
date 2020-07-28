let Sequelize = require("sequelize");

class Permisosocp extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Permisosocp.init({ 
		id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		idsubmenu : { type: Sequelize.INTEGER, references: 'submenuocp', referenceskey: 'id' }, 
		nuevo : Sequelize.INTEGER,
		modificar : Sequelize.INTEGER,
		eliminar : Sequelize.INTEGER,
		imprimir : Sequelize.INTEGER,
		imprimir : Sequelize.INTEGER,
		exportar : Sequelize.INTEGER, 
		importar : Sequelize.INTEGER  }, 
		{ sequelize, modelName: 'permisosocp' });

	locals.models.Permisosocp =  sequelize.models.permisosocp;
}

module.exports = Init;