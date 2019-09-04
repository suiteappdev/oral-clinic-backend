let Sequelize = require("sequelize");

class Nits extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Nits.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, t_doc : Sequelize.STRING, nit : Sequelize.STRING, dv : Sequelize.STRING, nom1 : Sequelize.STRING, nom2 : Sequelize.STRING, ape1 : Sequelize.STRING, ape2 : Sequelize.STRING, razon : Sequelize.STRING, nom_dir : Sequelize.STRING, gerente : Sequelize.STRING, direcc : Sequelize.STRING, barrio : Sequelize.STRING, ciudad : Sequelize.STRING, telefono : Sequelize.STRING, f_ingre : Sequelize.DATE,  regimen: Sequelize.STRING, autorete : Sequelize.INTEGER, age_ret : Sequelize.INTEGER, cli : Sequelize.INTEGER, prove : Sequelize.INTEGER, pais : Sequelize.STRING, email : Sequelize.STRING, celular : Sequelize.STRING, act_econ : Sequelize.STRING  }, { sequelize, modelName: 'nits' });

 	locals.models.Nits =  sequelize.models.nits;
}

module.exports = Init;