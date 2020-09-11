let Sequelize = require("sequelize");

class Usuarios extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Usuarios.init({ 
		usuario : Sequelize.STRING, 
		clave : Sequelize.STRING,  
		cedula: Sequelize.STRING, 
		fecha : Sequelize.DATE,
		fechaupdate : Sequelize.DATE,
		responsable: Sequelize.STRING,
		sede: Sequelize.STRING,
		estado: Sequelize.TINYINT,
		id : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, 
		huell_identificacion : Sequelize.STRING,
		huell_huella : Sequelize.BLOB,
		huell_dedo : Sequelize.INTEGER,
		idperfil : { type: Sequelize.INTEGER, references: 'perfilesocp', referenceskey: 'id' }
	}, 
		{ sequelize, modelName: 'usuarios' });

	locals.models.Usuarios =  sequelize.models.usuarios;
}

module.exports = Init;