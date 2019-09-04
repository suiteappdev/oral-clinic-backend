let Sequelize = require("sequelize");

class Registrodeconsecutivos extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Registrodeconsecutivos.init({ id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, documen : Sequelize.STRING, sigla : Sequelize.STRING,  nro: Sequelize.STRING, ano : Sequelize.DECIMAL, prefijo : Sequelize.STRING, consecu : Sequelize.STRING, resolu : Sequelize.STRING, f_vence : Sequelize.DATE, ultimo_nro : Sequelize.STRING, ocupa : Sequelize.TINYINT, ccostos : Sequelize.STRING, factura : Sequelize.TINYINT, sede : Sequelize.STRING, contado : Sequelize.TINYINT, credito : Sequelize.TINYINT, pantalla : Sequelize.STRING, primer_nro : Sequelize.STRING, f_ini_vence : Sequelize.DATE, nro_resolucion : Sequelize.STRING, clavetecnica : Sequelize.STRING }, { sequelize, modelName: 'con_inv' });
	
	
	locals.models.Registrodeconsecutivos =  sequelize.models.con_inv;
}

module.exports = Init;

/*ALTER TABLE `con_inv`
	CHANGE COLUMN `año` `ano` DECIMAL(4,0) NULL DEFAULT '0' AFTER `nro`;*/

