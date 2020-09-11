-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.9-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla oralclinicp.submenuocp
DROP TABLE IF EXISTS `submenuocp`;
CREATE TABLE IF NOT EXISTS `submenuocp` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `idmenu` mediumint(9) DEFAULT NULL,
  `nombre` char(255) DEFAULT NULL,
  `Administrador` int(1) DEFAULT '0',
  `Odontologo` int(1) DEFAULT '0',
  `Higienista_Oral` int(1) DEFAULT '0',
  `Recepcion` int(1) DEFAULT '0',
  `Cajero` int(1) DEFAULT '0',
  `Auxiliares` int(1) DEFAULT '0',
  `Doctor` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idmenu` (`idmenu`),
  CONSTRAINT `FK_submenuocp_menuocp` FOREIGN KEY (`idmenu`) REFERENCES `menuocp` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla oralclinicp.submenuocp: ~8 rows (aproximadamente)
DELETE FROM `submenuocp`;
/*!40000 ALTER TABLE `submenuocp` DISABLE KEYS */;
INSERT INTO `submenuocp` (`id`, `idmenu`, `nombre`, `Administrador`, `Odontologo`, `Higienista_Oral`, `Recepcion`, `Cajero`, `Auxiliares`, `Doctor`) VALUES
	(1, 1, 'Pais', 0, 0, 0, 0, 0, 0, 0),
	(2, 1, 'Deapartamentos', 0, 0, 0, 0, 0, 0, 0),
	(3, 1, 'Municipios', 0, 0, 0, 0, 0, 0, 0),
	(4, 1, 'Zonas', 0, 0, 0, 0, 0, 0, 0),
	(5, 1, 'Barrios', 0, 0, 0, 0, 0, 0, 0),
	(6, 2, 'Formas de Pago', 0, 0, 0, 0, 0, 0, 0),
	(7, 3, 'Consecutivos', 0, 0, 0, 0, 0, 0, 0),
	(8, 4, 'Usuario', 0, 0, 0, 0, 0, 0, 0);
/*!40000 ALTER TABLE `submenuocp` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
