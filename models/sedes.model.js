let Sequelize = require("sequelize");

class Sedes extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Sedes.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, cod : Sequelize.STRING, nombre : Sequelize.STRING,  direccion : Sequelize.STRING, telefono : Sequelize.STRING, ciudad : Sequelize.STRING, dpto : Sequelize.STRING, email : Sequelize.STRING, ced_resp : Sequelize.STRING, nom_resp : Sequelize.STRING, cta : Sequelize.STRING, cod_habilita : Sequelize.STRING, logo : Sequelize.STRING, rutaimagen : Sequelize.STRING, saldosgenerales : Sequelize.INTEGER, ag_auto : Sequelize.INTEGER, capcitxhora : Sequelize.DECIMAL  }, { sequelize, modelName: 'sede' });

	locals.models.Sedes =  sequelize.models.sede;
}

module.exports = Init;