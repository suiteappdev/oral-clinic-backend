let Sequelize = require("sequelize");

class Cuentas extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Cuentas.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, cod_cta : Sequelize.STRING, nom_cta : Sequelize.STRING,  nivel: Sequelize.STRING, cta_ajus : Sequelize.STRING, contra_aju : Sequelize.STRING, cod_dian : Sequelize.STRING, concepto : Sequelize.STRING, base : Sequelize.TINYINT, ccosto : Sequelize.TINYINT, nit : Sequelize.TINYINT, corriente : Sequelize.TINYINT, inductor : Sequelize.TINYINT, recurso : Sequelize.TINYINT, fecha : Sequelize.DATE, ds : Sequelize.TINYINT, dp : Sequelize.TINYINT, cruce : Sequelize.TINYINT, niff : Sequelize.TINYINT, gl : Sequelize.TINYINT, notas : Sequelize.STRING  }, { sequelize, modelName: 'cuentas' });

	locals.models.Cuentas =  sequelize.models.cuentas;
}

module.exports = Init;