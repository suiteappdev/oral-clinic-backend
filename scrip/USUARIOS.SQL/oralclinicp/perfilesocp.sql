-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.9-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla oralclinicp.perfilesocp
CREATE TABLE IF NOT EXISTS `perfilesocp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `perfil` char(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla oralclinicp.perfilesocp: ~7 rows (aproximadamente)
DELETE FROM `perfilesocp`;
/*!40000 ALTER TABLE `perfilesocp` DISABLE KEYS */;
INSERT INTO `perfilesocp` (`id`, `perfil`) VALUES
	(1, 'Administrador'),
	(2, 'Odontologo'),
	(3, 'Higienista Oral'),
	(4, 'Recepcion'),
	(5, 'Cajero'),
	(6, 'Auxiliares'),
	(7, 'Doctor');
/*!40000 ALTER TABLE `perfilesocp` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
