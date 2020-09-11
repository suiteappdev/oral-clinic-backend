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

-- Volcando estructura para tabla oralclinicp.permisosocp
DROP TABLE IF EXISTS `permisosocp`;
CREATE TABLE IF NOT EXISTS `permisosocp` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `idsubmenu` mediumint(9) NOT NULL,
  `nuevo` int(9) NOT NULL,
  `modificar` int(9) NOT NULL,
  `eliminar` int(9) NOT NULL,
  `imprimir` int(9) NOT NULL,
  `exportar` int(9) NOT NULL,
  `importar` int(9) NOT NULL,
  `buscar` int(9) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_permisosocp_submenuocp` (`idsubmenu`),
  CONSTRAINT `FK_permisosocp_submenuocp` FOREIGN KEY (`idsubmenu`) REFERENCES `submenuocp` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla oralclinicp.permisosocp: ~0 rows (aproximadamente)
DELETE FROM `permisosocp`;
/*!40000 ALTER TABLE `permisosocp` DISABLE KEYS */;
INSERT INTO `permisosocp` (`id`, `idsubmenu`, `nuevo`, `modificar`, `eliminar`, `imprimir`, `exportar`, `importar`, `buscar`) VALUES
	(1, 1, 1, 1, 1, 1, 1, 1, 1),
	(2, 2, 1, 1, 1, 1, 1, 1, 1),
	(3, 3, 1, 1, 1, 1, 1, 1, 1),
	(4, 4, 1, 1, 1, 1, 1, 1, 1),
	(5, 5, 1, 1, 1, 1, 1, 1, 1),
	(6, 6, 1, 1, 1, 1, 1, 1, 1),
	(7, 7, 1, 1, 1, 1, 1, 1, 1),
	(8, 8, 1, 1, 1, 1, 1, 1, 1);
/*!40000 ALTER TABLE `permisosocp` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
