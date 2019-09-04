let Sequelize = require("sequelize");

class Barrios extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

    Barrios.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, cod_muni : Sequelize.STRING,  cod_barrio: Sequelize.STRING, nombre : Sequelize.STRING,  zona: Sequelize.TINYINT, departa : Sequelize.STRING, comuna : Sequelize.STRING, flete : Sequelize.DECIMAL, pais : Sequelize.STRING, cod_zona : Sequelize.STRING }, { sequelize, modelName: 'barrio' });

    locals.models.Barrios =  sequelize.models.barrio;
}

module.exports = Init;