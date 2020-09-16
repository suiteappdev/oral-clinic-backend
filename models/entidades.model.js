let Sequelize = require("sequelize");
let {DataTypes} = require("sequelize");

class Entidades extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Entidades.init(
		{ 
			codigo: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ' '
			},
			clase: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: ' '
			},
			admini: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ' '
			},
			tarifa: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ' '
			},
			porcma: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			porcme: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			coopago: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			p_conve: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			valor: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			id: {
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER(11),
				allowNull: false
			},
			conve_ant: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			cuenta: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			cod_costos: {
				type: DataTypes.STRING(15),
				allowNull: true,
				defaultValue: ''
			},
			por_rete: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			cta_rete: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			base_rete: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			hono_uvr: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			idoriginal: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				defaultValue: '0'
			},
			cod_suc: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			sucursal: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ''
			},
			adm_automatcit: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '1'
			},
			cod_retencion: {
				type: DataTypes.STRING(3),
				allowNull: true,
				defaultValue: ''
			}
		
		}, { sequelize, modelName: 'entidades' });
				console.log(sequelize.models);
	locals.models.Entidades =  sequelize.models.entidades;
}

module.exports = Init;