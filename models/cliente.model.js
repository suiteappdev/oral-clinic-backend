let Sequelize = require("sequelize");
let {DataTypes} = require("sequelize");

class Cliente extends Sequelize.Model {

}

let Init = (app, locals) => {
	locals.models = locals.models || {};
	let sequelize = locals.services.sequelize;

	Cliente.init(
		{ 
			codigo: {
				type: DataTypes.STRING(10),
				allowNull: false,
				defaultValue: ' ',
			},
			zona: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			cod_con: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			nombre: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ' '
			},
			nit_cli: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			expedida: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			dia: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			socie: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			direcc: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			barrio: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tel: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			municipio: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ''
			},
			depto: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			pais: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			e_mail: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			web: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ' '
			},
			reg_mtil: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			fechareg: {
				type: DataTypes.DATE,
				allowNull: true
			},
			f_ingre: {
				type: DataTypes.DATE,
				allowNull: true
			},
			f_nacio: {
				type: DataTypes.DATE,
				allowNull: true
			},
			camara: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			negocio: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ' '
			},
			antigue: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			cla_neg: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			regim: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			r_legal: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			cc: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			de: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			solicita: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			propio: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			b_tipo: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			b_muni: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			b_dire: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			b_tel: {
				type: DataTypes.STRING(15),
				allowNull: true,
				defaultValue: ' '
			},
			b_vlrcial: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			b_escri: {
				type: DataTypes.STRING(12),
				allowNull: true,
				defaultValue: ' '
			},
			b_matri: {
				type: DataTypes.STRING(15),
				allowNull: true,
				defaultValue: ' '
			},
			b_fecha: {
				type: DataTypes.DATE,
				allowNull: true
			},
			b_pfami: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			c_cred: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			c_cupo: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			c_plazo: {
				type: DataTypes.STRING(3),
				allowNull: true,
				defaultValue: ' '
			},
			c_pago: {
				type: DataTypes.STRING(15),
				allowNull: true,
				defaultValue: ' '
			},
			c_fsoli: {
				type: DataTypes.DATE,
				allowNull: true
			},
			c_vende: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			c_aprobo: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ''
			},
			c_concep: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ''
			},
			crips: {
				type: DataTypes.STRING(12),
				allowNull: true,
				defaultValue: ' '
			},
			tarifa: {
				type: DataTypes.STRING(3),
				allowNull: true,
				defaultValue: ' '
			},
			f_ini: {
				type: DataTypes.DATE,
				allowNull: true
			},
			f_final: {
				type: DataTypes.DATE,
				allowNull: true
			},
			saldo: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			cuenta: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			disponible: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			regimen: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			capita: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			ok_ent: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			concepto: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			v_contra: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			activo: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			dv: {
				type: DataTypes.STRING(2),
				allowNull: true,
				defaultValue: ' '
			},
			orden: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			ecivil: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			carne: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			tip_usuario: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			nivel: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			contrib: {
				type: DataTypes.STRING(2),
				allowNull: true,
				defaultValue: ' '
			},
			ocupacion: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: ''
			},
			remitido: {
				type: DataTypes.STRING(80),
				allowNull: true,
				defaultValue: ''
			},
			medicina: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			creado: {
				type: DataTypes.DATE,
				allowNull: true
			},
			modificado: {
				type: DataTypes.DATE,
				allowNull: true
			},
			codent: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ' '
			},
			codent2: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ' '
			},
			megocio: {
				type: DataTypes.DATE,
				allowNull: true
			},
			c_califi: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			estado: {
				type: DataTypes.STRING(12),
				allowNull: true,
				defaultValue: ' '
			},
			estudio: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			rechazado: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			inactivo: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			credito: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			notas: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			lista: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			age_ret: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			reteiva: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			fv_admon: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			f_compro: {
				type: DataTypes.DATE,
				allowNull: true
			},
			cod_mer: {
				type: DataTypes.STRING(12),
				allowNull: true,
				defaultValue: ' '
			},
			nomneti: {
				type: DataTypes.STRING(80),
				allowNull: true,
				defaultValue: ' '
			},
			sexo: {
				type: DataTypes.STRING(1),
				allowNull: true,
				defaultValue: ' '
			},
			zona2: {
				type: DataTypes.STRING(1),
				allowNull: true,
				defaultValue: ' '
			},
			contrato: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			munic: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ' '
			},
			dpto: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ' '
			},
			tipregi: {
				type: DataTypes.STRING(1),
				allowNull: true,
				defaultValue: ' '
			},
			pcte: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			direcc1: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			barrio1: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ''
			},
			agencia: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			historia: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ''
			},
			pn: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			sn: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			pa: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			sa: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			email: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			tip_iden: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			usucrea: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			usumodi: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ' '
			},
			id: {
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER(11),
				allowNull: false
			},
			consecu: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			consecu1: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			asesor: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tipo_ide: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			conent: {
				type: DataTypes.STRING(15),
				allowNull: true,
				defaultValue: ' '
			},
			telef: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			nomenti: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			años: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			foto: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ' '
			},
			naciona: {
				type: DataTypes.STRING(60),
				allowNull: true,
				defaultValue: ''
			},
			medico: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			alergia: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: ' '
			},
			dir_med: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ' '
			},
			tel_med: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			particu: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			porce: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			padre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			ced_padre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tel_padre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			dir_padre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			dir_padre_ofi: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tel_p_ofi: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			celular_padre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			profesion_padre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			email_padre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			madre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			ced_madre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tel_madre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			dir_madre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			dir_madre_ofi: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tel_m_ofi: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			celular_madre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			profesion_madre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			email_madre: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			familiar: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			ced_familiar: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tel_familiar: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			dir_familiar: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			dir_fami_ofi: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			tel_fami_ofi: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			celular_fami: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			profe_fami: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			email_fami: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			observacion: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			control_doc: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			icbf: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			paipi: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			privado: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			p_muni: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			despla: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			desmo: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			hijo_desmo: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			s_ante: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			estrato: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ' '
			},
			niv_sisben: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ' '
			},
			carne_sisben: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			sistema_sal: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			etnia: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			resguardo: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ' '
			},
			capa_espe: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			discapa: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ' '
			},
			fallecido: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			fechafall: {
				type: DataTypes.DATE,
				allowNull: true
			},
			sabefirmar: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '1'
			},
			imghuella: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			canal: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ''
			},
			nomreco: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ''
			},
			asesor2: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ''
			},
			oro: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			plata: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			platino: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			tip_usuari: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			cta_rete: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			p_rete: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			convenio: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			nit: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			mod_valor: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			canje: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			tipo: {
				type: DataTypes.STRING(40),
				allowNull: true,
				defaultValue: ''
			},
			hobbie: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			esplan: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			fechamercadeo: {
				type: DataTypes.DATE,
				allowNull: true
			},
			telacompañante: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: ''
			},
			nombreresponsable: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			parentresponsable: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			meses: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			tip_religion: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			cedula_resp: {
				type: DataTypes.STRING(15),
				allowNull: true,
				defaultValue: ''
			},
			codigohl7: {
				type: DataTypes.STRING(15),
				allowNull: true,
				defaultValue: ''
			},
			g_poblacional: {
				type: DataTypes.STRING(4),
				allowNull: true,
				defaultValue: ''
			},
			p_etnica: {
				type: DataTypes.STRING(4),
				allowNull: true,
				defaultValue: ''
			},
			causa_muerte: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ''
			},
			cta_cree: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			cree: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0.00'
			},
			no_form: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			cod_carrera: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ''
			},
			cod_jornada: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ''
			},
			cod_semestre: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ''
			},
			homologa: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ''
			},
			d_conexion: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: ''
			},
			f_pago: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ''
			},
			dnaci: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			lnaci: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			rh: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			cel: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ''
			},
			acompañante: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ''
			},
			tel_acompa: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: ''
			},
			celular: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ''
			},
			rete: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			lugarnac: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			parentacompañante: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			cedulaacompañante: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			niv_academi: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			pprograma: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			eps: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: ''
			},
			n_hijos: {
				type: DataTypes.STRING(5),
				allowNull: true,
				defaultValue: ''
			},
			f_retiro: {
				type: DataTypes.DATE,
				allowNull: true
			},
			cc_vende: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			t_fac: {
				type: DataTypes.STRING(1),
				allowNull: true,
				defaultValue: ''
			},
			procesoj: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			sede: {
				type: DataTypes.STRING(3),
				allowNull: true,
				defaultValue: ''
			},
			patologia: {
				type: DataTypes.STRING(250),
				allowNull: true,
				defaultValue: ''
			},
			dias_m: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				defaultValue: '0'
			},
			cod_barrio: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			cod_ciudad: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			zona1: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			c_impestadoc: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			cta_radicacion: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			valautoriza: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			arl: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			fpension: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			categoria: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: ''
			},
			categoria_basico: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			},
			contactocartera: {
				type: DataTypes.STRING(254),
				allowNull: true,
				defaultValue: ''
			},
			rete_siempre: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			descargado: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			mod_precio: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				defaultValue: '0'
			},
			enconsultorio: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: ''
			},
			conmedico: {
				type: DataTypes.STRING(150),
				allowNull: true,
				defaultValue: ''
			},
			prof_atiende: {
				type: DataTypes.STRING(20),
				allowNull: true,
				defaultValue: ''
			},
			ctaglosaproceso: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			ctaglosaconciliada: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: ''
			},
			concepto_ica: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: ''
			}
		}, { sequelize, modelName: 'cliente' });

	locals.models.Cliente =  sequelize.models.cliente;
}

module.exports = Init;