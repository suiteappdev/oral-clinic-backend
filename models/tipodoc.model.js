let Sequelize = require("sequelize");
let {DataTypes} = require("sequelize");

class Tdoc extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Tdoc.init(
		{ 
			cod: {
				type: DataTypes.CHAR(2),
				allowNull: true
			},
			documento: {
				type: DataTypes.STRING(40),
				allowNull: true,
				defaultValue: ''
			},
			tipo: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			cod2: {
				type: DataTypes.STRING(2),
				allowNull: true,
				defaultValue: ''
			},
			anum: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			alet: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			edad_min: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			id: {
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER(11),
				allowNull: false
			}
		
		}, { sequelize, modelName: 'tipo_doc' });
				console.log(sequelize.models);
	locals.models.Tdoc =  sequelize.models.tipo_doc;
}

module.exports = Init;