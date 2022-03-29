-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2022 a las 17:12:25
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `natgasfinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogpost`
--

CREATE TABLE `blogpost` (
  `idBlogPost` int(11) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `content` varchar(2000) COLLATE utf8_spanish_ci NOT NULL,
  `slug` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `image` varchar(400) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `blogpost`
--

INSERT INTO `blogpost` (`idBlogPost`, `date`, `title`, `content`, `slug`, `image`, `created_at`, `updated_at`) VALUES
(1, '2020-05-21', 'Recortes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/recortes-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, '2021-05-21', 'Nuevas oportunidades', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/nuevas-oportunidades', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, '2022-05-21', 'Mejoras', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/mejoras-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, '2023-05-21', 'Salud mental', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/salud-mental', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, '2024-05-21', 'Dia del empleado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/dia-empleado', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, '2025-05-21', 'Comunciate', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/comunicate-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, '2026-05-21', 'Marcas historicas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/marcas-historicas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, '2027-05-21', 'Precio del gas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/precio-gas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, '2028-05-21', 'Paginas relacionadas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/paginas-relacionadas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, '2029-05-21', 'Tomate un break', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/tomate-un-break', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, '2030-05-21', 'Feliz dia laboral', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/dia-laboral', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, '2031-05-21', 'Trabajando en vacaciones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/trabajando-vacaciones', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(13, '2001-06-21', 'Dias festivos del mes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/dias-festivos-junio-21', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(14, '2002-06-21', 'Promociones de Junio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/promociones-junio-21', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(15, '2003-06-21', 'Come saludable', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/come-saludable', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(16, '2004-06-21', 'Ejercitate con esta rutina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/ejercitate-rutina', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(17, '2005-06-21', 'Un dia a la vez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/un-dia-a-la-vez', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(18, '2006-06-21', 'Tecnologia y ciencia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/tecnologia-y-ciencia', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(19, '2007-06-21', 'Ofetas de Junio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/ofertas-de-junio', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(20, '2008-06-21', 'Como mejorar mi productividad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', '/como-mejorar-mi-productividad', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`idDepartamento`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Marketing', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 'Operaciones', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 'Comercial', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 'Infraestructura', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 'Bi', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 'Optimización y eficiencia', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 'Natdef', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 'Proyectos estratégicos', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 'Asuntos regulatorior', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 'Impúlsate', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 'Dirección tecnica.', '2022-03-27 16:49:40', '2022-03-27 10:49:40');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `detallesdevacaciones`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `detallesdevacaciones` (
`email` varchar(100)
,`name` varchar(40)
,`lastname` varchar(40)
,`departamento` varchar(100)
,`position` varchar(100)
,`substitute` varchar(100)
,`startdate` date
,`enddate` date
,`idVacaciones` int(11)
,`verifiedleader` tinyint(1)
,`status` tinyint(1)
,`id` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `detallesempleo`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `detallesempleo` (
`email` varchar(100)
,`name` varchar(40)
,`lastname` varchar(40)
,`vacations` int(11)
,`ngBlocks` int(11)
,`position` varchar(100)
,`departamento` varchar(100)
,`contrato` date
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `detallesnatgasblock`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `detallesnatgasblock` (
`email` varchar(100)
,`name` varchar(40)
,`lastname` varchar(40)
,`departamento` varchar(100)
,`position` varchar(100)
,`date` date
,`status` tinyint(1)
,`period` tinyint(1)
,`id` int(11)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `natgasblock`
--

CREATE TABLE `natgasblock` (
  `idNatgasblock` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` tinyint(1) NOT NULL,
  `period` tinyint(1) NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `natgasblock`
--

INSERT INTO `natgasblock` (`idNatgasblock`, `date`, `status`, `period`, `email`, `created_at`, `updated_at`) VALUES
(1, '2011-03-21', 1, 1, 'earocas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, '2012-03-21', 0, 0, 'qviso@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, '2013-03-21', 0, 0, 'jayala@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, '2014-03-21', 1, 0, 'jbaez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, '2015-03-21', 0, 0, 'mbastardes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, '2016-03-21', 1, 0, 'janguera@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, '2017-03-21', 0, 0, 'epascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, '2018-03-21', 1, 0, 'lvalles@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, '2019-03-21', 1, 1, 'rraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, '2020-03-21', 1, 1, 'jandreu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, '2021-03-21', 0, 1, 'mbaraldes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, '2022-03-21', 1, 1, 'aberengueras@natgas.com', '2022-03-27 16:49:40', '2022-03-28 18:53:09'),
(13, '2023-03-21', 0, 1, 'glopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(14, '2024-03-21', 0, 1, 'earnau@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(15, '2025-03-21', 0, 1, 'jraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(16, '2026-03-21', 0, 1, 'lzambudio@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(17, '2027-03-21', 0, 1, 'lbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(18, '2028-03-21', 0, 1, 'dzafra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(19, '2029-03-21', 1, 1, 'jaleu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(20, '2030-03-21', 1, 1, 'abadia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(21, '2031-03-21', 1, 1, 'rmorales@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(22, '2001-04-21', 1, 1, 'djblanco@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(23, '2002-04-21', 0, 1, 'aalvarez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(24, '2003-04-21', 0, 1, 'ggarcia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(25, '2004-04-21', 0, 0, 'ilibori@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(26, '2005-04-21', 0, 0, 'dbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(27, '2006-04-21', 0, 0, 'xbenitez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(28, '2007-04-21', 0, 0, 'mpascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(29, '2008-04-21', 0, 0, 'jayalas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(30, '2009-04-21', 0, 0, 'glistan@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(31, '2010-04-21', 0, 0, 'srasero@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(32, '2011-04-21', 0, 0, 'aarnalot@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(33, '2012-04-21', 0, 1, 'mmoliner@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(34, '2013-04-21', 1, 1, 'bgalobart@natgas.com', '2022-03-27 16:49:40', '2022-03-28 18:33:11'),
(35, '2014-04-21', 0, 1, 'blopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(36, '2015-04-21', 0, 1, 'msanchez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(37, '2016-04-21', 0, 1, 'galavedra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(38, '2017-04-21', 1, 1, 'mialigue@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(39, '2018-04-21', 1, 1, 'tmas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(40, '2019-04-21', 1, 1, 'aaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(41, '2020-04-21', 1, 1, 'jmarti@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(42, '2021-04-21', 1, 1, 'ibidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(43, '2022-04-21', 1, 1, 'oaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(44, '2023-04-21', 1, 1, 'saltmiras@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(45, '2024-04-21', 1, 0, 'jbelmonte@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(46, '2025-04-21', 1, 0, 'mbajona@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(47, '2026-04-21', 1, 0, 'jaguilar@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(48, '2027-04-21', 1, 0, 'mjbarriga@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(49, '2028-04-21', 1, 0, 'ravila@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(50, '2029-04-21', 1, 0, 'jbiosca@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(52, '2022-03-18', 0, 1, 'jbelmonte@natgas.com', '2022-03-29 01:41:05', '2022-03-28 19:41:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE `noticia` (
  `idNoticia` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `date` date NOT NULL,
  `image` varchar(400) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`idNoticia`, `name`, `date`, `image`, `created_at`, `updated_at`) VALUES
(1, 'U.S. natgas futures up 2% on lower output, record LNG exports\n', '2001-02-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 'U.S. LNG exporters emerge as big winners of Europe natgas crisis\n', '2019-03-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 'U.S. natgas futures rise 3% to one-week high on colder forecasts', '2030-03-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 'Construirá Natgas Querétaro tres estaciones de GNV', '2005-04-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 'U.S. natgas output, demand to rise in 2022 -EIA', '2010-04-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 'Two Roadblocks Prevent U.S. from Shipping More NatGas to Europe', '2015-05-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 'Bulgargaz proposes 3.5% hike in natgas price for March', '2024-06-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 'Natgas instalará 32 estaciones de servicio en el Bajío y Occidente', '2013-07-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 'Ofrecen alternativa de gas natural para automóviles', '2028-08-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, '¿Te conviene convertir tu auto de gasolina a gas natural?', '2001-09-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 'Se reactiva servicio de gas natural en Guadalajara', '2017-10-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, 'ESPECIAL La conversión, opción más barata que un auto de agencia: Natgas', '2030-11-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(13, 'Taxis tapatíos operarán con gas natural', '2004-12-21', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(14, 'Natgas operará estaciones de gas natural en Guadalajara', '2003-01-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(15, 'Entregan Distintivo De Empresa Socialmente Responsable A 51 Compañías De Querétaro', '2002-02-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(16, 'NatGas inicia ambicioso plan de expansión', '2009-03-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(17, 'Baja en suministro de gas natural pega a industria de Quéretaro: Canacintra', '2002-04-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(18, 'Natgas abre una nueva sucursal en Querétaro', '2020-08-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(19, 'Más de 20 millones de toneladas de CO2 reducidas por Natgas', '2013-09-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(20, 'Natgas se expande a otro estado', '2031-12-22', 'https://media.gq.com.mx/photos/5d3092df662f7c0008e7f474/16:9/w_2560%2Cc_limit/coco.jpg', '2022-03-27 16:49:40', '2022-03-27 10:49:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `lastname` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `vacations` int(11) NOT NULL,
  `ngBlocks` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `rfc` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `birthdate` date NOT NULL,
  `cellphone` bigint(20) NOT NULL,
  `address` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `gender` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `contractdate` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`email`, `name`, `lastname`, `vacations`, `ngBlocks`, `number`, `verified`, `rfc`, `birthdate`, `cellphone`, `address`, `gender`, `contractdate`, `created_at`, `updated_at`) VALUES
('aaloy@natgas.com', 'Alejandro', 'Aloy Compte', 8, 5, 41, 1, 'AOCA0002039N0', '2000-02-03', 4429257845, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-03-28 14:17:22'),
('aalvarez@natgas.com', 'Aran', 'Álvarez Fernández', 6, 1, 24, 1, 'AAFA890819Q4A', '1989-08-19', 4426534125, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-03-28 14:17:45'),
('aarnalot@natgas.com', 'Albert', 'Arnalot Puig', 6, 5, 33, 1, 'AAPA000126812', '2000-01-26', 4429756506, 'ANILLO VIAL JUNÍPERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:18:13'),
('abadia@natgas.com', 'Andreu', 'Badia Torné', 6, 1, 21, 1, 'BATA890816GQ7', '1989-08-16', 4421454394, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:18:44'),
('aberengueras@natgas.com', 'Adria', 'Berengueras', 7, 4, 12, 1, 'BECA0007249V2', '2000-07-24', 4421222126, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2022-04-14', '2022-03-27 16:49:40', '2022-03-28 18:53:09'),
('bgalobart@natgas.com', 'Berta', 'Galobart', 6, 4, 35, 1, 'GAGB0005054L8', '2000-05-05', 4421551713, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 18:33:11'),
('blopez@natgas.com', 'Berta', 'López', 6, 3, 36, 1, 'LEGB0001296Y2', '2000-01-29', 4424901312, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-03-28 14:20:40'),
('dbidault@natgas.com', 'David', 'Bidault', 6, 1, 27, 1, 'BIPD9304123E3', '1993-04-12', 4428241672, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 14:21:08'),
('djblanco@natgas.com', 'David', 'Blanco', 6, 1, 23, 1, 'BAFD9003117H5', '1990-03-11', 4425797242, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 14:22:17'),
('dzafra@natgas.com', 'Dounya', 'Zafra', 6, 5, 19, 1, 'ZAFD950630K74', '1995-06-30', 4427251707, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 14:21:38'),
('earnau@natgas.com', 'Eliot', 'Arnau', 6, 5, 14, 1, 'AAME9104129W7', '1991-04-12', 4428495652, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Masculino', '2015-06-10', '2022-03-27 16:49:40', '2022-03-28 14:22:45'),
('earocas@natgas.com', 'Estefania', 'Rocas', 6, 5, 1, 1, 'AOPE900413NX7', '1990-04-13', 4424912166, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Femenino', '2020-05-01', '2022-03-27 16:49:40', '2022-03-28 14:23:02'),
('epascual@natgas.com', 'Esther', 'Pascual', 6, 2, 7, 1, 'PAAE010131PI3', '2001-01-31', 4421882041, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-09-26', '2022-03-27 16:49:40', '2022-03-28 14:23:15'),
('galavedra@natgas.com', 'Gemma', 'Alavedra', 6, 4, 38, 1, 'AASG000131LAA', '2000-01-31', 4422151115, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:23:31'),
('ggarcia@natgas.com', 'Gemma', 'Garcia', 6, 1, 25, 1, 'GAAG930410854', '1993-04-10', 4427070011, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:23:44'),
('glistan@natgas.com', 'Gemma', 'Listan', 6, 5, 31, 1, 'LIFG9304168I2', '1993-04-16', 4425191915, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 14:23:58'),
('glopez@natgas.com', 'Gerard', 'Lopez', 6, 5, 13, 1, 'GAUG990830K910', '1999-08-30', 4429290795, 'ANILLO VIAL JUNÍPERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-02-19', '2022-03-27 16:49:40', '2022-03-28 14:24:16'),
('ibidault@natgas.com', 'Ingrid', 'Bidault', 8, 5, 43, 1, 'BIPI000205L20', '2000-02-05', 4427310007, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-03-28 14:24:29'),
('ilibori@natgas.com', 'Ivan', 'Libori', 6, 1, 26, 1, 'LIFI930411K96', '1993-04-11', 4423939112, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:24:48'),
('jaguilar@natgas.com', 'Jordina', 'Aguilar', 8, 5, 48, 0, 'AURJ9911034T4', '1999-11-03', 4422208514, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:25:03'),
('jaleu@natgas.com', 'Julio', 'Aleu', 6, 1, 20, 1, 'AEIJ890705D12', '1989-07-15', 4428558047, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-03-28 14:26:26'),
('jandreu@natgas.com', 'Julio', 'Andreu', 6, 5, 10, 0, 'AECJ921026ND5', '1992-10-26', 4420881626, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2017-08-15', '2022-03-27 16:49:40', '2022-03-28 14:25:17'),
('janguera@natgas.com', 'Juan', 'Anguera', 10, 5, 6, 0, 'AUVJ800927LDA', '1980-09-27', 4424473173, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2018-02-14', '2022-03-27 16:49:40', '2022-03-28 14:26:39'),
('jayala@natgas.com', 'Joan', 'Ayala', 8, 5, 3, 0, 'AAFJ911007P66', '1991-12-07', 4423353115, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2019-10-31', '2022-03-27 16:49:40', '2022-03-28 14:26:59'),
('jayalas@natgas.com', 'Jesus', 'Ayalas', 6, 5, 30, 1, 'AATJ930415AW3', '1993-04-15', 4427899927, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:27:15'),
('jbaez@natgas.com', 'Joan', 'Baez', 6, 4, 4, 1, 'BATJ911007MZ0', '2000-01-26', 4427286925, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-08-21', '2022-03-27 16:49:40', '2022-03-28 14:27:32'),
('jbelmonte@natgas.com', 'Jordi', 'Belmonte', 8, 5, 46, 0, 'BESJ000208DMA', '2000-02-08', 4428539127, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 14:27:53'),
('jbiosca@natgas.com', 'Jordi', 'Biosca', 9, 2, 18, 1, 'BICL0204153Y2', '1993-05-16', 4420117634, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:28:10'),
('jmarti@natgas.com', 'Joan', 'Marti', 8, 5, 42, 1, 'AEVJ000204VD0', '2000-02-04', 4425016169, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:28:25'),
('jraya@natgas.com', 'Jordi', 'Raya', 8, 0, 15, 0, 'RAGJ020224QI2', '2000-02-24', 4429379455, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-07-30', '2022-03-27 16:49:40', '2022-03-28 14:28:46'),
('lbidault@natgas.com', 'Laura', 'Bidault', 6, 5, 17, 1, 'BICL0204153Y2', '2002-04-15', 4426704762, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:29:03'),
('lvalles@natgas.com', 'Laura', 'Valles', 6, 5, 8, 1, 'VAGL990319D55', '1999-03-19', 4426936190, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2017-07-03', '2022-03-27 16:49:40', '2022-03-28 14:29:17'),
('lzambudio@natgas.com', 'Luis', 'Zambudio', 6, 5, 16, 1, 'ZAFL990126LT8', '1999-01-26', 4427789948, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-03-28 14:29:33'),
('mbajona@natgas.com', 'Marc', 'Bajona', 8, 5, 47, 0, 'BAGM0002093E4', '2000-02-09', 4425896964, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-03-28 14:29:53'),
('mbaraldes@natgas.com', 'Maria', 'Baraldes', 6, 1, 11, 1, 'BACI9405148D3', '1994-05-14', 4420400918, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2013-09-17', '2022-03-27 16:49:40', '2022-03-28 14:30:16'),
('mbastardes@natgas.com', 'Marc', 'Bastardes', 6, 5, 5, 1, 'BASM970814FE8', '1997-08-14', 4421672339, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Masculino', '2019-06-16', '2022-03-27 16:49:40', '2022-03-28 14:30:31'),
('mialigue@natgas.com', 'María Isabel', 'Aligue', 8, 5, 39, 1, 'AIBI000201K89', '2000-02-01', 4426143278, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 14:30:58'),
('mjbarriga@natgas.com', 'Maria Jose', 'Barriga', 8, 5, 49, 0, 'BASJ000201F2A', '2000-02-01', 4429831677, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:31:15'),
('mmoliner@natgas.com', 'Maria', 'Moliner', 6, 5, 34, 1, 'MOGM000127SZ3', '2000-01-27', 4428627896, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:31:29'),
('mpascual@natgas.com', 'Mario', 'Pascual', 6, 5, 29, 1, 'PAFM921002568', '1992-10-02', 4424564684, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:31:44'),
('msanchez@natgas.com', 'Mirella', 'Sanchez', 6, 4, 37, 1, 'SEGM000130CYA', '2000-01-30', 4429894858, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:32:00'),
('oaloy@natgas.com', 'Oliver', 'Aloy', 8, 5, 44, 1, 'AOCO000206Q14', '2000-02-06', 4429581621, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-03-28 14:32:24'),
('qviso@natgas.com', 'Queralt', 'Viso', 7, 3, 2, 1, 'VIGQ890704UG3', '1989-07-04', 4426047960, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2010-09-05', '2022-03-27 16:49:40', '2022-03-28 14:32:39'),
('ravila@natgas.com', 'Raquel', 'Avila', 8, 5, 50, 0, 'AIMR000216MF7', '2000-02-16', 4422154324, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-03-28 14:32:58'),
('rmorales@natgas.com', 'Ramon', 'Morales', 6, 1, 22, 1, 'MOGR901017PU6', '1990-10-17', 4429173527, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:33:10'),
('rraya@natgas.com', 'Raquel', 'Raya', 12, 5, 9, 1, 'RAGR9811291D4', '1998-11-29', 4426760050, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2020-12-09', '2022-03-27 16:49:40', '2022-03-28 14:33:26'),
('saltmiras@natgas.com', 'Sandra', 'Altmiras', 8, 5, 45, 0, 'AIAS000207LK2', '2000-02-07', 4424733183, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-03-28 14:33:43'),
('srasero@natgas.com', 'Silvia', 'Rasero', 6, 5, 32, 1, 'RAGS930106ET1', '1993-01-06', 4427365631, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-03-28 14:33:58'),
('tmas@natgas.com', 'Toni', 'Mas', 8, 5, 40, 1, 'MAFT0011032J6', '2000-11-03', 4427980103, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-03-28 14:34:20'),
('xbenitez@natgas.com', 'Xavier', 'Benitez', 6, 5, 28, 1, 'BEJX930413DV2', '1993-04-13', 4422574837, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-03-28 14:34:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pertenece`
--

CREATE TABLE `pertenece` (
  `idPertenece` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `position` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pertenece`
--

INSERT INTO `pertenece` (`idPertenece`, `email`, `idDepartamento`, `position`, `date`, `created_at`, `updated_at`) VALUES
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rangovacaciones`
--

CREATE TABLE `rangovacaciones` (
  `idRangoVacaciones` int(11) NOT NULL,
  `maximum` int(11) NOT NULL,
  `minimum` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rangovacaciones`
--

INSERT INTO `rangovacaciones` (`idRangoVacaciones`, `maximum`, `minimum`, `days`, `created_at`, `updated_at`) VALUES
(1, 2, 0, 12, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 3, 1, 4, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 4, 2, 11, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 5, 3, 14, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 6, 4, 7, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 7, 5, 7, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 8, 6, 12, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 9, 7, 6, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 10, 8, 8, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 11, 9, 6, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 12, 10, 5, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, 13, 11, 7, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(13, 14, 12, 8, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(14, 15, 13, 9, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(15, 16, 14, 8, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(16, 17, 15, 10, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(17, 18, 16, 13, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(18, 19, 17, 8, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(19, 20, 18, 9, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(20, 21, 19, 4, '2022-03-27 16:49:40', '2022-03-27 10:49:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `idRegistro` int(11) NOT NULL,
  `value` float NOT NULL,
  `date` date NOT NULL,
  `idReporte` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`idRegistro`, `value`, `date`, `idReporte`, `created_at`, `updated_at`) VALUES
(1, 80, '2020-01-21', 1, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 75, '2020-02-21', 1, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 66, '2020-03-21', 1, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 65, '2020-01-21', 2, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 85, '2020-02-21', 2, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 50, '2020-03-21', 2, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 45, '2021-03-01', 3, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 75, '2021-04-01', 3, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 66, '2021-07-01', 3, '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 120, '2020-01-02', 4, '2022-03-27 16:49:40', '2022-03-27 10:49:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `idReporte` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `reporte`
--

INSERT INTO `reporte` (`idReporte`, `name`, `created_at`, `updated_at`) VALUES
(1, 'NPS', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 'PorcentajeMujeres', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 'PorcentajeHombres', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 'ReducciónCO2', '2022-03-27 16:49:40', '2022-03-27 10:49:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacaciones`
--

CREATE TABLE `vacaciones` (
  `idVacaciones` int(11) NOT NULL,
  `verifiedhr` tinyint(1) NOT NULL,
  `verifiedleader` tinyint(1) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `status` tinyint(1) NOT NULL,
  `substitute` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `vacaciones`
--

INSERT INTO `vacaciones` (`idVacaciones`, `verifiedhr`, `verifiedleader`, `startdate`, `enddate`, `status`, `substitute`, `email`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2004-01-21', '2004-01-21', 1, 'ESTEFANIA AROCAS PASADAS', 'earocas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 1, 1, '2005-01-21', '2007-01-21', 1, 'QUERALT VISO GILABERT', 'qviso@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 1, 1, '2006-01-21', '2010-01-21', 1, 'JOAN AYALA FERRERAS', 'jayala@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 0, 0, '2007-01-21', '2011-01-21', 0, 'JOAN BAEZ TEJADO', 'jbaez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 0, 0, '2008-01-21', '2013-01-21', 0, 'MARC BASTARDES SOTO', 'mbastardes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 0, 0, '2009-01-21', '2012-01-21', 0, 'JOSEP ANGUERA VILAFRANCA', 'janguera@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 0, 0, '2010-01-21', '2012-01-21', 0, 'ESTHER PASCUAL ALOY', 'epascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 0, 0, '2011-01-21', '2013-01-21', 0, 'LAURA VALLÉS GIRVENT', 'lvalles@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 0, 0, '2012-01-21', '2018-01-21', 0, 'RAQUEL RAYA GARCIA', 'rraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 0, 0, '2013-01-21', '2015-01-21', 0, 'JOAN ANDREU CRUZ', 'jandreu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 0, 0, '2014-01-21', '2003-05-21', 0, 'MARIA ISABEL BARALDÉS COMAS', 'mbaraldes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, 0, 1, '2015-01-21', '2003-05-21', 1, 'ADRIÀ BERENGUERAS CULLERÉS', 'aberengueras@natgas.com', '2022-03-27 16:49:40', '2022-03-28 18:46:59'),
(13, 0, 0, '2016-01-21', '2007-05-21', 0, 'GERARD LÓPEZ DE PABLO GARCIA UCEDA', 'glopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(14, 0, 0, '2017-01-21', '2005-05-21', 0, 'ELIOT ARNAU MORENO', 'earnau@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(15, 1, 1, '2018-01-21', '2006-05-21', 1, 'JORDI RAYA GAVILAN', 'jraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(16, 0, 0, '2019-01-21', '2007-05-21', 0, 'LLUÍS ZAMBUDIO FIGULS', 'lzambudio@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(17, 0, 1, '2020-01-21', '2010-05-21', 1, 'LAURA BIDAULT CULLERÉS', 'lbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(18, 0, 0, '2021-01-21', '2010-05-21', 0, 'JORDI BIOSCA FONTANET', 'dzafra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(19, 1, 1, '2022-01-21', '2010-05-21', 1, 'DOUNYA ZAFRA FIGULS', 'jaleu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(20, 1, 1, '2023-01-21', '2011-05-21', 1, 'JULIO ALEU ICART', 'abadia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(21, 1, 1, '2011-05-21', '2012-05-21', 1, 'ANDREU BADIA TORNÉ', 'rmorales@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(22, 1, 1, '2012-05-21', '2013-05-21', 1, 'RAMON MORALES GESE', 'djblanco@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(23, 1, 1, '2013-05-21', '2014-05-21', 1, 'DAVID-JESE BLANCO FONTANET', 'aalvarez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(24, 1, 1, '2014-05-21', '2017-05-21', 1, 'ARAN ALVAREZ FERNÁNDEZ', 'ggarcia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(25, 1, 1, '2015-05-21', '2017-05-21', 1, 'GEMMA GARCIA ALMOGUERA', 'ilibori@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(26, 1, 1, '2015-05-21', '2017-05-21', 1, 'IVAN LIBORI FIGUERAS', 'dbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(27, 1, 1, '2017-05-21', '2018-05-21', 1, 'DAVID BIDAULT PUEYO', 'xbenitez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(28, 1, 1, '2018-05-21', '2019-05-21', 1, 'XAVIER BENITEZ JOSE', 'mpascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(29, 0, 0, '2019-05-21', '2020-05-21', 0, 'MARIO PASCUAL FLORES', 'jayalas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(30, 0, 0, '2020-05-21', '2021-05-21', 0, 'JESUS AYALA TORNÉ', 'glistan@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(31, 0, 0, '2021-05-21', '2025-05-21', 0, 'GEMMA LISTAN FIGUERAS', 'srasero@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(32, 0, 0, '2022-05-21', '2025-05-21', 0, 'SILVIA RASERO GAVILAN', 'aarnalot@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(33, 0, 0, '2023-05-21', '2024-05-21', 0, 'ALBERT ARNALOT PUIG', 'mmoliner@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(34, 0, 1, '2024-05-21', '2025-05-21', 0, 'MARIA MOLINER GARRIDO', 'bgalobart@natgas.com', '2022-03-27 16:49:40', '2022-03-28 18:51:04'),
(35, 0, 0, '2025-05-21', '2026-05-21', 0, 'BERTA GALOBART GARCIA', 'blopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(36, 0, 0, '2026-05-21', '2026-05-21', 0, 'BERTA LÓPEZ GARRIGASSAIT', 'msanchez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(37, 0, 0, '2027-05-21', '2028-05-21', 0, 'MIREIA SÁNCHEZ GÓMEZ', 'galavedra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(38, 1, 1, '2028-05-21', '2031-05-21', 1, 'GEMMA ALAVEDRA SUNYÉ', 'mialigue@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(39, 1, 1, '2029-05-21', '2031-05-21', 1, 'MARIA ISABEL ALIGUÉ BONVEHÍ', 'tmas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(40, 1, 1, '2030-05-21', '2031-05-21', 1, 'TONI MAS FRANCH', 'aaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(41, 1, 1, '2031-05-21', '2001-06-21', 1, 'ALEJANDRO ALOY COMPTE', 'jmarti@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(42, 1, 1, '2001-06-21', '2002-06-21', 1, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(43, 1, 1, '2002-06-21', '2003-06-21', 1, 'INGRID BIDAULT PÉREZ', 'oaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(44, 1, 1, '2003-06-21', '2004-06-21', 1, 'OLIVER ALOY CODINACHS', 'saltmiras@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(45, 1, 1, '2004-06-21', '2007-06-21', 1, 'SANDRA ALTIMIRAS ARMENTEROS', 'jbelmonte@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(46, 1, 1, '2005-06-21', '2008-06-21', 1, 'JORDI BELMONTE SÁNCHEZ', 'mbajona@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(47, 1, 1, '2006-06-21', '2008-06-21', 1, 'MARC BAJONA GARCIA', 'jaguilar@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(48, 1, 1, '2007-06-21', '2007-06-21', 1, 'JORDINA AGUILAR RODRIGUEZ', 'mjbarriga@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(49, 1, 1, '2008-06-21', '2009-06-21', 1, 'MARIA JOSÉ BARRIGA SOTO', 'ravila@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(50, 1, 1, '2009-06-21', '2010-06-21', 0, 'RAQUEL AVILA MASJUAN', 'jbiosca@natgas.com', '2022-03-27 16:49:40', '2022-03-28 18:50:46'),
(51, 0, 0, '2001-06-21', '2002-06-21', 0, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:08:19', '2022-03-28 00:08:19'),
(52, 0, 0, '2001-06-21', '2001-06-21', 0, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:11:55', '2022-03-28 00:11:55'),
(53, 0, 0, '2001-06-21', '2001-06-30', 0, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:12:56', '2022-03-28 00:12:56'),
(54, 0, 0, '2001-06-21', '2001-06-30', 0, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:13:21', '2022-03-28 00:13:21'),
(55, 0, 0, '2001-06-21', '2001-06-30', 0, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:13:48', '2022-03-28 00:13:48'),
(56, 0, 0, '2022-03-27', '2022-03-28', 0, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:18:48', '2022-03-28 19:18:48'),
(57, 0, 0, '2022-03-27', '2022-03-28', 0, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:18:58', '2022-03-28 19:18:58'),
(58, 0, 0, '2022-03-27', '2022-03-28', 0, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:19:00', '2022-03-28 19:19:00'),
(59, 0, 0, '2022-03-27', '2022-03-28', 0, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:19:00', '2022-03-28 19:19:00'),
(60, 0, 0, '2022-03-27', '2022-03-28', 0, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:19:00', '2022-03-28 19:19:00'),
(61, 0, 0, '2022-03-27', '2022-03-28', 0, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:20:28', '2022-03-28 19:20:28');

-- --------------------------------------------------------

--
-- Estructura para la vista `detallesdevacaciones`
--
DROP TABLE IF EXISTS `detallesdevacaciones`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallesdevacaciones`  AS SELECT `perfil`.`email` AS `email`, `perfil`.`name` AS `name`, `perfil`.`lastname` AS `lastname`, `departamento`.`name` AS `departamento`, `pertenece`.`position` AS `position`, `vacaciones`.`substitute` AS `substitute`, `vacaciones`.`startdate` AS `startdate`, `vacaciones`.`enddate` AS `enddate`, `vacaciones`.`idVacaciones` AS `idVacaciones`, `vacaciones`.`verifiedleader` AS `verifiedleader`, `vacaciones`.`status` AS `status`, `vacaciones`.`idVacaciones` AS `id` FROM (((`vacaciones` join `perfil`) join `pertenece`) join `departamento`) WHERE `vacaciones`.`email` = `perfil`.`email` AND `perfil`.`email` = `pertenece`.`email` AND `pertenece`.`idDepartamento` = `departamento`.`idDepartamento` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `detallesempleo`
--
DROP TABLE IF EXISTS `detallesempleo`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallesempleo`  AS SELECT `perfil`.`email` AS `email`, `perfil`.`name` AS `name`, `perfil`.`lastname` AS `lastname`, `perfil`.`vacations` AS `vacations`, `perfil`.`ngBlocks` AS `ngBlocks`, `pertenece`.`position` AS `position`, `departamento`.`name` AS `departamento`, `pertenece`.`date` AS `contrato` FROM ((`perfil` join `pertenece`) join `departamento`) WHERE `perfil`.`email` = `pertenece`.`email` AND `pertenece`.`idDepartamento` = `departamento`.`idDepartamento` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `detallesnatgasblock`
--
DROP TABLE IF EXISTS `detallesnatgasblock`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallesnatgasblock`  AS SELECT `perfil`.`email` AS `email`, `perfil`.`name` AS `name`, `perfil`.`lastname` AS `lastname`, `departamento`.`name` AS `departamento`, `pertenece`.`position` AS `position`, `natgasblock`.`date` AS `date`, `natgasblock`.`status` AS `status`, `natgasblock`.`period` AS `period`, `natgasblock`.`idNatgasblock` AS `id` FROM (((`natgasblock` join `perfil`) join `pertenece`) join `departamento`) WHERE `natgasblock`.`email` = `perfil`.`email` AND `perfil`.`email` = `pertenece`.`email` AND `pertenece`.`idDepartamento` = `departamento`.`idDepartamento` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blogpost`
--
ALTER TABLE `blogpost`
  ADD PRIMARY KEY (`idBlogPost`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `natgasblock`
--
ALTER TABLE `natgasblock`
  ADD PRIMARY KEY (`idNatgasblock`),
  ADD KEY `email` (`email`);

--
-- Indices de la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`idNoticia`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `number` (`number`);

--
-- Indices de la tabla `pertenece`
--
ALTER TABLE `pertenece`
  ADD PRIMARY KEY (`idPertenece`),
  ADD KEY `email` (`email`),
  ADD KEY `idDepartamento` (`idDepartamento`);

--
-- Indices de la tabla `rangovacaciones`
--
ALTER TABLE `rangovacaciones`
  ADD PRIMARY KEY (`idRangoVacaciones`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`idRegistro`),
  ADD KEY `idReporte` (`idReporte`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`idReporte`);

--
-- Indices de la tabla `vacaciones`
--
ALTER TABLE `vacaciones`
  ADD PRIMARY KEY (`idVacaciones`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blogpost`
--
ALTER TABLE `blogpost`
  MODIFY `idBlogPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `idDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `natgasblock`
--
ALTER TABLE `natgasblock`
  MODIFY `idNatgasblock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `noticia`
--
ALTER TABLE `noticia`
  MODIFY `idNoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
  MODIFY `number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `pertenece`
--
ALTER TABLE `pertenece`
  MODIFY `idPertenece` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `rangovacaciones`
--
ALTER TABLE `rangovacaciones`
  MODIFY `idRangoVacaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `idRegistro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `idReporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `vacaciones`
--
ALTER TABLE `vacaciones`
  MODIFY `idVacaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `natgasblock`
--
ALTER TABLE `natgasblock`
  ADD CONSTRAINT `natgasblock_ibfk_1` FOREIGN KEY (`email`) REFERENCES `perfil` (`email`);

--
-- Filtros para la tabla `pertenece`
--
ALTER TABLE `pertenece`
  ADD CONSTRAINT `pertenece_ibfk_1` FOREIGN KEY (`email`) REFERENCES `perfil` (`email`),
  ADD CONSTRAINT `pertenece_ibfk_2` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`idDepartamento`);

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `registro_ibfk_1` FOREIGN KEY (`idReporte`) REFERENCES `reporte` (`idReporte`);

--
-- Filtros para la tabla `vacaciones`
--
ALTER TABLE `vacaciones`
  ADD CONSTRAINT `vacaciones_ibfk_1` FOREIGN KEY (`email`) REFERENCES `perfil` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
