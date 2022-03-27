-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 27-03-2022 a las 17:16:30
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Natgas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pertenece`
--

CREATE TABLE `Pertenece` (
  `idPertenece` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `position` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Pertenece`
--

INSERT INTO `Pertenece` (`idPertenece`, `email`, `idDepartamento`, `position`, `date`, `created_at`, `updated_at`) VALUES
(1, 'earocas@natgas.com', 1, 'Analista', '2004-01-19', '2004-01-21 06:00:00', NULL),
(2, 'qviso@natgas.com', 2, 'Especialista', '2005-01-19', '2005-01-21 06:00:00', NULL),
(3, 'jayala@natgas.com', 3, 'Coordinacion', '2006-01-19', '2006-01-21 06:00:00', NULL),
(4, 'jbaez@natgas.com', 4, 'Gerencia', '2007-01-19', '2007-01-21 06:00:00', NULL),
(5, 'mbastardes@natgas.com', 5, 'Direccion', '2008-01-19', '2008-01-21 06:00:00', NULL),
(6, 'janguera@natgas.com', 6, 'Analista', '2009-01-19', '2009-01-21 06:00:00', '2008-04-22 12:10:00'),
(7, 'epascual@natgas.com', 7, 'Especialista', '2010-01-19', '2010-01-21 06:00:00', '2009-01-22 00:00:00'),
(8, 'lvalles@natgas.com', 8, 'Coordinacion', '2011-01-19', '2011-01-21 06:00:00', NULL),
(9, 'rraya@natgas.com', 9, 'Gerencia', '2012-01-19', '2012-01-21 06:00:00', NULL),
(10, 'jandreu@natgas.com', 10, 'Direccion', '2013-01-19', '2013-01-21 06:00:00', NULL),
(11, 'mbaraldes@natgas.com', 11, 'Analista', '2014-01-19', '2014-01-21 06:00:00', NULL),
(12, 'aberengueras@natgas.com', 1, 'Especialista', '2015-01-19', '2015-01-21 06:00:00', NULL),
(13, 'glopez@natgas.com', 2, 'Coordinacion', '2016-01-19', '2016-01-21 06:00:00', NULL),
(14, 'earnau@natgas.com', 3, 'Gerencia', '2017-01-19', '2017-01-21 06:00:00', NULL),
(15, 'jraya@natgas.com', 4, 'Direccion', '2018-01-19', '2018-01-21 06:00:00', NULL),
(16, 'lzambudio@natgas.com', 5, 'Analista', '2019-01-19', '2019-01-21 06:00:00', NULL),
(17, 'lbidault@natgas.com', 6, 'Especialista', '2020-01-19', '2020-01-21 06:00:00', '2023-01-22 00:00:00'),
(18, 'dzafra@natgas.com', 7, 'Coordinacion', '2021-01-19', '2021-01-21 06:00:00', NULL),
(19, 'jaleu@natgas.com', 8, 'Gerencia', '2022-01-19', '2022-01-21 06:00:00', NULL),
(20, 'abadia@natgas.com', 9, 'Direccion', '2023-01-19', '2023-01-21 06:00:00', NULL),
(21, 'rmorales@natgas.com', 10, 'Analista', '2011-05-19', '2011-05-21 05:00:00', NULL),
(22, 'djblanco@natgas.com', 11, 'Especialista', '2012-05-19', '2012-05-21 05:00:00', NULL),
(23, 'aalvarez@natgas.com', 1, 'Coordinacion', '2013-05-19', '2013-05-21 05:00:00', '2028-05-22 00:00:00'),
(24, 'ggarcia@natgas.com', 2, 'Gerencia', '2014-05-19', '2014-05-21 05:00:00', NULL),
(25, 'ilibori@natgas.com', 3, 'Direccion', '2015-05-19', '2015-05-21 05:00:00', NULL),
(26, 'dbidault@natgas.com', 4, 'Analista', '2015-05-19', '2015-05-21 05:00:00', NULL),
(27, 'xbenitez@natgas.com', 5, 'Especialista', '2017-05-19', '2017-05-21 05:00:00', '2020-05-22 00:00:00'),
(28, 'mpascual@natgas.com', 6, 'Coordinacion', '2018-05-19', '2018-05-21 05:00:00', NULL),
(29, 'jayalas@natgas.com', 7, 'Gerencia', '2019-05-19', '2019-05-21 05:00:00', NULL),
(30, 'glistan@natgas.com', 8, 'Direccion', '2020-05-19', '2020-05-21 05:00:00', NULL),
(31, 'srasero@natgas.com', 9, 'Analista', '2021-05-19', '2021-05-21 05:00:00', NULL),
(32, 'aarnalot@natgas.com', 10, 'Especialista', '2022-05-19', '2022-05-21 05:00:00', NULL),
(33, 'mmoliner@natgas.com', 11, 'Coordinacion', '2023-05-19', '2023-05-21 05:00:00', NULL),
(34, 'bgalobart@natgas.com', 1, 'Gerencia', '2024-05-19', '2024-05-21 05:00:00', NULL),
(35, 'blopez@natgas.com', 2, 'Direccion', '2025-05-19', '2025-05-21 05:00:00', NULL),
(36, 'msanchez@natgas.com', 3, 'Analista', '2026-05-19', '2026-05-21 05:00:00', NULL),
(37, 'galavedra@natgas.com', 4, 'Especialista', '2027-05-19', '2027-05-21 05:00:00', NULL),
(38, 'mialigue@natgas.com', 5, 'Coordinacion', '2028-05-19', '2028-05-21 05:00:00', NULL),
(39, 'tmas@natgas.com', 6, 'Gerencia', '2029-05-19', '2029-05-21 05:00:00', NULL),
(40, 'aaloy@natgas.com', 7, 'Direccion', '2030-05-19', '2030-05-21 05:00:00', NULL),
(41, 'jmarti@natgas.com', 8, 'Analista', '2031-05-19', '2031-05-21 05:00:00', NULL),
(42, 'ibidault@natgas.com', 9, 'Especialista', '2001-06-19', '2001-06-21 05:00:00', NULL),
(43, 'oaloy@natgas.com', 10, 'Coordinacion', '2002-06-19', '2002-06-21 05:00:00', NULL),
(44, 'saltmiras@natgas.com', 11, 'Gerencia', '2003-06-19', '2003-06-21 05:00:00', NULL),
(45, 'jbelmonte@natgas.com', 1, 'Direccion', '2004-06-19', '2004-06-21 05:00:00', NULL),
(46, 'mbajona@natgas.com', 2, 'Analista', '2005-06-19', '2005-06-21 05:00:00', NULL),
(47, 'jaguilar@natgas.com', 3, 'Especialista', '2006-06-19', '2006-06-21 05:00:00', NULL),
(48, 'mjbarriga@natgas.com', 4, 'Coordinacion', '2007-06-19', '2007-06-21 05:00:00', NULL),
(49, 'ravila@natgas.com', 5, 'Gerencia', '2008-06-19', '2008-06-21 05:00:00', NULL),
(50, 'jbiosca@natgas.com', 6, 'Direccion', '2009-06-19', '2009-06-21 05:00:00', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Pertenece`
--
ALTER TABLE `Pertenece`
  ADD PRIMARY KEY (`idPertenece`),
  ADD KEY `email` (`email`),
  ADD KEY `idDepartamento` (`idDepartamento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Pertenece`
--
ALTER TABLE `Pertenece`
  MODIFY `idPertenece` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Pertenece`
--
ALTER TABLE `Pertenece`
  ADD CONSTRAINT `pertenece_ibfk_1` FOREIGN KEY (`email`) REFERENCES `Perfil` (`email`),
  ADD CONSTRAINT `pertenece_ibfk_2` FOREIGN KEY (`idDepartamento`) REFERENCES `Departamento` (`idDepartamento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
