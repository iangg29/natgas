-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 04-05-2022 a las 22:49:47
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
-- Estructura de tabla para la tabla `asueto`
--

CREATE TABLE `asueto` (
  `idAsueto` int(11) NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asueto`
--

INSERT INTO `asueto` (`idAsueto`, `date`, `created_at`) VALUES
(35, '2022-03-22', '2022-04-22 02:32:39'),
(36, '2022-04-15', '2022-04-27 00:18:24');

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `blogpost`
--

INSERT INTO `blogpost` (`idBlogPost`, `date`, `title`, `content`, `slug`, `image`, `created_at`, `updated_at`) VALUES
(1, '2020-05-21', 'Recortes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'recortes-natgas', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(2, '2021-05-21', 'Nuevas oportunidades', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevas-oportunidades', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(3, '2022-05-21', 'Mejoras', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'mejoras-natgas', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(4, '2023-05-21', 'Salud mental', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'salud-mental', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(5, '2024-05-21', 'Dia del empleado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'dia-empleado', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(6, '2025-05-21', 'Comunciate', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'comunicate-natgas', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(7, '2026-05-21', 'Marcas historicas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'marcas-historicas', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(8, '2027-05-21', 'Precio del gas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'precio-gas', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(9, '2028-05-21', 'Paginas relacionadas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'paginas-relacionadas', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(10, '2029-05-21', 'Tomate un break', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'tomate-un-break', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(11, '2030-05-21', 'Feliz dia laboral', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'dia-laboral', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(12, '2031-05-21', 'Trabajando en vacaciones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'trabajando-vacaciones', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(13, '2001-06-21', 'Dias festivos del mes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'dias-festivos-junio-21', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(14, '2002-06-21', 'Promociones de Junio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'promociones-junio-21', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(15, '2003-06-21', 'Come saludable', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'come-saludable', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(16, '2004-06-21', 'Ejercitate con esta rutina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'ejercitate-rutina', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(17, '2005-06-21', 'Un dia a la vez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'un-dia-a-la-vez', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(18, '2006-06-21', 'Tecnologia y ciencia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'tecnologia-y-ciencia', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(19, '2007-06-21', 'Ofetas de Junio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'ofertas-de-junio', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(20, '2008-06-21', 'Como mejorar mi productividad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'como-mejorar-mi-productividad', 'https://storage.googleapis.com/natgas-media/default.png', '2022-03-27 16:49:40', '2022-05-04 17:30:21'),
(21, '2020-05-21', 'Hola Mundo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'hola-mundo', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-03 19:23:40', '2022-05-04 17:30:21'),
(22, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:11:22', '2022-05-04 17:30:21'),
(23, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:12:17', '2022-05-04 17:30:21'),
(24, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:12:30', '2022-05-04 17:30:21'),
(25, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:19:07', '2022-05-04 17:30:21'),
(27, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:25:00', '2022-05-04 17:30:21'),
(28, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:27:15', '2022-05-04 17:30:21'),
(29, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:31:59', '2022-05-04 17:30:21'),
(30, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:33:34', '2022-05-04 17:30:21'),
(31, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:34:04', '2022-05-04 17:30:21'),
(32, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:48:47', '2022-05-04 17:30:21'),
(33, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:49:43', '2022-05-04 17:30:21'),
(34, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:50:09', '2022-05-04 17:30:21'),
(35, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:50:33', '2022-05-04 17:30:21'),
(36, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:51:27', '2022-05-04 17:30:21'),
(37, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:51:48', '2022-05-04 17:30:21'),
(38, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 04:55:01', '2022-05-04 17:30:21'),
(39, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:26:11', '2022-05-04 17:30:21'),
(40, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:28:15', '2022-05-04 17:30:21'),
(41, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:29:07', '2022-05-04 17:30:21'),
(42, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:31:57', '2022-05-04 17:30:21'),
(43, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:33:48', '2022-05-04 17:30:21'),
(44, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:34:36', '2022-05-04 17:30:21'),
(45, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:40:31', '2022-05-04 17:30:21'),
(46, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:40:58', '2022-05-04 17:30:21'),
(47, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:50:50', '2022-05-04 17:30:21'),
(48, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:53:02', '2022-05-04 17:30:21'),
(49, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:53:20', '2022-05-04 17:30:21'),
(50, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:57:28', '2022-05-04 17:30:21'),
(51, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 05:59:28', '2022-05-04 17:30:21'),
(52, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 06:01:07', '2022-05-04 17:30:21'),
(53, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 06:01:49', '2022-05-04 17:30:21'),
(54, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 06:02:11', '2022-05-04 17:30:21'),
(55, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 06:19:23', '2022-05-04 17:30:21'),
(56, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-04 06:24:42', '2022-05-04 17:30:21'),
(57, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-07 14:55:56', '2022-05-04 17:30:21'),
(58, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-07 14:58:51', '2022-05-04 17:30:21'),
(59, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-07 15:00:28', '2022-05-04 17:30:21'),
(60, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-07 15:01:52', '2022-05-04 17:30:21'),
(61, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-07 15:02:34', '2022-05-04 17:30:21'),
(62, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-07 15:05:22', '2022-05-04 17:30:21'),
(63, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'https://storage.googleapis.com/natgas-media/default.png', '2022-04-07 15:07:33', '2022-05-04 17:30:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`idDepartamento`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Marketing', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 'Operaciones', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 'Comercial', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 'Talento y comunicacion', '2022-03-27 16:49:40', '2022-04-26 19:14:15'),
(5, 'Bi', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 'Optimización y eficiencia', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 'Natdef', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 'Proyectos estratégicos', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 'Asuntos regulatorior', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 'Impúlsate', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 'Dirección tecnica.', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, 'Talento y comunicacion', '2022-04-27 00:13:57', NULL);

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
-- Estructura Stand-in para la vista `detallesempleado`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `detallesempleado` (
`email` varchar(100)
,`name` varchar(40)
,`lastname` varchar(40)
,`vacations` int(11)
,`ngBlocks` int(11)
,`position` varchar(100)
,`departamento` varchar(100)
,`contrato` date
,`verified` tinyint(1)
,`number` int(11)
,`rfc` varchar(20)
,`birthdate` date
,`cellphone` bigint(20)
,`address` varchar(200)
,`gender` varchar(20)
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
,`verified` tinyint(1)
,`number` int(11)
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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `natgasblock`
--

INSERT INTO `natgasblock` (`idNatgasblock`, `date`, `status`, `period`, `email`, `created_at`, `updated_at`) VALUES
(1, '2011-03-21', 1, 1, 'earocas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, '2012-03-21', 0, 0, 'qviso@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, '2013-03-21', 1, 0, 'jayala@natgas.com', '2022-03-27 16:49:40', '2022-05-01 12:37:27'),
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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `lastname` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `vacations` int(11) NOT NULL DEFAULT '0',
  `ngBlocks` int(11) NOT NULL DEFAULT '0',
  `number` int(11) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `rfc` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `cellphone` bigint(20) DEFAULT NULL,
  `address` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `gender` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `contractdate` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`email`, `password`, `name`, `lastname`, `vacations`, `ngBlocks`, `number`, `verified`, `rfc`, `birthdate`, `cellphone`, `address`, `gender`, `contractdate`, `created_at`, `updated_at`) VALUES
('aaloy@natgas.com', '$2a$12$iCwErsXFtcx8irNHkY8B2u8t2vsz14ufkbfiRgk6qfQ6i3yPGjr2G', 'Alejandro', 'Aloy Compte', 8, 5, 41, 1, 'AOCA0002039N0', '2000-02-03', 4429257845, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('aalvarez@natgas.com', '$2a$12$NrdNvk4l/fZOXGPk56xgzeg2dB4OBWUuw9TeyC2AxTKPvj/0M3OkG', 'Aran', 'Álvarez Fernández', 6, 1, 24, 1, 'AAFA890819Q4A', '1989-08-19', 4426534125, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('aarnalot@natgas.com', '$2a$12$Hl3hD8gBAgijs1qA6LsVguarBc.eGa12vsG1EBiBOmxWEnhwSQr9e', 'Albert', 'Arnalot Puig', 6, 5, 33, 1, 'AAPA000126812', '2000-01-26', 4429756506, 'ANILLO VIAL JUNÍPERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('abadia@natgas.com', '$2a$12$dEz5w/QBReLJafDD23pMyOAAARI/KymPQWpm//uqsEb8C7BtThH4u', 'Andreu', 'Badia Torné', 6, 1, 21, 1, 'BATA890816GQ7', '1989-08-16', 4421454394, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('aberengueras@natgas.com', '$2a$12$Rm77hkEXQ8Xpp0bgmg.4DOiTuPLh.7ATuWwc2R.X3nC8bMF0EWFQG', 'Adria', 'Berengueras', 7, 4, 12, 1, 'BECA0007249V2', '2000-07-24', 4421222126, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2022-04-14', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('bgalobart@natgas.com', '$2a$12$s9foFgEO97gO4S3gHYPUNu.heiHRgExBcSfwCIwOFsB.Dt4fgeepe', 'Berta', 'Galobart', 6, 4, 35, 1, 'GAGB0005054L20', '2000-05-19', 44215517213, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-05-03 08:17:05'),
('blopez@natgas.com', '$2a$12$7KUPJCs/o49sAPPwgothH.rHVHyRFFG6CSYvIIJU7h4QZ1gG7cYGW', 'Berta', 'López', 6, 3, 36, 1, 'LEGB0001296Y2', '2000-01-29', 4424901312, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('dbidault@natgas.com', '$2a$12$dSnDc46nvOf18twWR1OFxuqSgUzDuL2jIev67A6wCbxhf1O81EwXS', 'David', 'Bidault', 6, 1, 27, 1, 'BIPD9304123E3', '1993-04-13', 4428241672, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-05-01 10:37:29'),
('djblanco@natgas.com', '$2a$12$QltgyEHf5AmXhij08wh90ewFgnKpR9tUVodyMjhFe9HkMN9giYehu', 'David', 'Blanco', 6, 1, 23, 1, 'BAFD9003117H5', '1990-03-11', 4425797242, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('dzafra@natgas.com', '$2a$12$QDTK5opHcvc7esC4C2J/rupwiLYfC8Tls/SG/FLTodsFVHxtIJ/qC', 'Dounya', 'Zafra', 6, 5, 19, 1, 'ZAFD950630K74', '1995-06-30', 4427251707, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('earnau@natgas.com', '$2a$12$ELJlPbmgVX8p7MsMWl5qg.jPzTjC9qOPg6fDorQ/m7AE.HT1QgF8C', 'Eliot', 'Arnau', 6, 5, 14, 1, 'AAME9104129W7', '1991-04-12', 4428495652, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Masculino', '2015-06-10', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('earocas@natgas.com', 'jajaja', 'Estefania', 'Rocas', 6, 5, 1, 1, 'AOPE900413NX7', '1990-04-13', 4424912166, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Femenino', '2020-05-01', '2022-03-27 16:49:40', '2022-04-12 12:47:12'),
('epascual@natgas.com', '$2a$12$mfZe3XiUpvd5WabWCI0mWOrjVytWr7UlFrePSEQyuiP9D1tOvxzSK', 'Esther', 'Pascual', 6, 2, 7, 1, 'PAAE010131PI3', '2001-01-31', 4421882041, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-09-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('galavedra@natgas.com', '$2a$12$XeRegIkkXRrK1KUCPG16u.vsS2Tu2k6uXDgBunwGCj2bQYNL.1lPy', 'Gemma', 'Alavedra', 6, 4, 38, 1, 'AASG000131LAA', '2000-01-31', 4422151115, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('ggarcia@natgas.com', '$2a$12$UFgEkn5VSzhgEleqsahA7.M8cuB4hCwu3zDQR3uJ6VXJOTL6RLWMe', 'Gemma', 'Garcia', 6, 1, 25, 1, 'GAAG930410854', '1993-04-10', 4427070011, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('glistan@natgas.com', '$2a$12$S7wdaJdNI7IXMiGigBABeel4Z2aTTh8HJzk1W1Mh4J22NQrgP1OX.', 'Gemma', 'Listan', 6, 5, 31, 1, 'LIFG9304168I2', '1993-04-16', 4425191915, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('glopez@natgas.com', '$2a$12$m14xlssbe/OZZ.Q/l3vPdOIDQvSsybDSmbjzGZxgQBo2APVJ03vXe', 'Gerard', 'Lopez', 6, 5, 13, 1, 'GAUG990830K910', '1999-08-30', 4429290795, 'ANILLO VIAL JUNÍPERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-02-19', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('gurom84@outlook.com', '$2a$12$8mgZr7OaBk5IcjSeAz9pfeEwiOxrP/Lb9rM.fqPtjxHglRGai.dme', 'Armando', 'Gutiérrez Rojo', 20, 5, 82, 1, 'sqwsqwsqwsqws', '2001-04-09', 442444, 'sqwsqsqws', NULL, '2022-05-13', '2022-05-01 20:23:38', '2022-05-02 13:39:47'),
('ibidault@natgas.com', '$2a$12$rmklUb/ieqz/dqRpSGwlPOZdnMiFVhOJE4ehlCcTxMPdUxlPMw0re', 'Ingrid', 'Bidault', 8, 5, 43, 1, 'BIPI000205L20', '2000-02-05', 4427310007, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('ilibori@natgas.com', '$2a$12$nx.V22Pl.oXY4jRSYm0gVeyMxPkKdBLWYW9bqHZzZpPqJS4MOdl6.', 'Ivan', 'Libori', 6, 1, 26, 1, 'LIFI930411K96', '1993-04-11', 4423939112, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jaguilar@natgas.com', '$2a$12$0dVOuW6jyC1mG1II1o3qzuN.sYPLJsku5Cd3jj0NSLJqvFskX5tsS', 'Jordina', 'Aguilar', 8, 5, 48, 1, 'AURJ9911034T4', '1999-11-27', 4422208514, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-05-01 16:15:06'),
('jaleu@natgas.com', '$2a$12$dXfzJr8ZQ1xJE1aQSrSNqeR.DQQSrb4/bY7e2hcJaSx9rEdyl4HzG', 'Julio', 'Aleu', 6, 1, 20, 1, 'AEIJ890705D12', '1989-07-15', 4428558047, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jandreu@natgas.com', '$2a$12$gSpbiWt3ZZuxLyHk2mdOIeTF8tym1HR8KX5H3aXF3FP.Tz7CvSGN6', 'Julio', 'Andreu', 6, 5, 10, 1, 'AECJ921026ND5', '1992-10-26', 4420881626, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2017-08-26', '2022-03-27 16:49:40', '2022-05-01 16:17:41'),
('janguera@natgas.com', '$2a$12$FOAya612yAP8icv0IzqfXuCWMh/d9AOdkKmq/Mb4G6GSe.Pn8IQvG', 'Juan', 'Anguera', 10, 5, 6, 1, 'AUVJ800927LDA', '1980-09-27', 4424473173, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2018-02-14', '2022-03-27 16:49:40', '2022-05-01 16:20:01'),
('jayala@natgas.com', '$2a$12$YK.xzzZXSPoykK5mCE4lrujHEVqtmB.q3ukZ6oOVnHajYM4qYSSCC', 'Joan', 'Ayala', 8, 4, 3, 0, 'AAFJ911007P69', '1991-12-07', 4423353120, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2019-10-31', '2022-03-27 16:49:40', '2022-05-03 07:55:13'),
('jayalas@natgas.com', '$2a$12$vsOcG3xe6P4kOb4CP7jfbutaAqErNQZ0mdfFK5WWdTh1j4gBbdeQS', 'Jesus', 'Ayalas', 6, 5, 30, 1, 'AATJ930415AW3', '1993-04-15', 4427899927, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jbaez@natgas.com', '$2a$12$wMVxd8q5qwkqy7hgN7W4IeZ0I1Ocoe7QoouH9HdNuACJ7cGx3diNW', 'Joan', 'Baez', 6, 4, 4, 1, 'BATJ911007MZ0', '2000-01-26', 4427286925, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-08-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jbelmonte@natgas.com', '$2a$12$Xw4GXMxnvYi3u0TZUtinkupf3Ixap/b9q93PHRDeANBr5l7UaKrCm', 'Jordi', 'Belmonte', 48, 5, 46, 1, 'BESJ000208DMA', '2000-02-08', 4428539127, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-21 21:47:26'),
('jbiosca@natgas.com', '$2a$12$6b4TJHxgjBgEg/pJA/lSxOvmuTsxXQNvoNpmPqzuXSKK0xwIhRZam', 'Jordi', 'Biosca', 9, 2, 18, 1, 'BICL0204153Y2', '1993-05-16', 4420117634, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jmarti@natgas.com', '$2a$12$6TtfpinBBfsXQ/bkDZv.suINNhY3QPdTCtUb3pbUsYlC1kiel9Uhy', 'Joan', 'Marti', 8, 5, 42, 1, 'AEVJ000204VD0', '2000-02-04', 4425016169, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jraya@natgas.com', '$2a$12$zF6sV3FZwMB9FsL6BX3kKeQ1k66czQ7bvJZVhbcekxtGQNjXu8p.W', 'Jordi', 'Raya', 8, 0, 15, 1, 'RAGJ020224QI2', '2000-02-24', 4429379455, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-07-30', '2022-03-27 16:49:40', '2022-05-01 16:22:02'),
('lbidault@natgas.com', '$2a$12$bxVv81IwvcjkRLcUihNmaeq1aapc3qKsp5MDFJfJe9KASPjt8XP9G', 'Laura', 'Bidault', 6, 5, 17, 1, 'BICL0204153Y2', '2002-04-15', 4426704762, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('lvalles@natgas.com', '$2a$12$cqVQESlDGSZLklmkgSJSZepHX23t7LYZidK3Fgu/./h8CaFMpVQ6O', 'Laura', 'Valles', 6, 5, 8, 1, 'VAGL990319D55', '1999-03-19', 4426936190, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2017-07-03', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('lzambudio@natgas.com', '$2a$12$n5uN3fvvfWXgR/v/i9NtcefOOOqy1q02Vrnpje/leIxFpcSa86XrS', 'Luis', 'Zambudio', 6, 5, 16, 1, 'ZAFL990126LT8', '1999-01-26', 4427789948, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mbajona@natgas.com', '$2a$12$hGE6wQ6I3/GXQvvCoBzW7eblWjc3z.RvHSUU8UBCqMG4U7Cu03Wju', 'Marc', 'Bajona', 8, 5, 47, 1, 'BAGM0002093E4', '2000-02-09', 4425896964, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-05-01 16:24:52'),
('mbaraldes@natgas.com', '$2a$12$kR5QjKyFCt1Qwya28Ud.8.PCidqDg6M9U54KkIz0sPCcHJvUdjr9u', 'Maria', 'Baraldes', 6, 1, 11, 1, 'BACI9405148D3', '1994-05-14', 4420400918, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2013-09-17', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mbastardes@natgas.com', '$2a$12$2KDgfc7eJjmIG8XUuG4HsurtBOH4QEP0bQjWheVx23PSfByUdG7HW', 'Marc', 'Bastardes', 6, 5, 5, 1, 'BASM970814FE8', '1997-08-14', 4421672339, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Masculino', '2019-06-16', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mialigue@natgas.com', '$2a$12$qDK4./gmNSEFDTgyeEvlpOpZopdxYnEaKkYNKQ3bMLRsl11oZhxC6', 'María Isabel', 'Aligue', 8, 5, 39, 1, 'AIBI000201K89', '2000-02-01', 4426143278, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mjbarriga@natgas.com', '$2a$12$wYW5vywTn0d2oZJMCgxIdujdQqk8cC8tGwpcQYP5TjSeieOo0pGNa', 'Maria Jose', 'Barriga', 8, 5, 49, 1, 'BASJ000201F2A', '2000-02-01', 4429831677, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-05-01 16:25:11'),
('mmoliner@natgas.com', '$2a$12$71UuGya2relroX7DJ1xUz.wSvnF7Y3urdYBFLfThKNps9nIsKGbja', 'Maria', 'Moliner', 6, 5, 34, 1, 'MOGM000127SZ3', '2000-01-27', 4428627896, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mpascual@natgas.com', '$2a$12$1EGN3UcBpNaK8jtFcoJzP.p23w/ia6ej/7UN.MpbMuyoIFlRt9PM2', 'Mario', 'Pascual', 6, 5, 29, 1, 'PAFM921002568', '1992-10-02', 4424564684, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('msanchez@natgas.com', '$2a$12$4c5TKbLuGPqqM3LteLZmQ.OQYRZSTAVht5QnuLS5chq7oIb.fWU6y', 'Mirella', 'Sanchez', 6, 4, 37, 1, 'SEGM000130CYA', '2000-01-30', 4429894858, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('oaloy@natgas.com', '$2a$12$tGX6hRqesw6n79f7D3TmC.QYwR.ZTmDryoOQyjRUnKoFxeRDIwAJi', 'Oliver', 'Aloy', 8, 5, 44, 1, 'AOCO000206Q14', '2000-02-06', 4429581621, 'JUAN ESCUTIA 44, NIÑOS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('pruebat@outlook.com', '$2a$12$bUwTkyALyb5VIFwFmAsIWO5k4PR1dSXGrzIzsFnbOqfiv7jAKcTKS', 'Juan', 'Perez', 0, 0, 84, 0, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-02 11:23:16', '2022-05-02 06:23:16'),
('qviso@natgas.com', '$2a$12$ev9oAQm/KWy4yPdlJy9.OOBG7y8/5ogWRz0JFVsZWc0.GYr.3ovqu', 'Queralt', 'Viso', 7, 3, 2, 1, 'VIGQ890704UG3', '1989-07-04', 4426047960, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2010-09-05', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('ravila@natgas.com', '$2a$12$hSATCfxH2vvWjLI/YhSRR.F01Zy6bYKqbmDzQ79eGbKDC1T7J741m', 'Raquel', 'Avila', 8, 5, 50, 1, 'AIMR000216MF7', '2000-02-16', 4422154324, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-05-01 16:26:38'),
('rmorales@natgas.com', '$2a$12$51WYFAoBCJ6y2eFaQFY8KO5cfBmXQfNmK0D/L/JXWZKlombyy8Qyu', 'Ramon', 'Morales', 6, 1, 22, 1, 'MOGR901017PU6', '1990-10-17', 4429173527, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('rraya@natgas.com', '$2a$12$wBEB3eiUfyVuc1AxQz5ll.CzSDWMkzGLbicq4ulGb7aW7gDe3gFqa', 'Raquel', 'Raya', 12, 5, 9, 1, 'RAGR9811291D4', '1998-11-29', 4426760050, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2020-12-09', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('saltmiras@natgas.com', '$2a$12$uzWT6TUGMfuqhGb3fTESfOtf7FL.fVbY0ChTDId.7QocCpgg4iVli', 'Sandra', 'Altmiras', 8, 5, 45, 1, 'AIAS000207LK2', '2000-02-07', 4424733183, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-05-01 16:27:41'),
('srasero@natgas.com', '$2a$12$C0hcKm4MQo0IMS5jpUnYfub2fMUfsI3gXLT0LCxAi6ucTTKR.P6mC', 'Silvia', 'Rasero', 6, 5, 32, 1, 'RAGS930106ET1', '1993-01-06', 4427365631, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('TEST@outlook.com', '$2a$12$3yuyYTCf39oemv7PxF2qEu6Po2i0qhIGIaOMhJJnqMzMj4.e3PYsa', 'Armando', 'Gutiérrez Rojo', 0, 0, 83, 1, NULL, '1970-01-01', NULL, NULL, NULL, '1970-01-01', '2022-05-01 20:40:16', '2022-05-01 16:37:39'),
('test1@outlook.com', '$2a$12$xdpGLV/2AmbUTFq8ZcJxBuCsR9v4bNvCr7NOd1L3jPTFQ579a0bJ6', 'Armando', 'Gutiérrez Rojo', 0, 0, 85, 0, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-02 18:14:33', '2022-05-02 13:14:33'),
('tmas@natgas.com', '$2a$12$yR5afva9ijEDGI2/KAfjhOv3cpXj9EwmDq/tLSzoDCdpsgmgtXNPO', 'Toni', 'Mas', 8, 5, 40, 1, 'MAFT0011032J6', '2000-11-03', 4427980103, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('xbenitez@natgas.com', '$2a$12$TBa87lxoyL0DC8gQ.C3OPOI9GUHnwRtpo/jTQ41XRXXcnBFKGmala', 'Xavier', 'Benitez', 6, 5, 28, 1, 'BEJX930413DV2', '1993-04-13', 4422574837, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pertenece`
--

CREATE TABLE `pertenece` (
  `idPertenece` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `position` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pertenece`
--

INSERT INTO `pertenece` (`idPertenece`, `email`, `idDepartamento`, `position`, `date`, `created_at`, `updated_at`) VALUES
(1, 'earocas@natgas.com', 1, 'Analista', '2004-01-19', '2004-01-21 06:00:00', NULL),
(2, 'qviso@natgas.com', 2, 'Especialista', '2005-01-19', '2005-01-21 06:00:00', NULL),
(3, 'jayala@natgas.com', 1, '', '2006-01-19', '2006-01-21 06:00:00', '2022-04-29 19:37:24'),
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
(45, 'jbelmonte@natgas.com', 1, 'Analista', '2004-06-19', '2004-06-21 05:00:00', '2022-04-14 10:43:25'),
(46, 'mbajona@natgas.com', 2, 'Analista', '2005-06-19', '2005-06-21 05:00:00', NULL),
(47, 'jaguilar@natgas.com', 3, 'Especialista', '2006-06-19', '2006-06-21 05:00:00', NULL),
(48, 'mjbarriga@natgas.com', 4, 'Coordinacion', '2007-06-19', '2007-06-21 05:00:00', NULL),
(49, 'ravila@natgas.com', 5, 'Gerencia', '2008-06-19', '2008-06-21 05:00:00', NULL),
(50, 'jbiosca@natgas.com', 6, 'Direccion', '2009-06-19', '2009-06-21 05:00:00', NULL),
(51, 'earocas@natgas.com', 3, 'Analista', '2020-05-19', '2004-01-21 06:00:00', NULL),
(52, 'TEST@outlook.com', 1, 'Especialista', '2022-05-01', '2022-05-01 21:33:37', '2022-05-01 16:33:37'),
(53, 'TEST@outlook.com', 1, 'Especialista', '2022-05-01', '2022-05-01 21:37:39', '2022-05-01 16:37:39'),
(54, 'gurom84@outlook.com', 1, 'Especialista', '2022-05-01', '2022-05-01 21:42:30', '2022-05-01 16:42:30'),
(55, 'gurom84@outlook.com', 1, 'Especialista', '2022-05-01', '2022-05-01 21:44:33', '2022-05-01 16:44:33'),
(56, 'gurom84@outlook.com', 1, 'Especialista', '2022-05-02', '2022-05-02 18:39:47', '2022-05-02 13:39:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rangovacaciones`
--

CREATE TABLE `rangovacaciones` (
  `idRangoVacaciones` int(11) NOT NULL,
  `maximum` int(11) NOT NULL,
  `minimum` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
(17, 18, 16, 13, '2022-03-27 16:49:40', '2022-03-27 10:49:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `idRegistro` int(11) NOT NULL,
  `value` float NOT NULL,
  `date` date NOT NULL,
  `idReporte` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `reporte`
--

INSERT INTO `reporte` (`idReporte`, `name`, `created_at`, `updated_at`) VALUES
(1, 'NPS', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 'PorcentajeMujeres', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 'PorcentajeHombres', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 'ReducciónCO2', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 'Ventas', '2022-04-08 17:33:32', '2022-04-08 12:33:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacaciones`
--

CREATE TABLE `vacaciones` (
  `idVacaciones` int(11) NOT NULL,
  `verifiedleader` tinyint(1) NOT NULL DEFAULT '0',
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `substitute` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `vacaciones`
--

INSERT INTO `vacaciones` (`idVacaciones`, `verifiedleader`, `startdate`, `enddate`, `status`, `substitute`, `email`, `created_at`, `updated_at`) VALUES
(1, 1, '2004-01-21', '2004-01-21', 1, 'ESTEFANIA AROCAS PASADAS', 'earocas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 1, '2005-01-21', '2007-01-21', 1, 'QUERALT VISO GILABERT', 'qviso@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 1, '2006-01-21', '2010-01-21', 1, 'JOAN AYALA FERRERAS', 'jayala@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 0, '2007-01-21', '2011-01-21', 0, 'JOAN BAEZ TEJADO', 'jbaez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 0, '2008-01-21', '2013-01-21', 0, 'MARC BASTARDES SOTO', 'mbastardes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 0, '2009-01-21', '2012-01-21', 0, 'JOSEP ANGUERA VILAFRANCA', 'janguera@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 0, '2010-01-21', '2012-01-21', 0, 'ESTHER PASCUAL ALOY', 'epascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 0, '2011-01-21', '2013-01-21', 0, 'LAURA VALLÉS GIRVENT', 'lvalles@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 0, '2012-01-21', '2018-01-21', 0, 'RAQUEL RAYA GARCIA', 'rraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 0, '2013-01-21', '2015-01-21', 0, 'JOAN ANDREU CRUZ', 'jandreu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 0, '2014-01-21', '2003-05-21', 0, 'MARIA ISABEL BARALDÉS COMAS', 'mbaraldes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, 1, '2015-01-21', '2003-05-21', 1, 'ADRIÀ BERENGUERAS CULLERÉS', 'aberengueras@natgas.com', '2022-03-27 16:49:40', '2022-03-28 18:46:59'),
(13, 0, '2016-01-21', '2007-05-21', 0, 'GERARD LÓPEZ DE PABLO GARCIA UCEDA', 'glopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(14, 0, '2017-01-21', '2005-05-21', 0, 'ELIOT ARNAU MORENO', 'earnau@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(15, 1, '2018-01-21', '2006-05-21', 1, 'JORDI RAYA GAVILAN', 'jraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(16, 0, '2019-01-21', '2007-05-21', 0, 'LLUÍS ZAMBUDIO FIGULS', 'lzambudio@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(17, 1, '2020-01-21', '2010-05-21', 1, 'LAURA BIDAULT CULLERÉS', 'lbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(18, 0, '2021-01-21', '2010-05-21', 0, 'JORDI BIOSCA FONTANET', 'dzafra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(19, 1, '2022-01-21', '2010-05-21', 1, 'DOUNYA ZAFRA FIGULS', 'jaleu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(20, 1, '2023-01-21', '2011-05-21', 1, 'JULIO ALEU ICART', 'abadia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(21, 1, '2011-05-21', '2012-05-21', 1, 'ANDREU BADIA TORNÉ', 'rmorales@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(22, 1, '2012-05-21', '2013-05-21', 1, 'RAMON MORALES GESE', 'djblanco@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(23, 1, '2013-05-21', '2014-05-21', 1, 'DAVID-JESE BLANCO FONTANET', 'aalvarez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(24, 1, '2014-05-21', '2017-05-21', 1, 'ARAN ALVAREZ FERNÁNDEZ', 'ggarcia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(25, 1, '2015-05-21', '2017-05-21', 1, 'GEMMA GARCIA ALMOGUERA', 'ilibori@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(26, 1, '2015-05-21', '2017-05-21', 1, 'IVAN LIBORI FIGUERAS', 'dbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(27, 1, '2017-05-21', '2018-05-21', 1, 'DAVID BIDAULT PUEYO', 'xbenitez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(28, 1, '2018-05-21', '2019-05-21', 1, 'XAVIER BENITEZ JOSE', 'mpascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(29, 0, '2019-05-21', '2020-05-21', 0, 'MARIO PASCUAL FLORES', 'jayalas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(30, 0, '2020-05-21', '2021-05-21', 0, 'JESUS AYALA TORNÉ', 'glistan@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(31, 0, '2021-05-21', '2025-05-21', 0, 'GEMMA LISTAN FIGUERAS', 'srasero@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(32, 0, '2022-05-21', '2025-05-21', 0, 'SILVIA RASERO GAVILAN', 'aarnalot@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(33, 0, '2023-05-21', '2024-05-21', 0, 'ALBERT ARNALOT PUIG', 'mmoliner@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(34, 1, '2024-05-21', '2025-05-21', 0, 'MARIA MOLINER GARRIDO', 'bgalobart@natgas.com', '2022-03-27 16:49:40', '2022-04-01 00:27:45'),
(35, 0, '2025-05-21', '2026-05-21', 0, 'BERTA GALOBART GARCIA', 'blopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(36, 0, '2026-05-21', '2026-05-21', 0, 'BERTA LÓPEZ GARRIGASSAIT', 'msanchez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(37, 0, '2027-05-21', '2028-05-21', 0, 'MIREIA SÁNCHEZ GÓMEZ', 'galavedra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(38, 1, '2028-05-21', '2031-05-21', 1, 'GEMMA ALAVEDRA SUNYÉ', 'mialigue@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(39, 1, '2029-05-21', '2031-05-21', 1, 'MARIA ISABEL ALIGUÉ BONVEHÍ', 'tmas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(40, 1, '2030-05-21', '2031-05-21', 1, 'TONI MAS FRANCH', 'aaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(41, 1, '2031-05-21', '2001-06-21', 1, 'ALEJANDRO ALOY COMPTE', 'jmarti@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(42, 1, '2001-06-21', '2002-06-21', 1, 'JOAN MARTÍ ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(43, 1, '2002-06-21', '2003-06-21', 1, 'INGRID BIDAULT PÉREZ', 'oaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(44, 1, '2003-06-21', '2004-06-21', 1, 'OLIVER ALOY CODINACHS', 'saltmiras@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(45, 1, '2004-06-21', '2007-06-21', 1, 'SANDRA ALTIMIRAS ARMENTEROS', 'jbelmonte@natgas.com', '2022-03-27 16:49:40', '2022-05-01 12:17:53'),
(46, 1, '2005-06-21', '2008-06-21', 1, 'JORDI BELMONTE SÁNCHEZ', 'mbajona@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(47, 1, '2006-06-21', '2008-06-21', 1, 'MARC BAJONA GARCIA', 'jaguilar@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(48, 1, '2007-06-21', '2007-06-21', 1, 'JORDINA AGUILAR RODRIGUEZ', 'mjbarriga@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(49, 1, '2008-06-21', '2009-06-21', 1, 'MARIA JOSÉ BARRIGA SOTO', 'ravila@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(50, 1, '2009-06-21', '2010-06-21', 1, 'RAQUEL AVILA MASJUAN', 'jbiosca@natgas.com', '2022-03-27 16:49:40', '2022-04-14 10:35:16'),
(251, 1, '2022-03-21', '2022-03-23', 0, 'JOAN MARTÍ ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-22 01:48:59', '2022-05-01 12:25:49');

-- --------------------------------------------------------

--
-- Estructura para la vista `detallesdevacaciones`
--
DROP TABLE IF EXISTS `detallesdevacaciones`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallesdevacaciones`  AS SELECT `perfil`.`email` AS `email`, `perfil`.`name` AS `name`, `perfil`.`lastname` AS `lastname`, `departamento`.`name` AS `departamento`, `pertenece`.`position` AS `position`, `vacaciones`.`substitute` AS `substitute`, `vacaciones`.`startdate` AS `startdate`, `vacaciones`.`enddate` AS `enddate`, `vacaciones`.`idVacaciones` AS `idVacaciones`, `vacaciones`.`verifiedleader` AS `verifiedleader`, `vacaciones`.`status` AS `status`, `vacaciones`.`idVacaciones` AS `id` FROM (((`vacaciones` join `perfil`) join `pertenece`) join `departamento`) WHERE ((`vacaciones`.`email` = `perfil`.`email`) AND (`perfil`.`email` = `pertenece`.`email`) AND (`pertenece`.`idDepartamento` = `departamento`.`idDepartamento`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `detallesempleado`
--
DROP TABLE IF EXISTS `detallesempleado`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallesempleado`  AS SELECT `perfil`.`email` AS `email`, `perfil`.`name` AS `name`, `perfil`.`lastname` AS `lastname`, `perfil`.`vacations` AS `vacations`, `perfil`.`ngBlocks` AS `ngBlocks`, `pertenece`.`position` AS `position`, `departamento`.`name` AS `departamento`, `pertenece`.`date` AS `contrato`, `perfil`.`verified` AS `verified`, `perfil`.`number` AS `number`, `perfil`.`rfc` AS `rfc`, `perfil`.`birthdate` AS `birthdate`, `perfil`.`cellphone` AS `cellphone`, `perfil`.`address` AS `address`, `perfil`.`gender` AS `gender` FROM ((`perfil` join `pertenece`) join `departamento`) WHERE ((`perfil`.`email` = `pertenece`.`email`) AND (`pertenece`.`idDepartamento` = `departamento`.`idDepartamento`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `detallesempleo`
--
DROP TABLE IF EXISTS `detallesempleo`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallesempleo`  AS SELECT `perfil`.`email` AS `email`, `perfil`.`name` AS `name`, `perfil`.`lastname` AS `lastname`, `perfil`.`vacations` AS `vacations`, `perfil`.`ngBlocks` AS `ngBlocks`, `pertenece`.`position` AS `position`, `departamento`.`name` AS `departamento`, `pertenece`.`date` AS `contrato`, `perfil`.`verified` AS `verified`, `perfil`.`number` AS `number` FROM ((`perfil` join `pertenece`) join `departamento`) WHERE ((`perfil`.`email` = `pertenece`.`email`) AND (`pertenece`.`idDepartamento` = `departamento`.`idDepartamento`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `detallesnatgasblock`
--
DROP TABLE IF EXISTS `detallesnatgasblock`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detallesnatgasblock`  AS SELECT `perfil`.`email` AS `email`, `perfil`.`name` AS `name`, `perfil`.`lastname` AS `lastname`, `departamento`.`name` AS `departamento`, `pertenece`.`position` AS `position`, `natgasblock`.`date` AS `date`, `natgasblock`.`status` AS `status`, `natgasblock`.`period` AS `period`, `natgasblock`.`idNatgasblock` AS `id` FROM (((`natgasblock` join `perfil`) join `pertenece`) join `departamento`) WHERE ((`natgasblock`.`email` = `perfil`.`email`) AND (`perfil`.`email` = `pertenece`.`email`) AND (`pertenece`.`idDepartamento` = `departamento`.`idDepartamento`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asueto`
--
ALTER TABLE `asueto`
  ADD PRIMARY KEY (`idAsueto`);

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
-- AUTO_INCREMENT de la tabla `asueto`
--
ALTER TABLE `asueto`
  MODIFY `idAsueto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `blogpost`
--
ALTER TABLE `blogpost`
  MODIFY `idBlogPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `idDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `natgasblock`
--
ALTER TABLE `natgasblock`
  MODIFY `idNatgasblock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `noticia`
--
ALTER TABLE `noticia`
  MODIFY `idNoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
  MODIFY `number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT de la tabla `pertenece`
--
ALTER TABLE `pertenece`
  MODIFY `idPertenece` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `rangovacaciones`
--
ALTER TABLE `rangovacaciones`
  MODIFY `idRangoVacaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `idRegistro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `idReporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vacaciones`
--
ALTER TABLE `vacaciones`
  MODIFY `idVacaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=252;

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
