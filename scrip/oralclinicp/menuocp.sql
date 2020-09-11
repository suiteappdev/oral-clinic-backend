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

-- Volcando estructura para tabla oralclinicp.menuocp
DROP TABLE IF EXISTS `menuocp`;
CREATE TABLE IF NOT EXISTS `menuocp` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `idmodulo` mediumint(55) DEFAULT NULL,
  `nombre` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idmodulo` (`idmodulo`),
  CONSTRAINT `FK_menuocp_modulocp` FOREIGN KEY (`idmodulo`) REFERENCES `modulosocp` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla oralclinicp.menuocp: ~4 rows (aproximadamente)
DELETE FROM `menuocp`;
/*!40000 ALTER TABLE `menuocp` DISABLE KEYS */;
INSERT INTO `menuocp` (`id`, `idmodulo`, `nombre`) VALUES
	(1, 1, 'Localizacion'),
	(2, 1, 'Formas de Pago'),
	(3, 1, 'Consecutivos'),
	(4, 1, 'Usuarios');
/*!40000 ALTER TABLE `menuocp` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
