let Sequelize = require("sequelize");

class Auditoria extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Auditoria.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, fecha : Sequelize.DATE, usuario : Sequelize.STRING,  opcion: Sequelize.STRING, nuevo : Sequelize.INTEGER, modifico : Sequelize.INTEGER, tipo_doc : Sequelize.STRING, nro : Sequelize.STRING, informacion : Sequelize.STRING, nombrepc : Sequelize.STRING, macpc : Sequelize.STRING  }, { sequelize, modelName: 'paises' });

	locals.models.Auditoria =  sequelize.models.auditoria;
}

module.exports = Init;

