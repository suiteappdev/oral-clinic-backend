let Sequelize = require("sequelize");

class Pais extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Pais.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, codigo : Sequelize.STRING, codigo2 : Sequelize.STRING,  nombre: Sequelize.STRING, cod_factelectronica : Sequelize.INTEGER  }, { sequelize, modelName: 'paises' });

	locals.models.Paises =  sequelize.models.paises;
}

module.exports = Init;