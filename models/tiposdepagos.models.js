let Sequelize = require("sequelize");

class Tiposdepagos extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Tiposdepagos.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, cod : Sequelize.STRING, for_p : Sequelize.STRING,  cta: Sequelize.STRING, comi : Sequelize.DECIMAL, doc : Sequelize.TINYINT, devolu : Sequelize.TINYINT, anticipo : Sequelize.TINYINT, canje : Sequelize.TINYINT, otro_nit : Sequelize.TINYINT, nit : Sequelize.STRING, inhabilitado : Sequelize.TINYINT }, { sequelize, modelName: 't_fpag' });

	locals.models.Tiposdepagos =  sequelize.models.t_fpag;
}

module.exports = Init;