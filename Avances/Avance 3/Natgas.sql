-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 12-03-2022 a las 00:59:33
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
-- Estructura de tabla para la tabla `BlogPost`
--

CREATE TABLE `BlogPost` (
  `idBlogPost` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Título` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Contenido` varchar(2000) COLLATE utf8_spanish_ci NOT NULL,
  `Slug` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Imagen` varchar(400) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `BlogPost`
--

INSERT INTO `BlogPost` (`idBlogPost`, `Fecha`, `Título`, `Contenido`, `Slug`, `Imagen`) VALUES
(1, '2020-05-21', 'Recortes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/recortes-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(2, '2021-05-21', 'Nuevas oportunidades', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/nuevas-oportunidades', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(3, '2022-05-21', 'Mejoras', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/mejoras-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(4, '2023-05-21', 'Salud mental', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/salud-mental', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(5, '2024-05-21', 'Dia del empleado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/dia-empleado', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(6, '2025-05-21', 'Comunciate', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/comunicate-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(7, '2026-05-21', 'Marcas historicas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/marcas-historicas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(8, '2027-05-21', 'Precio del gas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/precio-gas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(9, '2028-05-21', 'Paginas relacionadas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/paginas-relacionadas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(10, '2029-05-21', 'Tomate un break', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/tomate-un-break', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(11, '2030-05-21', 'Feliz dia laboral', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/dia-laboral', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(12, '2031-05-21', 'Trabajando en vacaciones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/trabajando-vacaciones', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(13, '2001-06-21', 'Dias festivos del mes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/dias-festivos-junio-21', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(14, '2002-06-21', 'Promociones de Junio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/promociones-junio-21', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(15, '2003-06-21', 'Come saludable', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/come-saludable', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(16, '2004-06-21', 'Ejercitate con esta rutina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/ejercitate-rutina', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(17, '2005-06-21', 'Un dia a la vez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/un-dia-a-la-vez', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(18, '2006-06-21', 'Tecnologia y ciencia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/tecnologia-y-ciencia', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(19, '2007-06-21', 'Ofetas de Junio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/ofertas-de-junio', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg'),
(20, '2008-06-21', 'Como mejorar mi productividad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/como-mejorar-mi-productividad', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Departamento`
--

CREATE TABLE `Departamento` (
  `idDepartamento` int(11) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Departamento`
--

INSERT INTO `Departamento` (`idDepartamento`, `Nombre`) VALUES
(1, 'Marketing'),
(2, 'Operaciones'),
(3, 'Comercial'),
(4, 'Infraestructura'),
(5, 'Bi'),
(6, 'Optimización y eficiencia'),
(7, 'Natdef'),
(8, 'Proyectos estratégicos'),
(9, 'Asuntos regulatorior'),
(10, 'Impúlsate'),
(11, 'Dirección tecnica.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Natgasblock`
--

CREATE TABLE `Natgasblock` (
  `idNatgasblock` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Estatus` tinyint(1) NOT NULL,
  `Periodo` tinyint(1) NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Natgasblock`
--

INSERT INTO `Natgasblock` (`idNatgasblock`, `Fecha`, `Estatus`, `Periodo`, `email`) VALUES
(1, '2011-03-21', 1, 1, 'earocas@natgas.com'),
(2, '2012-03-21', 0, 0, 'qviso@natgas.com'),
(3, '2013-03-21', 0, 0, 'jayala@natgas.com'),
(4, '2014-03-21', 1, 0, 'jbaez@natgas.com'),
(5, '2015-03-21', 0, 0, 'mbastardes@natgas.com'),
(6, '2016-03-21', 1, 0, 'janguera@natgas.com'),
(7, '2017-03-21', 0, 0, 'epascual@natgas.com'),
(8, '2018-03-21', 1, 0, 'lvalles@natgas.com'),
(9, '2019-03-21', 1, 1, 'rraya@natgas.com'),
(10, '2020-03-21', 1, 1, 'jandreu@natgas.com'),
(11, '2021-03-21', 0, 1, 'mbaraldes@natgas.com'),
(12, '2022-03-21', 0, 1, 'aberengueras@natgas.com'),
(13, '2023-03-21', 0, 1, 'glopez@natgas.com'),
(14, '2024-03-21', 0, 1, 'earnau@natgas.com'),
(15, '2025-03-21', 0, 1, 'jraya@natgas.com'),
(16, '2026-03-21', 0, 1, 'lzambudio@natgas.com'),
(17, '2027-03-21', 0, 1, 'lbidault@natgas.com'),
(18, '2028-03-21', 0, 1, 'dzafra@natgas.com'),
(19, '2029-03-21', 1, 1, 'jaleu@natgas.com'),
(20, '2030-03-21', 1, 1, 'abadia@natgas.com'),
(21, '2031-03-21', 1, 1, 'rmorales@natgas.com'),
(22, '2001-04-21', 1, 1, 'djblanco@natgas.com'),
(23, '2002-04-21', 0, 1, 'aalvarez@natgas.com'),
(24, '2003-04-21', 0, 1, 'ggarcia@natgas.com'),
(25, '2004-04-21', 0, 0, 'ilibori@natgas.com'),
(26, '2005-04-21', 0, 0, 'dbidault@natgas.com'),
(27, '2006-04-21', 0, 0, 'xbenitez@natgas.com'),
(28, '2007-04-21', 0, 0, 'mpascual@natgas.com'),
(29, '2008-04-21', 0, 0, 'jayalas@natgas.com'),
(30, '2009-04-21', 0, 0, 'glistan@natgas.com'),
(31, '2010-04-21', 0, 0, 'srasero@natgas.com'),
(32, '2011-04-21', 0, 0, 'aarnalot@natgas.com'),
(33, '2012-04-21', 0, 1, 'mmoliner@natgas.com'),
(34, '2013-04-21', 0, 1, 'bgalobart@natgas.com'),
(35, '2014-04-21', 0, 1, 'blopez@natgas.com'),
(36, '2015-04-21', 0, 1, 'msanchez@natgas.com'),
(37, '2016-04-21', 0, 1, 'galavedra@natgas.com'),
(38, '2017-04-21', 1, 1, 'mialigue@natgas.com'),
(39, '2018-04-21', 1, 1, 'tmas@natgas.com'),
(40, '2019-04-21', 1, 1, 'aaloy@natgas.com'),
(41, '2020-04-21', 1, 1, 'jmarti@natgas.com'),
(42, '2021-04-21', 1, 1, 'ibidault@natgas.com'),
(43, '2022-04-21', 1, 1, 'oaloy@natgas.com'),
(44, '2023-04-21', 1, 1, 'saltmiras@natgas.com'),
(45, '2024-04-21', 1, 0, 'jbelmonte@natgas.com'),
(46, '2025-04-21', 1, 0, 'mbajona@natgas.com'),
(47, '2026-04-21', 1, 0, 'jaguilar@natgas.com'),
(48, '2027-04-21', 1, 0, 'mjbarriga@natgas.com'),
(49, '2028-04-21', 1, 0, 'ravila@natgas.com'),
(50, '2029-04-21', 1, 0, 'jbiosca@natgas.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Noticia`
--

CREATE TABLE `Noticia` (
  `idNoticia` int(11) NOT NULL,
  `Nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` date NOT NULL,
  `Imagen` varchar(400) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Noticia`
--

INSERT INTO `Noticia` (`idNoticia`, `Nombre`, `Fecha`, `Imagen`) VALUES
(1, 'U.S. natgas futures up 2% on lower output, record LNG exports\n', '2001-02-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(2, 'U.S. LNG exporters emerge as big winners of Europe natgas crisis\n', '2019-03-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(3, 'U.S. natgas futures rise 3% to one-week high on colder forecasts', '2030-03-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(4, 'Construirá Natgas Querétaro tres estaciones de GNV', '2005-04-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(5, 'U.S. natgas output, demand to rise in 2022 -EIA', '2010-04-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(6, 'Two Roadblocks Prevent U.S. from Shipping More NatGas to Europe', '2015-05-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(7, 'Bulgargaz proposes 3.5% hike in natgas price for March', '2024-06-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(8, 'Natgas instalará 32 estaciones de servicio en el Bajío y Occidente', '2013-07-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(9, 'Ofrecen alternativa de gas natural para automóviles', '2028-08-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(10, '¿Te conviene convertir tu auto de gasolina a gas natural?', '2001-09-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(11, 'Se reactiva servicio de gas natural en Guadalajara', '2017-10-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(12, 'ESPECIAL La conversión, opción más barata que un auto de agencia: Natgas', '2030-11-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(13, 'Taxis tapatíos operarán con gas natural', '2004-12-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(14, 'Natgas operará estaciones de gas natural en Guadalajara', '2003-01-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(15, 'Entregan Distintivo De Empresa Socialmente Responsable A 51 Compañías De Querétaro', '2002-02-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(16, 'NatGas inicia ambicioso plan de expansión', '2009-03-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(17, 'Baja en suministro de gas natural pega a industria de Quéretaro: Canacintra', '2002-04-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(18, 'Natgas abre una nueva sucursal en Querétaro', '2020-08-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(19, 'Más de 20 millones de toneladas de CO2 reducidas por Natgas', '2013-09-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg'),
(20, 'Natgas se expande a otro estado', '2031-12-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Perfil`
--

CREATE TABLE `Perfil` (
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `diasVacaciones` int(11) NOT NULL,
  `ngBlocksDisponibles` int(11) NOT NULL,
  `No.Empleado` int(11) NOT NULL,
  `Verificado` tinyint(1) NOT NULL,
  `RFC` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `Teléfono` bigint(20) NOT NULL,
  `Dirección` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Género` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `fechaInicioContrato` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Perfil`
--

INSERT INTO `Perfil` (`email`, `diasVacaciones`, `ngBlocksDisponibles`, `No.Empleado`, `Verificado`, `RFC`, `fechaNacimiento`, `Teléfono`, `Dirección`, `Género`, `fechaInicioContrato`) VALUES
('aaloy@natgas.com', 8, 5, 41, 1, 'AOCA0002039N0', '2000-02-03', 4429257845, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2016-04-26'),
('aalvarez@natgas.com', 6, 1, 24, 1, 'AAFA890819Q4A', '1989-08-19', 4426534125, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2011-12-21'),
('aarnalot@natgas.com', 6, 5, 33, 1, 'AAPA000126812', '2000-01-26', 4429756506, 'ANILLO VIAL JUNÍPERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2022-02-15'),
('abadia@natgas.com', 6, 1, 21, 1, 'BATA890816GQ7', '1989-08-16', 4421454394, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2022-02-15'),
('aberengueras@natgas.com', 7, 5, 12, 1, 'BECA0007249V2', '2000-07-24', 4421222126, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2022-04-14'),
('bgalobart@natgas.com', 6, 5, 35, 1, 'GAGB0005054L8', '2000-05-05', 4421551713, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29'),
('blopez@natgas.com', 6, 3, 36, 1, 'LEGB0001296Y2', '2000-01-29', 4424901312, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Femenino', '2011-12-21'),
('dbidault@natgas.com', 6, 1, 27, 1, 'BIPD9304123E3', '1993-04-12', 4428241672, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2015-10-29'),
('djblanco@natgas.com', 6, 1, 23, 1, 'BAFD9003117H5', '1990-03-11', 4425797242, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2015-10-29'),
('dzafra@natgas.com', 6, 5, 19, 1, 'ZAFD950630K74', '1995-06-30', 4427251707, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29'),
('earnau@natgas.com', 6, 5, 14, 1, 'AAME9104129W7', '1991-04-12', 4428495652, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Masculino', '2015-06-10'),
('earocas@natgas.com', 6, 5, 1, 1, 'AOPE900413NX7', '1990-04-13', 4424912166, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Femenino', '2020-05-01'),
('epascual@natgas.com', 6, 2, 7, 1, 'PAAE010131PI3', '2001-01-31', 4421882041, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-09-26'),
('galavedra@natgas.com', 6, 4, 38, 1, 'AASG000131LAA', '2000-01-31', 4422151115, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2016-03-31'),
('ggarcia@natgas.com', 6, 1, 25, 1, 'GAAG930410854', '1993-04-10', 4427070011, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2022-02-15'),
('glistan@natgas.com', 6, 5, 31, 1, 'LIFG9304168I2', '1993-04-16', 4425191915, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2015-10-29'),
('glopez@natgas.com', 6, 5, 13, 1, 'GAUG990830K910', '1999-08-30', 4429290795, 'ANILLO VIAL JUNÍPERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-02-19'),
('ibidault@natgas.com', 8, 5, 43, 1, 'BIPI000205L20', '2000-02-05', 4427310007, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Femenino', '2011-12-21'),
('ilibori@natgas.com', 6, 1, 26, 1, 'LIFI930411K96', '1993-04-11', 4423939112, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2016-03-31'),
('jaguilar@natgas.com', 8, 5, 48, 0, 'AURJ9911034T4', '1999-11-03', 4422208514, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-02-15'),
('jaleu@natgas.com', 6, 1, 20, 1, 'AEIJ890705D12', '1989-07-15', 4428558047, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2011-12-21'),
('jandreu@natgas.com', 6, 5, 10, 0, 'AECJ921026ND5', '1992-10-26', 4420881626, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2017-08-15'),
('janguera@natgas.com', 10, 5, 6, 0, 'AUVJ800927LDA', '1980-09-27', 4424473173, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2018-02-14'),
('jayala@natgas.com', 8, 5, 3, 0, 'AAFJ911007P66', '1991-12-07', 4423353115, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2019-10-31'),
('jayalas@natgas.com', 6, 5, 30, 1, 'AATJ930415AW3', '1993-04-15', 4427899927, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2016-03-31'),
('jbaez@natgas.com', 6, 4, 4, 1, 'BATJ911007MZ0', '2000-01-26', 4427286925, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-08-21'),
('jbelmonte@natgas.com', 8, 5, 46, 0, 'BESJ000208DMA', '2000-02-08', 4428539127, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2015-10-29'),
('jbiosca@natgas.com', 9, 2, 18, 1, 'BICL0204153Y2', '1993-05-16', 4420117634, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2016-03-31'),
('jmarti@natgas.com', 8, 5, 42, 1, 'AEVJ000204VD0', '2000-02-04', 4425016169, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31'),
('jraya@natgas.com', 8, 0, 15, 0, 'RAGJ020224QI2', '2000-02-24', 4429379455, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-07-30'),
('lbidault@natgas.com', 6, 5, 17, 1, 'BICL0204153Y2', '2002-04-15', 4426704762, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15'),
('lvalles@natgas.com', 6, 5, 8, 1, 'VAGL990319D55', '1999-03-19', 4426936190, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2017-07-03'),
('lzambudio@natgas.com', 6, 5, 16, 1, 'ZAFL990126LT8', '1999-01-26', 4427789948, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Masculino', '2016-04-26'),
('mbajona@natgas.com', 8, 5, 47, 0, 'BAGM0002093E4', '2000-02-09', 4425896964, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21'),
('mbaraldes@natgas.com', 6, 1, 11, 1, 'BACI9405148D3', '1994-05-14', 4420400918, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2013-09-17'),
('mbastardes@natgas.com', 6, 5, 5, 1, 'BASM970814FE8', '1997-08-14', 4421672339, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Masculino', '2019-06-16'),
('mialigue@natgas.com', 8, 5, 39, 1, 'AIBI000201K89', '2000-02-01', 4426143278, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29'),
('mjbarriga@natgas.com', 8, 5, 49, 0, 'BASJ000201F2A', '2000-02-01', 4429831677, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2016-03-31'),
('mmoliner@natgas.com', 6, 5, 34, 1, 'MOGM000127SZ3', '2000-01-27', 4428627896, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Femenino', '2016-03-31'),
('mpascual@natgas.com', 6, 5, 29, 1, 'PAFM921002568', '1992-10-02', 4424564684, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Masculino', '2022-02-15'),
('msanchez@natgas.com', 6, 4, 37, 1, 'SEGM000130CYA', '2000-01-30', 4429894858, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15'),
('oaloy@natgas.com', 8, 5, 44, 1, 'AOCO000206Q14', '2000-02-06', 4429581621, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-02-15'),
('qviso@natgas.com', 7, 3, 2, 1, 'VIGQ890704UG3', '1989-07-04', 4426047960, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2010-09-05'),
('ravila@natgas.com', 8, 5, 50, 0, 'AIMR000216MF7', '2000-02-16', 4422154324, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Femenino', '2015-10-29'),
('rmorales@natgas.com', 6, 1, 22, 1, 'MOGR901017PU6', '1990-10-17', 4429173527, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31'),
('rraya@natgas.com', 12, 5, 9, 1, 'RAGR9811291D4', '1998-11-29', 4426760050, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2020-12-09'),
('saltmiras@natgas.com', 8, 5, 45, 0, 'AIAS000207LK2', '2000-02-07', 4424733183, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2016-03-31'),
('srasero@natgas.com', 6, 5, 32, 1, 'RAGS930106ET1', '1993-01-06', 4427365631, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2011-12-21'),
('tmas@natgas.com', 8, 5, 40, 1, 'MAFT0011032J6', '2000-11-03', 4427980103, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2016-04-26'),
('xbenitez@natgas.com', 6, 5, 28, 1, 'BEJX930413DV2', '1993-04-13', 4422574837, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pertenece`
--

CREATE TABLE `Pertenece` (
  `idPertenece` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `Puesto` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RangoVacaciones`
--

CREATE TABLE `RangoVacaciones` (
  `idRangoVacaciones` int(11) NOT NULL,
  `Máximo` int(11) NOT NULL,
  `Mínimo` int(11) NOT NULL,
  `Días` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `RangoVacaciones`
--

INSERT INTO `RangoVacaciones` (`idRangoVacaciones`, `Máximo`, `Mínimo`, `Días`) VALUES
(1, 2, 0, 12),
(2, 3, 1, 4),
(3, 4, 2, 11),
(4, 5, 3, 14),
(5, 6, 4, 7),
(6, 7, 5, 7),
(7, 8, 6, 12),
(8, 9, 7, 6),
(9, 10, 8, 8),
(10, 11, 9, 6),
(11, 12, 10, 5),
(12, 13, 11, 7),
(13, 14, 12, 8),
(14, 15, 13, 9),
(15, 16, 14, 8),
(16, 17, 15, 10),
(17, 18, 16, 13),
(18, 19, 17, 8),
(19, 20, 18, 9),
(20, 21, 19, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ReporteMensual`
--

CREATE TABLE `ReporteMensual` (
  `idReporte` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `NPS` int(11) NOT NULL,
  `PorcentajeMujeres` int(11) NOT NULL,
  `PorcentajeHombres` int(11) NOT NULL,
  `ReducciónCO2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ReporteMensual`
--

INSERT INTO `ReporteMensual` (`idReporte`, `Fecha`, `NPS`, `PorcentajeMujeres`, `PorcentajeHombres`, `ReducciónCO2`) VALUES
(1, '2004-01-21', 80, 75, 83, 23),
(2, '2005-01-21', 45, 78, 45, 34),
(3, '2006-01-21', 67, 69, 67, 43),
(4, '2007-01-21', 34, 84, 54, 23),
(5, '2008-01-21', 25, 93, 78, 12),
(6, '2009-01-21', 67, 85, 59, 21),
(7, '2010-01-21', 89, 88, 87, 34),
(8, '2011-01-21', 56, 74, 65, 54),
(9, '2012-01-21', 78, 80, 56, 76),
(10, '2013-01-21', 94, 69, 78, 43),
(11, '2014-01-21', 39, 86, 67, 56),
(12, '2015-01-21', 86, 96, 76, 33),
(13, '2016-01-21', 77, 58, 56, 42),
(14, '2017-01-21', 68, 83, 98, 45),
(15, '2018-01-21', 90, 91, 76, 76),
(16, '2019-01-21', 87, 79, 79, 54),
(17, '2020-01-21', 86, 67, 59, 37),
(18, '2021-01-21', 69, 84, 63, 38),
(19, '2022-01-21', 83, 65, 83, 27),
(20, '2023-01-21', 96, 87, 75, 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Vacaciones`
--

CREATE TABLE `Vacaciones` (
  `idVacaciones` int(11) NOT NULL,
  `verificadoRH` tinyint(1) NOT NULL,
  `verificadoLíder` tinyint(1) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `Estatus` tinyint(1) NOT NULL,
  `Suplente` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Vacaciones`
--

INSERT INTO `Vacaciones` (`idVacaciones`, `verificadoRH`, `verificadoLíder`, `fechaInicio`, `fechaFin`, `Estatus`, `Suplente`, `email`) VALUES
(1, 1, 1, '2004-01-21', '2004-01-21', 1, 'ESTEFANIA AROCAS PASADAS', 'earocas@natgas.com'),
(2, 1, 1, '2005-01-21', '2007-01-21', 1, 'QUERALT VISO GILABERT', 'qviso@natgas.com'),
(3, 1, 1, '2006-01-21', '2010-01-21', 1, 'JOAN AYALA FERRERAS', 'jayala@natgas.com'),
(4, 0, 0, '2007-01-21', '2011-01-21', 0, 'JOAN BAEZ TEJADO', 'jbaez@natgas.com'),
(5, 0, 0, '2008-01-21', '2013-01-21', 0, 'MARC BASTARDES SOTO', 'mbastardes@natgas.com'),
(6, 0, 0, '2009-01-21', '2012-01-21', 0, 'JOSEP ANGUERA VILAFRANCA', 'janguera@natgas.com'),
(7, 0, 0, '2010-01-21', '2012-01-21', 0, 'ESTHER PASCUAL ALOY', 'epascual@natgas.com'),
(8, 0, 0, '2011-01-21', '2013-01-21', 0, 'LAURA VALLÉS GIRVENT', 'lvalles@natgas.com'),
(9, 0, 0, '2012-01-21', '2018-01-21', 0, 'RAQUEL RAYA GARCIA', 'rraya@natgas.com'),
(10, 0, 0, '2013-01-21', '2015-01-21', 0, 'JOAN ANDREU CRUZ', 'jandreu@natgas.com'),
(11, 0, 0, '2014-01-21', '2003-05-21', 0, 'MARIA ISABEL BARALDÉS COMAS', 'mbaraldes@natgas.com'),
(12, 0, 0, '2015-01-21', '2003-05-21', 0, 'ADRIÀ BERENGUERAS CULLERÉS', 'aberengueras@natgas.com'),
(13, 0, 0, '2016-01-21', '2007-05-21', 0, 'GERARD LÓPEZ DE PABLO GARCIA UCEDA', 'glopez@natgas.com'),
(14, 0, 0, '2017-01-21', '2005-05-21', 0, 'ELIOT ARNAU MORENO', 'earnau@natgas.com'),
(15, 1, 1, '2018-01-21', '2006-05-21', 1, 'JORDI RAYA GAVILAN', 'jraya@natgas.com'),
(16, 0, 0, '2019-01-21', '2007-05-21', 0, 'LLUÍS ZAMBUDIO FIGULS', 'lzambudio@natgas.com'),
(17, 0, 1, '2020-01-21', '2010-05-21', 1, 'LAURA BIDAULT CULLERÉS', 'lbidault@natgas.com'),
(18, 0, 0, '2021-01-21', '2010-05-21', 0, 'JORDI BIOSCA FONTANET', 'dzafra@natgas.com'),
(19, 1, 1, '2022-01-21', '2010-05-21', 1, 'DOUNYA ZAFRA FIGULS', 'jaleu@natgas.com'),
(20, 1, 1, '2023-01-21', '2011-05-21', 1, 'JULIO ALEU ICART', 'abadia@natgas.com'),
(21, 1, 1, '2011-05-21', '2012-05-21', 1, 'ANDREU BADIA TORNÉ', 'rmorales@natgas.com'),
(22, 1, 1, '2012-05-21', '2013-05-21', 1, 'RAMON MORALES GESE', 'djblanco@natgas.com'),
(23, 1, 1, '2013-05-21', '2014-05-21', 1, 'DAVID-JESE BLANCO FONTANET', 'aalvarez@natgas.com'),
(24, 1, 1, '2014-05-21', '2017-05-21', 1, 'ARAN ALVAREZ FERNÁNDEZ', 'ggarcia@natgas.com'),
(25, 1, 1, '2015-05-21', '2017-05-21', 1, 'GEMMA GARCIA ALMOGUERA', 'ilibori@natgas.com'),
(26, 1, 1, '2015-05-21', '2017-05-21', 1, 'IVAN LIBORI FIGUERAS', 'dbidault@natgas.com'),
(27, 1, 1, '2017-05-21', '2018-05-21', 1, 'DAVID BIDAULT PUEYO', 'xbenitez@natgas.com'),
(28, 1, 1, '2018-05-21', '2019-05-21', 1, 'XAVIER BENITEZ JOSE', 'mpascual@natgas.com'),
(29, 0, 0, '2019-05-21', '2020-05-21', 0, 'MARIO PASCUAL FLORES', 'jayalas@natgas.com'),
(30, 0, 0, '2020-05-21', '2021-05-21', 0, 'JESUS AYALA TORNÉ', 'glistan@natgas.com'),
(31, 0, 0, '2021-05-21', '2025-05-21', 0, 'GEMMA LISTAN FIGUERAS', 'srasero@natgas.com'),
(32, 0, 0, '2022-05-21', '2025-05-21', 0, 'SILVIA RASERO GAVILAN', 'aarnalot@natgas.com'),
(33, 0, 0, '2023-05-21', '2024-05-21', 0, 'ALBERT ARNALOT PUIG', 'mmoliner@natgas.com'),
(34, 0, 0, '2024-05-21', '2025-05-21', 0, 'MARIA MOLINER GARRIDO', 'bgalobart@natgas.com'),
(35, 0, 0, '2025-05-21', '2026-05-21', 0, 'BERTA GALOBART GARCIA', 'blopez@natgas.com'),
(36, 0, 0, '2026-05-21', '2026-05-21', 0, 'BERTA LÓPEZ GARRIGASSAIT', 'msanchez@natgas.com'),
(37, 0, 0, '2027-05-21', '2028-05-21', 0, 'MIREIA SÁNCHEZ GÓMEZ', 'galavedra@natgas.com'),
(38, 1, 1, '2028-05-21', '2031-05-21', 1, 'GEMMA ALAVEDRA SUNYÉ', 'mialigue@natgas.com'),
(39, 1, 1, '2029-05-21', '2031-05-21', 1, 'MARIA ISABEL ALIGUÉ BONVEHÍ', 'tmas@natgas.com'),
(40, 1, 1, '2030-05-21', '2031-05-21', 1, 'TONI MAS FRANCH', 'aaloy@natgas.com'),
(41, 1, 1, '2031-05-21', '2001-06-21', 1, 'ALEJANDRO ALOY COMPTE', 'jmarti@natgas.com'),
(42, 1, 1, '2001-06-21', '2002-06-21', 1, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com'),
(43, 1, 1, '2002-06-21', '2003-06-21', 1, 'INGRID BIDAULT PÉREZ', 'oaloy@natgas.com'),
(44, 1, 1, '2003-06-21', '2004-06-21', 1, 'OLIVER ALOY CODINACHS', 'saltmiras@natgas.com'),
(45, 1, 1, '2004-06-21', '2007-06-21', 1, 'SANDRA ALTIMIRAS ARMENTEROS', 'jbelmonte@natgas.com'),
(46, 1, 1, '2005-06-21', '2008-06-21', 1, 'JORDI BELMONTE SÁNCHEZ', 'mbajona@natgas.com'),
(47, 1, 1, '2006-06-21', '2008-06-21', 1, 'MARC BAJONA GARCIA', 'jaguilar@natgas.com'),
(48, 1, 1, '2007-06-21', '2007-06-21', 1, 'JORDINA AGUILAR RODRIGUEZ', 'mjbarriga@natgas.com'),
(49, 1, 1, '2008-06-21', '2009-06-21', 1, 'MARIA JOSÉ BARRIGA SOTO', 'ravila@natgas.com'),
(50, 1, 1, '2009-06-21', '2010-06-21', 1, 'RAQUEL AVILA MASJUAN', 'jbiosca@natgas.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `BlogPost`
--
ALTER TABLE `BlogPost`
  ADD PRIMARY KEY (`idBlogPost`);

--
-- Indices de la tabla `Departamento`
--
ALTER TABLE `Departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `Natgasblock`
--
ALTER TABLE `Natgasblock`
  ADD PRIMARY KEY (`idNatgasblock`),
  ADD KEY `email` (`email`);

--
-- Indices de la tabla `Noticia`
--
ALTER TABLE `Noticia`
  ADD PRIMARY KEY (`idNoticia`);

--
-- Indices de la tabla `Perfil`
--
ALTER TABLE `Perfil`
  ADD PRIMARY KEY (`email`),
  ADD KEY `No.Empleado_3` (`No.Empleado`);

--
-- Indices de la tabla `Pertenece`
--
ALTER TABLE `Pertenece`
  ADD PRIMARY KEY (`idPertenece`),
  ADD KEY `email` (`email`),
  ADD KEY `idDepartamento` (`idDepartamento`);

--
-- Indices de la tabla `RangoVacaciones`
--
ALTER TABLE `RangoVacaciones`
  ADD PRIMARY KEY (`idRangoVacaciones`);

--
-- Indices de la tabla `ReporteMensual`
--
ALTER TABLE `ReporteMensual`
  ADD PRIMARY KEY (`idReporte`);

--
-- Indices de la tabla `Vacaciones`
--
ALTER TABLE `Vacaciones`
  ADD PRIMARY KEY (`idVacaciones`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `BlogPost`
--
ALTER TABLE `BlogPost`
  MODIFY `idBlogPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `Departamento`
--
ALTER TABLE `Departamento`
  MODIFY `idDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `Natgasblock`
--
ALTER TABLE `Natgasblock`
  MODIFY `idNatgasblock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `Noticia`
--
ALTER TABLE `Noticia`
  MODIFY `idNoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `Perfil`
--
ALTER TABLE `Perfil`
  MODIFY `No.Empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `Pertenece`
--
ALTER TABLE `Pertenece`
  MODIFY `idPertenece` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `RangoVacaciones`
--
ALTER TABLE `RangoVacaciones`
  MODIFY `idRangoVacaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `ReporteMensual`
--
ALTER TABLE `ReporteMensual`
  MODIFY `idReporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `Vacaciones`
--
ALTER TABLE `Vacaciones`
  MODIFY `idVacaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Natgasblock`
--
ALTER TABLE `Natgasblock`
  ADD CONSTRAINT `natgasblock_ibfk_1` FOREIGN KEY (`email`) REFERENCES `Perfil` (`email`);

--
-- Filtros para la tabla `Pertenece`
--
ALTER TABLE `Pertenece`
  ADD CONSTRAINT `pertenece_ibfk_1` FOREIGN KEY (`email`) REFERENCES `Perfil` (`email`),
  ADD CONSTRAINT `pertenece_ibfk_2` FOREIGN KEY (`idDepartamento`) REFERENCES `Departamento` (`idDepartamento`);

--
-- Filtros para la tabla `Vacaciones`
--
ALTER TABLE `Vacaciones`
  ADD CONSTRAINT `vacaciones_ibfk_1` FOREIGN KEY (`email`) REFERENCES `Perfil` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
