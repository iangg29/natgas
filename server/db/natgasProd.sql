-- -------------------------------------------------------------
-- TablePlus 4.6.2(410)
--
-- https://tableplus.com/
--
-- Database: natgas
-- Generation Time: 2022-05-01 14:11:56.5540
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE "asueto" (
  "idAsueto" int NOT NULL AUTO_INCREMENT,
  "date" date NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("idAsueto")
);

CREATE TABLE "blogpost" (
  "idBlogPost" int NOT NULL AUTO_INCREMENT,
  "date" date NOT NULL,
  "title" varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "content" varchar(2000) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "slug" varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "image" varchar(400) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idBlogPost")
);

CREATE TABLE "departamento" (
  "idDepartamento" int NOT NULL AUTO_INCREMENT,
  "name" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idDepartamento")
);









CREATE TABLE "natgasblock" (
  "idNatgasblock" int NOT NULL AUTO_INCREMENT,
  "date" date NOT NULL,
  "status" tinyint(1) NOT NULL,
  "period" tinyint(1) NOT NULL,
  "email" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idNatgasblock"),
  KEY "email" ("email"),
  CONSTRAINT "natgasblock_ibfk_1" FOREIGN KEY ("email") REFERENCES "perfil" ("email")
);

CREATE TABLE "noticia" (
  "idNoticia" int NOT NULL AUTO_INCREMENT,
  "name" varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "date" date NOT NULL,
  "image" varchar(400) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idNoticia")
);

CREATE TABLE "perfil" (
  "email" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "password" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "name" varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  "lastname" varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  "vacations" int DEFAULT '0',
  "ngBlocks" int NOT NULL,
  "number" int NOT NULL AUTO_INCREMENT,
  "verified" tinyint(1) NOT NULL,
  "rfc" varchar(20) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "birthdate" date NOT NULL,
  "cellphone" bigint NOT NULL,
  "address" varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "gender" varchar(20) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "contractdate" date NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("email"),
  UNIQUE KEY "email" ("email"),
  KEY "number" ("number")
);

CREATE TABLE "pertenece" (
  "idPertenece" int NOT NULL AUTO_INCREMENT,
  "email" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "idDepartamento" int NOT NULL,
  "position" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "date" date NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idPertenece"),
  KEY "email" ("email"),
  KEY "idDepartamento" ("idDepartamento"),
  CONSTRAINT "pertenece_ibfk_1" FOREIGN KEY ("email") REFERENCES "perfil" ("email"),
  CONSTRAINT "pertenece_ibfk_2" FOREIGN KEY ("idDepartamento") REFERENCES "departamento" ("idDepartamento")
);

CREATE TABLE "rangovacaciones" (
  "idRangoVacaciones" int NOT NULL AUTO_INCREMENT,
  "maximum" int NOT NULL,
  "minimum" int NOT NULL,
  "days" int NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idRangoVacaciones")
);

CREATE TABLE "registro" (
  "idRegistro" int NOT NULL AUTO_INCREMENT,
  "value" float NOT NULL,
  "date" date NOT NULL,
  "idReporte" int NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idRegistro"),
  KEY "idReporte" ("idReporte"),
  CONSTRAINT "registro_ibfk_1" FOREIGN KEY ("idReporte") REFERENCES "reporte" ("idReporte")
);

CREATE TABLE "reporte" (
  "idReporte" int NOT NULL AUTO_INCREMENT,
  "name" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idReporte")
);

CREATE TABLE "vacaciones" (
  "idVacaciones" int NOT NULL AUTO_INCREMENT,
  "verifiedleader" tinyint(1) NOT NULL DEFAULT '0',
  "startdate" date NOT NULL,
  "enddate" date NOT NULL,
  "status" tinyint(1) NOT NULL DEFAULT '0',
  "substitute" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "email" varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY ("idVacaciones"),
  KEY "email" ("email"),
  CONSTRAINT "vacaciones_ibfk_1" FOREIGN KEY ("email") REFERENCES "perfil" ("email")
);

INSERT INTO `blogpost` (`idBlogPost`, `date`, `title`, `content`, `slug`, `image`, `created_at`, `updated_at`) VALUES
(1, '2020-05-21', 'Recortes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'recortes-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:05'),
(2, '2021-05-21', 'Nuevas oportunidades', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevas-oportunidades', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:05'),
(3, '2022-05-21', 'Mejoras', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'mejoras-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:05'),
(4, '2023-05-21', 'Salud mental', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'salud-mental', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:05'),
(5, '2024-05-21', 'Dia del empleado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'dia-empleado', 'blog-1649053461699.jpeg', '2022-03-27 16:49:40', '2022-04-18 15:51:05'),
(6, '2025-05-21', 'Comunciate', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'comunicate-natgas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:05'),
(7, '2026-05-21', 'Marcas historicas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'marcas-historicas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(8, '2027-05-21', 'Precio del gas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'precio-gas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(9, '2028-05-21', 'Paginas relacionadas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'paginas-relacionadas', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(10, '2029-05-21', 'Tomate un break', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'tomate-un-break', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(11, '2030-05-21', 'Feliz dia laboral', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'dia-laboral', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(12, '2031-05-21', 'Trabajando en vacaciones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'trabajando-vacaciones', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(13, '2001-06-21', 'Dias festivos del mes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'dias-festivos-junio-21', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(14, '2022-04-23', 'Promociones de Junio', 'LOREM ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'promociones-junio-21', 'blog-1650732916728.jpeg', '2022-03-27 16:49:40', '2022-04-23 21:23:39'),
(15, '2003-06-21', 'Come saludable', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'come-saludable', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(16, '2004-06-21', 'Ejercitate con esta rutina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'ejercitate-rutina', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:04'),
(17, '2005-06-21', 'Un dia a la vez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'un-dia-a-la-vez', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:03'),
(18, '2006-06-21', 'Tecnologia y ciencia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'tecnologia-y-ciencia', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:03'),
(19, '2007-06-21', 'Ofetas de Junio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'ofertas-de-junio', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:03'),
(20, '2008-06-21', 'Como mejorar mi productividad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'como-mejorar-mi-productividad', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-03-27 16:49:40', '2022-04-18 15:51:03'),
(21, '2020-05-21', 'Hola Mundo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'hola-mundo', 'https://storage.googleapis.com/natgas/eds/eds-gto-mexico-japon_large.jpg', '2022-04-03 19:23:40', '2022-04-03 14:23:40'),
(22, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:11:22', '2022-04-03 23:11:22'),
(23, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:12:17', '2022-04-03 23:12:17'),
(24, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:12:30', '2022-04-03 23:12:30'),
(25, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:19:07', '2022-04-03 23:19:07'),
(27, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:25:00', '2022-04-03 23:25:00'),
(28, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:27:15', '2022-04-03 23:27:15'),
(29, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:31:59', '2022-04-03 23:31:59'),
(30, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:33:34', '2022-04-03 23:33:34'),
(31, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:34:04', '2022-04-03 23:34:04'),
(32, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:48:47', '2022-04-03 23:48:47'),
(33, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:49:43', '2022-04-03 23:49:43'),
(34, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:50:09', '2022-04-03 23:50:09'),
(35, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:50:33', '2022-04-03 23:50:33'),
(36, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:51:27', '2022-04-03 23:51:27'),
(37, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', '', '2022-04-04 04:51:48', '2022-04-03 23:51:48'),
(38, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 04:55:01', '2022-04-03 23:55:01'),
(39, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:26:11', '2022-04-04 00:26:11'),
(40, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:28:15', '2022-04-04 00:28:15'),
(41, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:29:07', '2022-04-04 00:29:07'),
(42, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:31:57', '2022-04-04 00:31:57'),
(43, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:33:48', '2022-04-04 00:33:48'),
(44, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:34:36', '2022-04-04 00:34:36'),
(45, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:40:31', '2022-04-04 00:40:31'),
(46, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:40:58', '2022-04-04 00:40:58'),
(47, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:50:50', '2022-04-04 00:50:50'),
(48, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:53:02', '2022-04-04 00:53:02'),
(49, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:53:20', '2022-04-04 00:53:20'),
(50, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:57:28', '2022-04-04 00:57:28'),
(51, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 05:59:28', '2022-04-04 00:59:28'),
(52, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 06:01:07', '2022-04-04 01:01:07'),
(53, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'blog-1649052109482.png', '2022-04-04 06:01:49', '2022-04-04 01:01:49'),
(54, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-04 06:02:11', '2022-04-04 01:02:11'),
(55, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'blog-1649053163745.jpeg', '2022-04-04 06:19:23', '2022-04-04 01:19:23'),
(56, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'blog-1649053482922.jpeg', '2022-04-04 06:24:42', '2022-04-04 01:24:42'),
(57, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-07 14:55:56', '2022-04-07 09:55:56'),
(58, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-07 14:58:51', '2022-04-07 09:58:51'),
(59, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-07 15:00:28', '2022-04-07 10:00:28'),
(60, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-07 15:01:52', '2022-04-07 10:01:52'),
(61, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'default.png', '2022-04-07 15:02:34', '2022-04-07 10:02:34'),
(62, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'blog-1649343922548.jpeg', '2022-04-07 15:05:22', '2022-04-07 10:05:22'),
(63, '2022-04-03', 'Nuevo Blog De Prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, sapien non bibendum fermentum, diam orci pulvinar nisl, nec commodo libero purus et purus. Suspendisse dictum in ligula a lacinia. Donec euismod ligula felis, vel mattis lacus consectetur eget. Sed malesuada turpis id dui pretium pretium. Aliquam posuere quam at ornare fringilla. Praesent vehicula gravida erat, mattis cursus est tincidunt in. Maecenas massa purus, efficitur quis nunc vel, venenatis imperdiet ex.', 'nuevo-blog-de-prueba', 'blog-1649344052958.jpeg', '2022-04-07 15:07:33', '2022-04-07 10:07:33');

INSERT INTO `departamento` (`idDepartamento`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Marketing', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 'Operaciones', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 'Comercial', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 'Infraestructura', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 'Bi', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 'Optimizaci??n y eficiencia', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 'Natdef', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 'Proyectos estrat??gicos', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 'Asuntos regulatorior', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 'Imp??lsate', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 'Direcci??n tecnica.', '2022-03-27 16:49:40', '2022-03-27 10:49:40');

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
(23, '2002-04-21', 1, 1, 'aalvarez@natgas.com', '2022-03-27 16:49:40', '2022-04-19 15:30:40'),
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

INSERT INTO `noticia` (`idNoticia`, `name`, `date`, `image`, `created_at`, `updated_at`) VALUES
(27, 'Domm', '2022-04-30', 'news-1650995534624.jpeg', '2022-04-26 17:51:20', '2022-04-26 17:52:14');

INSERT INTO `perfil` (`email`, `password`, `name`, `lastname`, `vacations`, `ngBlocks`, `number`, `verified`, `rfc`, `birthdate`, `cellphone`, `address`, `gender`, `contractdate`, `created_at`, `updated_at`) VALUES
('aaloy@natgas.com', '$2a$12$iCwErsXFtcx8irNHkY8B2u8t2vsz14ufkbfiRgk6qfQ6i3yPGjr2G', 'Alejandro', 'Aloy Compte', 8, 5, 41, 1, 'AOCA0002039N0', '2000-02-03', 4429257845, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('aalvarez@natgas.com', '$2a$12$NrdNvk4l/fZOXGPk56xgzeg2dB4OBWUuw9TeyC2AxTKPvj/0M3OkG', 'Aran', '??lvarez Fern??ndez', 6, 0, 24, 1, 'AAFA890819Q4A', '1989-08-19', 4426534125, 'JUAN ESCUTIA 44, NI??OS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-19 15:30:40'),
('aarnalot@natgas.com', '$2a$12$Hl3hD8gBAgijs1qA6LsVguarBc.eGa12vsG1EBiBOmxWEnhwSQr9e', 'Albert', 'Arnalot Puig', 6, 5, 33, 1, 'AAPA000126812', '2000-01-26', 4429756506, 'ANILLO VIAL JUN??PERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('abadia@natgas.com', '$2a$12$dEz5w/QBReLJafDD23pMyOAAARI/KymPQWpm//uqsEb8C7BtThH4u', 'Andreu', 'Badia Torn??', 6, 1, 21, 1, 'BATA890816GQ7', '1989-08-16', 4421454394, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('aberengueras@natgas.com', '$2a$12$Rm77hkEXQ8Xpp0bgmg.4DOiTuPLh.7ATuWwc2R.X3nC8bMF0EWFQG', 'Adria', 'Berengueras', 7, 4, 12, 1, 'BECA0007249V2', '2000-07-24', 4421222126, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2022-04-14', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('bgalobart@natgas.com', '$2a$12$s9foFgEO97gO4S3gHYPUNu.heiHRgExBcSfwCIwOFsB.Dt4fgeepe', 'Berta', 'Galobart', 108, 4, 35, 1, 'GAGB0005054L8', '2000-05-05', 4421551713, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-19 15:30:32'),
('blopez@natgas.com', '$2a$12$7KUPJCs/o49sAPPwgothH.rHVHyRFFG6CSYvIIJU7h4QZ1gG7cYGW', 'Berta', 'L??pez', 6, 3, 36, 1, 'LEGB0001296Y2', '2000-01-29', 4424901312, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('carlos@smartcode.com', '$2a$12$fi1V9YpSi8sGl4dV20ulb.8uWTQ8EyAUF839wYjSIqQ3syKxG/p06', NULL, 'Moreno', 0, 0, 51, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-11 16:24:22', '2022-04-12 01:12:57'),
('cesar@smartcode.com', '$2a$12$afVbrk6DmZaMuyZESPTFkePpYJ4alAUJBZbi/Hw5S/Z9MOsId1XYi', NULL, 'Moreno', 0, 0, 58, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:02:05', '2022-04-12 01:12:57'),
('cesar4@smartcode.com', '$2a$12$85z6QTFqiZNdlkZoEtNo3uNKBhpYqim1cXRo4I2BQIWQSVse1f2yu', 'Carlos', 'Moreno', 0, 0, 63, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:08:29', '2022-04-12 01:12:57'),
('cesar6@smartcode.com', '$2a$12$LFhgsq8.6nO5FH.4ydOAv.ZF0WXnSWFdsCRzsAchitOOKmzFxc8Je', 'Carlos', 'Moreno', 0, 0, 65, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:09:49', '2022-04-12 01:12:57'),
('cesarj@smartcode.com', '$2a$12$SbfuuTQ3LpYWzkBWBlT4eenMEVdv1/9gYP1xHSS7yGqfbF2jtPy46', 'Cesar', 'Jimenez', 0, 0, 70, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:15:48', '2022-04-12 01:12:57'),
('cesarjim@smartcode.com', '$2a$12$IDwvfA/U4hgVz4by8icIvOozrGA/x28t4I5XerAzEkpMh1lLX9JDG', 'Cesar', 'Jimenez', 0, 0, 68, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:15:03', '2022-04-12 01:12:57'),
('cesarjimenez@smartcode.com', '$2a$12$juGOvnZEQhF2BNJfaS4JGOnYMoXiFjC3c8OEPlPejkFW.I7ewWiuC', 'Cesar', 'Jimenez', 0, 0, 67, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:14:36', '2022-04-12 01:12:57'),
('dbidault@natgas.com', '$2a$12$dSnDc46nvOf18twWR1OFxuqSgUzDuL2jIev67A6wCbxhf1O81EwXS', 'David', 'Bidault', 6, 1, 27, 1, 'BIPD9304123E3', '1993-04-12', 4428241672, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('djblanco@natgas.com', '$2a$12$QltgyEHf5AmXhij08wh90ewFgnKpR9tUVodyMjhFe9HkMN9giYehu', 'David', 'Blanco', 6, 1, 23, 1, 'BAFD9003117H5', '1990-03-11', 4425797242, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('dzafra@natgas.com', '$2a$12$QDTK5opHcvc7esC4C2J/rupwiLYfC8Tls/SG/FLTodsFVHxtIJ/qC', 'Dounya', 'Zafra', 6, 5, 19, 1, 'ZAFD950630K74', '1995-06-30', 4427251707, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('earnau@natgas.com', '$2a$12$ELJlPbmgVX8p7MsMWl5qg.jPzTjC9qOPg6fDorQ/m7AE.HT1QgF8C', 'Eliot', 'Arnau', 6, 5, 14, 1, 'AAME9104129W7', '1991-04-12', 4428495652, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Masculino', '2015-06-10', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('earocas@natgas.com', 'jajaja', 'Estefania', 'Rocas', 6, 5, 1, 1, 'AOPE900413NX7', '1990-04-13', 4424912166, 'MARAVILLAS 1516, RESIDENCIAL EL REFUGIO , QUERETARO , QRO , C.P.76146', 'Femenino', '2020-05-01', '2022-03-27 16:49:40', '2022-04-12 12:47:12'),
('epascual@natgas.com', '$2a$12$mfZe3XiUpvd5WabWCI0mWOrjVytWr7UlFrePSEQyuiP9D1tOvxzSK', 'Esther', 'Pascual', 6, 2, 7, 1, 'PAAE010131PI3', '2001-01-31', 4421882041, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-09-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('galavedra@natgas.com', '$2a$12$XeRegIkkXRrK1KUCPG16u.vsS2Tu2k6uXDgBunwGCj2bQYNL.1lPy', 'Gemma', 'Alavedra', 6, 4, 38, 1, 'AASG000131LAA', '2000-01-31', 4422151115, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('ggarcia@natgas.com', '$2a$12$UFgEkn5VSzhgEleqsahA7.M8cuB4hCwu3zDQR3uJ6VXJOTL6RLWMe', 'Gemma', 'Garcia', 6, 1, 25, 1, 'GAAG930410854', '1993-04-10', 4427070011, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('glistan@natgas.com', '$2a$12$S7wdaJdNI7IXMiGigBABeel4Z2aTTh8HJzk1W1Mh4J22NQrgP1OX.', 'Gemma', 'Listan', 6, 5, 31, 1, 'LIFG9304168I2', '1993-04-16', 4425191915, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('glopez@natgas.com', '$2a$12$m14xlssbe/OZZ.Q/l3vPdOIDQvSsybDSmbjzGZxgQBo2APVJ03vXe', 'Gerard', 'Lopez', 6, 5, 13, 1, 'GAUG990830K910', '1999-08-30', 4429290795, 'ANILLO VIAL JUN??PERO SERRA KM. 1.5, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-02-19', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('hdjsadhkadsh@smartcode.com', '$2a$12$0sy1sKYVaslhmF0TXqaZ0.t8W0G5wCERpDgmKdf.IeOPpI0CiPc4K', 'Cesar', 'Jimenez', 0, 0, 73, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:45:22', '2022-04-12 01:12:57'),
('ibidault@natgas.com', '$2a$12$rmklUb/ieqz/dqRpSGwlPOZdnMiFVhOJE4ehlCcTxMPdUxlPMw0re', 'Ingrid', 'Bidault', 8, 5, 43, 1, 'BIPI000205L20', '2000-02-05', 4427310007, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('ilibori@natgas.com', '$2a$12$nx.V22Pl.oXY4jRSYm0gVeyMxPkKdBLWYW9bqHZzZpPqJS4MOdl6.', 'Ivan', 'Libori', 6, 1, 26, 1, 'LIFI930411K96', '1993-04-11', 4423939112, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jaguilar@natgas.com', '$2a$12$0dVOuW6jyC1mG1II1o3qzuN.sYPLJsku5Cd3jj0NSLJqvFskX5tsS', 'Jordina', 'Aguilar', 8, 5, 48, 0, 'AURJ9911034T4', '1999-11-03', 4422208514, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jaleu@natgas.com', '$2a$12$dXfzJr8ZQ1xJE1aQSrSNqeR.DQQSrb4/bY7e2hcJaSx9rEdyl4HzG', 'Julio', 'Aleu', 6, 1, 20, 1, 'AEIJ890705D12', '1989-07-15', 4428558047, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jandreu@natgas.com', '$2a$12$gSpbiWt3ZZuxLyHk2mdOIeTF8tym1HR8KX5H3aXF3FP.Tz7CvSGN6', 'Julio', 'Andreu', 6, 5, 10, 0, 'AECJ921026ND5', '1992-10-26', 4420881626, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2017-08-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('janguera@natgas.com', '$2a$12$FOAya612yAP8icv0IzqfXuCWMh/d9AOdkKmq/Mb4G6GSe.Pn8IQvG', 'Juan', 'Anguera', 10, 5, 6, 0, 'AUVJ800927LDA', '1980-09-27', 4424473173, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2018-02-14', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jayala@natgas.com', '$2a$12$YK.xzzZXSPoykK5mCE4lrujHEVqtmB.q3ukZ6oOVnHajYM4qYSSCC', 'Joan', 'Ayala', 8, 5, 3, 0, 'AAFJ911007P66', '1991-12-07', 4423353115, 'AVE DE LA LUZ 220, SATELITE , QUERETARO , QRO , C.P.76110', 'Masculino', '2019-10-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jayalas@natgas.com', '$2a$12$vsOcG3xe6P4kOb4CP7jfbutaAqErNQZ0mdfFK5WWdTh1j4gBbdeQS', 'Jesus', 'Ayalas', 6, 5, 30, 1, 'AATJ930415AW3', '1993-04-15', 4427899927, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jbaez@natgas.com', '$2a$12$wMVxd8q5qwkqy7hgN7W4IeZ0I1Ocoe7QoouH9HdNuACJ7cGx3diNW', 'Joan', 'Baez', 6, 4, 4, 1, 'BATJ911007MZ0', '2000-01-26', 4427286925, 'JUAN ESCUTIA 44, NI??OS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-08-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jbelmonte@natgas.com', '$2a$12$Xw4GXMxnvYi3u0TZUtinkupf3Ixap/b9q93PHRDeANBr5l7UaKrCm', 'Jordi', 'Belmonte', 22, 5, 46, 0, 'BESJ000208DMA', '2000-02-08', 4428539127, 'CLLE INDEPENDENCIA 16, PINAL DE AMOLES , PINAL DE AMOLES , QRO , C.P.76300', 'Masculino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-14 11:26:41'),
('jbiosca@natgas.com', '$2a$12$6b4TJHxgjBgEg/pJA/lSxOvmuTsxXQNvoNpmPqzuXSKK0xwIhRZam', 'Jordi', 'Biosca', 9, 2, 18, 1, 'BICL0204153Y2', '1993-05-16', 4420117634, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jijijija@smartcode.com', '$2a$12$NOUXOSUi9VMkBzu0u48.sOET8PpBS0QT1wv7niFLeaS3EDJGRUrzC', 'Cesar', 'Jimenez', 0, 0, 72, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:44:59', '2022-04-12 01:12:57'),
('jmarti@natgas.com', '$2a$12$6TtfpinBBfsXQ/bkDZv.suINNhY3QPdTCtUb3pbUsYlC1kiel9Uhy', 'Joan', 'Marti', 8, 5, 42, 1, 'AEVJ000204VD0', '2000-02-04', 4425016169, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('jraya@natgas.com', '$2a$12$zF6sV3FZwMB9FsL6BX3kKeQ1k66czQ7bvJZVhbcekxtGQNjXu8p.W', 'Jordi', 'Raya', 8, 0, 15, 0, 'RAGJ020224QI2', '2000-02-24', 4429379455, 'ANILLO VIAL JUNIPERO SERRA 1500, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Masculino', '2020-07-30', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('juanito@smartcode.com', '$2a$12$9Z3NP1HaAOCSj2n2xCX7x.1R85yXhqblXWpkcjrzvBG9IiMmU8PRW', NULL, 'Moreno', 0, 0, 53, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-11 16:26:51', '2022-04-12 01:12:57'),
('juanito1@smartcode.com', '$2a$12$3YCHPHUMqALhV7IyxVs9B.LL7sPLGxHucGRv4RMW29gbomB4RHuYq', NULL, 'Moreno', 0, 0, 55, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 04:59:20', '2022-04-12 01:12:57'),
('juanito2@smartcode.com', '$2a$12$oZolVbwiufBhVTaiJhYyzeSzRIZvvye7xuWlSBrBXDTn40Y3vpwIe', NULL, 'Moreno', 0, 0, 57, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:00:12', '2022-04-12 01:12:57'),
('lbidault@natgas.com', '$2a$12$bxVv81IwvcjkRLcUihNmaeq1aapc3qKsp5MDFJfJe9KASPjt8XP9G', 'Laura', 'Bidault', 6, 5, 17, 1, 'BICL0204153Y2', '2002-04-15', 4426704762, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('lvalles@natgas.com', '$2a$12$cqVQESlDGSZLklmkgSJSZepHX23t7LYZidK3Fgu/./h8CaFMpVQ6O', 'Laura', 'Valles', 6, 5, 8, 1, 'VAGL990319D55', '1999-03-19', 4426936190, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2017-07-03', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('lzambudio@natgas.com', '$2a$12$n5uN3fvvfWXgR/v/i9NtcefOOOqy1q02Vrnpje/leIxFpcSa86XrS', 'Luis', 'Zambudio', 6, 5, 16, 1, 'ZAFL990126LT8', '1999-01-26', 4427789948, 'PASEO CONSTITUYENTES 1265, EL JACAL , QUERETARO , QRO , C.P.76180', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mbajona@natgas.com', '$2a$12$hGE6wQ6I3/GXQvvCoBzW7eblWjc3z.RvHSUU8UBCqMG4U7Cu03Wju', 'Marc', 'Bajona', 8, 5, 47, 0, 'BAGM0002093E4', '2000-02-09', 4425896964, 'ANGELA PERALTA 7, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mbaraldes@natgas.com', '$2a$12$kR5QjKyFCt1Qwya28Ud.8.PCidqDg6M9U54KkIz0sPCcHJvUdjr9u', 'Maria', 'Baraldes', 6, 1, 11, 1, 'BACI9405148D3', '1994-05-14', 4420400918, 'MADERO 11, CENTRO HISTORICO , QUERETARO , QRO , C.P.76000', 'Femenino', '2013-09-17', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mbastardes@natgas.com', '$2a$12$2KDgfc7eJjmIG8XUuG4HsurtBOH4QEP0bQjWheVx23PSfByUdG7HW', 'Marc', 'Bastardes', 6, 5, 5, 1, 'BASM970814FE8', '1997-08-14', 4421672339, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Masculino', '2019-06-16', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mialigue@natgas.com', '$2a$12$qDK4./gmNSEFDTgyeEvlpOpZopdxYnEaKkYNKQ3bMLRsl11oZhxC6', 'Mar??a Isabel', 'Aligue', 8, 5, 39, 1, 'AIBI000201K89', '2000-02-01', 4426143278, 'BLVD BERNARDO QUINTANA 506, ARBOLEDAS , QUERETARO , QRO , C.P.76140', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mjbarriga@natgas.com', '$2a$12$wYW5vywTn0d2oZJMCgxIdujdQqk8cC8tGwpcQYP5TjSeieOo0pGNa', 'Maria Jose', 'Barriga', 8, 5, 49, 0, 'BASJ000201F2A', '2000-02-01', 4429831677, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mmoliner@natgas.com', '$2a$12$71UuGya2relroX7DJ1xUz.wSvnF7Y3urdYBFLfThKNps9nIsKGbja', 'Maria', 'Moliner', 6, 5, 34, 1, 'MOGM000127SZ3', '2000-01-27', 4428627896, 'CARRETERA QROSLP 10672, EL SALITRE , QUERETARO , QRO , C.P.76127', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('mpascual@natgas.com', '$2a$12$1EGN3UcBpNaK8jtFcoJzP.p23w/ia6ej/7UN.MpbMuyoIFlRt9PM2', 'Mario', 'Pascual', 6, 5, 29, 1, 'PAFM921002568', '1992-10-02', 4424564684, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('msanchez@natgas.com', '$2a$12$4c5TKbLuGPqqM3LteLZmQ.OQYRZSTAVht5QnuLS5chq7oIb.fWU6y', 'Mirella', 'Sanchez', 6, 4, 37, 1, 'SEGM000130CYA', '2000-01-30', 4429894858, 'IGNACIO ZARAGOZA 6, LAS PLAZAS , QUERETARO , QRO , C.P.76180', 'Femenino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('oaloy@natgas.com', '$2a$12$tGX6hRqesw6n79f7D3TmC.QYwR.ZTmDryoOQyjRUnKoFxeRDIwAJi', 'Oliver', 'Aloy', 8, 5, 44, 1, 'AOCO000206Q14', '2000-02-06', 4429581621, 'JUAN ESCUTIA 44, NI??OS HEROES , QUERETARO , QRO , C.P.76010', 'Masculino', '2022-02-15', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('qviso@natgas.com', '$2a$12$ev9oAQm/KWy4yPdlJy9.OOBG7y8/5ogWRz0JFVsZWc0.GYr.3ovqu', 'Queralt', 'Viso', 7, 3, 2, 1, 'VIGQ890704UG3', '1989-07-04', 4426047960, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2010-09-05', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('ravila@natgas.com', '$2a$12$hSATCfxH2vvWjLI/YhSRR.F01Zy6bYKqbmDzQ79eGbKDC1T7J741m', 'Raquel', 'Avila', 8, 5, 50, 0, 'AIMR000216MF7', '2000-02-16', 4422154324, 'JURIQUILLA 54, JURIQUILLA , QUERETARO , QRO , C.P.76226', 'Femenino', '2015-10-29', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('rmorales@natgas.com', '$2a$12$51WYFAoBCJ6y2eFaQFY8KO5cfBmXQfNmK0D/L/JXWZKlombyy8Qyu', 'Ramon', 'Morales', 6, 1, 22, 1, 'MOGR901017PU6', '1990-10-17', 4429173527, 'CLLE ABETO OTE 66, LOS OLVERA , QUERETARO , QRO , C.P.76904', 'Masculino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('rraya@natgas.com', '$2a$12$wBEB3eiUfyVuc1AxQz5ll.CzSDWMkzGLbicq4ulGb7aW7gDe3gFqa', 'Raquel', 'Raya', 12, 5, 9, 1, 'RAGR9811291D4', '1998-11-29', 4426760050, 'PIE DE LA CUESTA 703, SAN PABLO I , QUERETARO , QRO , C.P.76125', 'Femenino', '2020-12-09', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('saltmiras@natgas.com', '$2a$12$uzWT6TUGMfuqhGb3fTESfOtf7FL.fVbY0ChTDId.7QocCpgg4iVli', 'Sandra', 'Altmiras', 8, 5, 45, 0, 'AIAS000207LK2', '2000-02-07', 4424733183, 'AVE BENITO JUAREZ 91, LA CRUZ , SAN JUAN DEL RIO , QRO , C.P.76800', 'Femenino', '2016-03-31', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('srasero@natgas.com', '$2a$12$C0hcKm4MQo0IMS5jpUnYfub2fMUfsI3gXLT0LCxAi6ucTTKR.P6mC', 'Silvia', 'Rasero', 6, 5, 32, 1, 'RAGS930106ET1', '1993-01-06', 4427365631, 'CONSTITUYENTES 77, CENTRO , QUERETARO , QRO , C.P.76000', 'Femenino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('test@smartcode.com', '$2a$12$LAFj4iYNmEvYKDI35HB3Yu3ooMpDSuxG/ZU64IGc605dW4RxCvh1S', 'Cesar', 'Jimenez', 0, 0, 74, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 05:45:57', '2022-04-12 01:12:57'),
('test2@smartcode.com', '$2a$12$EmAF/uyG/bw7ZbQ.d0bDUuaemoFlaikbCi7HzFPSqm0Xj6.wREsaK', 'Cesar', 'Jimenez', 0, 0, 75, 0, '', '0000-00-00', 0, '', '', '0000-00-00', '2022-04-12 06:11:32', '2022-04-12 01:12:57'),
('tmas@natgas.com', '$2a$12$yR5afva9ijEDGI2/KAfjhOv3cpXj9EwmDq/tLSzoDCdpsgmgtXNPO', 'Toni', 'Mas', 8, 5, 40, 1, 'MAFT0011032J6', '2000-11-03', 4427980103, '5 DE FEBRERO 1303 8, FELIPE CARRILLO PUERTO , QUERETARO , QRO , C.P.76138', 'Masculino', '2016-04-26', '2022-03-27 16:49:40', '2022-04-12 01:12:57'),
('xbenitez@natgas.com', '$2a$12$TBa87lxoyL0DC8gQ.C3OPOI9GUHnwRtpo/jTQ41XRXXcnBFKGmala', 'Xavier', 'Benitez', 6, 5, 28, 1, 'BEJX930413DV2', '1993-04-13', 4422574837, 'CALLE HIDALGO 206, CENTRO , QUERETARO , QRO , C.P.76000', 'Masculino', '2011-12-21', '2022-03-27 16:49:40', '2022-04-12 01:12:57');

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
(45, 'jbelmonte@natgas.com', 1, 'Analista', '2004-06-19', '2004-06-21 05:00:00', '2022-04-14 10:43:25'),
(46, 'mbajona@natgas.com', 2, 'Analista', '2005-06-19', '2005-06-21 05:00:00', NULL),
(47, 'jaguilar@natgas.com', 3, 'Especialista', '2006-06-19', '2006-06-21 05:00:00', NULL),
(48, 'mjbarriga@natgas.com', 4, 'Coordinacion', '2007-06-19', '2007-06-21 05:00:00', NULL),
(49, 'ravila@natgas.com', 5, 'Gerencia', '2008-06-19', '2008-06-21 05:00:00', NULL),
(50, 'jbiosca@natgas.com', 6, 'Direccion', '2009-06-19', '2009-06-21 05:00:00', NULL);

INSERT INTO `rangovacaciones` (`idRangoVacaciones`, `maximum`, `minimum`, `days`, `created_at`, `updated_at`) VALUES
(1, 2, 0, 13, '2022-03-27 16:49:40', '2022-04-23 21:19:45'),
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
(18, 19, 17, 8, '2022-03-27 16:49:40', '2022-03-27 10:49:40');

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

INSERT INTO `reporte` (`idReporte`, `name`, `created_at`, `updated_at`) VALUES
(1, 'NPS', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 'PorcentajeMujeres', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 'PorcentajeHombres', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 'Reducci??nCO2', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 'Ventas', '2022-04-08 17:33:32', '2022-04-08 12:33:32'),
(6, 'Prueba', '2022-04-18 17:32:00', '2022-04-18 17:32:00');

INSERT INTO `vacaciones` (`idVacaciones`, `verifiedleader`, `startdate`, `enddate`, `status`, `substitute`, `email`, `created_at`, `updated_at`) VALUES
(1, 1, '2004-01-21', '2004-01-21', 1, 'ESTEFANIA AROCAS PASADAS', 'earocas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(2, 1, '2005-01-21', '2007-01-21', 1, 'QUERALT VISO GILABERT', 'qviso@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(3, 1, '2006-01-21', '2010-01-21', 1, 'JOAN AYALA FERRERAS', 'jayala@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(4, 0, '2007-01-21', '2011-01-21', 0, 'JOAN BAEZ TEJADO', 'jbaez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(5, 0, '2008-01-21', '2013-01-21', 0, 'MARC BASTARDES SOTO', 'mbastardes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(6, 0, '2009-01-21', '2012-01-21', 0, 'JOSEP ANGUERA VILAFRANCA', 'janguera@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(7, 0, '2010-01-21', '2012-01-21', 0, 'ESTHER PASCUAL ALOY', 'epascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(8, 0, '2011-01-21', '2013-01-21', 0, 'LAURA VALL??S GIRVENT', 'lvalles@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(9, 0, '2012-01-21', '2018-01-21', 0, 'RAQUEL RAYA GARCIA', 'rraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(10, 0, '2013-01-21', '2015-01-21', 0, 'JOAN ANDREU CRUZ', 'jandreu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(11, 0, '2014-01-21', '2003-05-21', 0, 'MARIA ISABEL BARALD??S COMAS', 'mbaraldes@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(12, 1, '2015-01-21', '2003-05-21', 1, 'ADRI?? BERENGUERAS CULLER??S', 'aberengueras@natgas.com', '2022-03-27 16:49:40', '2022-03-28 18:46:59'),
(13, 0, '2016-01-21', '2007-05-21', 0, 'GERARD L??PEZ DE PABLO GARCIA UCEDA', 'glopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(14, 0, '2017-01-21', '2005-05-21', 0, 'ELIOT ARNAU MORENO', 'earnau@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(15, 1, '2018-01-21', '2006-05-21', 1, 'JORDI RAYA GAVILAN', 'jraya@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(16, 0, '2019-01-21', '2007-05-21', 0, 'LLU??S ZAMBUDIO FIGULS', 'lzambudio@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(17, 1, '2020-01-21', '2010-05-21', 1, 'LAURA BIDAULT CULLER??S', 'lbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(18, 0, '2021-01-21', '2010-05-21', 0, 'JORDI BIOSCA FONTANET', 'dzafra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(19, 1, '2022-01-21', '2010-05-21', 1, 'DOUNYA ZAFRA FIGULS', 'jaleu@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(20, 1, '2023-01-21', '2011-05-21', 1, 'JULIO ALEU ICART', 'abadia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(21, 1, '2011-05-21', '2012-05-21', 1, 'ANDREU BADIA TORN??', 'rmorales@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(22, 1, '2012-05-21', '2013-05-21', 1, 'RAMON MORALES GESE', 'djblanco@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(23, 1, '2013-05-21', '2014-05-21', 1, 'DAVID-JESE BLANCO FONTANET', 'aalvarez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(24, 1, '2014-05-21', '2017-05-21', 1, 'ARAN ALVAREZ FERN??NDEZ', 'ggarcia@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(25, 1, '2015-05-21', '2017-05-21', 1, 'GEMMA GARCIA ALMOGUERA', 'ilibori@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(26, 1, '2015-05-21', '2017-05-21', 1, 'IVAN LIBORI FIGUERAS', 'dbidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(27, 1, '2017-05-21', '2018-05-21', 1, 'DAVID BIDAULT PUEYO', 'xbenitez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(28, 1, '2018-05-21', '2019-05-21', 1, 'XAVIER BENITEZ JOSE', 'mpascual@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(29, 0, '2019-05-21', '2020-05-21', 0, 'MARIO PASCUAL FLORES', 'jayalas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(30, 0, '2020-05-21', '2021-05-21', 0, 'JESUS AYALA TORN??', 'glistan@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(31, 0, '2021-05-21', '2025-05-21', 0, 'GEMMA LISTAN FIGUERAS', 'srasero@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(32, 0, '2022-05-21', '2025-05-21', 0, 'SILVIA RASERO GAVILAN', 'aarnalot@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(33, 0, '2023-05-21', '2024-05-21', 0, 'ALBERT ARNALOT PUIG', 'mmoliner@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(34, 1, '2024-05-21', '2025-05-21', 1, 'MARIA MOLINER GARRIDO', 'bgalobart@natgas.com', '2022-03-27 16:49:40', '2022-04-19 15:30:32'),
(35, 0, '2025-05-21', '2026-05-21', 0, 'BERTA GALOBART GARCIA', 'blopez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(36, 0, '2026-05-21', '2026-05-21', 0, 'BERTA L??PEZ GARRIGASSAIT', 'msanchez@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(37, 0, '2027-05-21', '2028-05-21', 0, 'MIREIA S??NCHEZ G??MEZ', 'galavedra@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(38, 1, '2028-05-21', '2031-05-21', 1, 'GEMMA ALAVEDRA SUNY??', 'mialigue@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(39, 1, '2029-05-21', '2031-05-21', 1, 'MARIA ISABEL ALIGU?? BONVEH??', 'tmas@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(40, 1, '2030-05-21', '2031-05-21', 1, 'TONI MAS FRANCH', 'aaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(41, 1, '2031-05-21', '2001-06-21', 1, 'ALEJANDRO ALOY COMPTE', 'jmarti@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(42, 1, '2001-06-21', '2002-06-21', 1, 'JOAN MART?? ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(43, 1, '2002-06-21', '2003-06-21', 1, 'INGRID BIDAULT P??REZ', 'oaloy@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(44, 1, '2003-06-21', '2004-06-21', 1, 'OLIVER ALOY CODINACHS', 'saltmiras@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(45, 1, '2004-06-21', '2007-06-21', 0, 'SANDRA ALTIMIRAS ARMENTEROS', 'jbelmonte@natgas.com', '2022-03-27 16:49:40', '2022-04-01 00:32:53'),
(46, 1, '2005-06-21', '2008-06-21', 1, 'JORDI BELMONTE S??NCHEZ', 'mbajona@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(47, 1, '2006-06-21', '2008-06-21', 1, 'MARC BAJONA GARCIA', 'jaguilar@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(48, 1, '2007-06-21', '2007-06-21', 1, 'JORDINA AGUILAR RODRIGUEZ', 'mjbarriga@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(49, 1, '2008-06-21', '2009-06-21', 1, 'MARIA JOS?? BARRIGA SOTO', 'ravila@natgas.com', '2022-03-27 16:49:40', '2022-03-27 10:49:40'),
(50, 1, '2009-06-21', '2010-06-21', 1, 'RAQUEL AVILA MASJUAN', 'jbiosca@natgas.com', '2022-03-27 16:49:40', '2022-04-14 10:35:16'),
(51, 0, '2001-06-21', '2002-06-21', 0, 'JOAN MART?? ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:08:19', '2022-03-28 00:08:19'),
(52, 0, '2001-06-21', '2001-06-21', 0, 'JOAN MART?? ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:11:55', '2022-03-28 00:11:55'),
(53, 0, '2001-06-21', '2001-06-30', 0, 'JOAN MART?? ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:12:56', '2022-03-28 00:12:56'),
(54, 0, '2001-06-21', '2001-06-30', 0, 'JOAN MART?? ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:13:21', '2022-03-28 00:13:21'),
(55, 0, '2001-06-21', '2001-06-30', 0, 'JOAN MART?? ASENSIO VEGA', 'ibidault@natgas.com', '2022-03-28 06:13:48', '2022-03-28 00:13:48'),
(56, 1, '2022-03-27', '2022-03-28', 1, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:18:48', '2022-04-14 11:00:43'),
(57, 1, '2022-03-27', '2022-03-28', 1, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:18:58', '2022-04-14 10:57:38'),
(58, 1, '2022-03-27', '2022-03-28', 1, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:19:00', '2022-04-14 10:57:19'),
(59, 1, '2022-03-27', '2022-03-28', 1, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:19:00', '2022-04-14 10:51:48'),
(60, 1, '2022-03-27', '2022-03-28', 1, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:19:00', '2022-04-14 10:50:29'),
(61, 1, '2022-03-27', '2022-03-28', 1, 'Armandu Gutierrez', 'jbelmonte@natgas.com', '2022-03-29 01:20:28', '2022-04-14 10:47:48'),
(62, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 15:39:56', '2022-04-14 10:47:23'),
(63, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 15:43:58', '2022-04-14 10:46:31'),
(64, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:01:09', '2022-04-14 11:01:15'),
(65, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:05:09', '2022-04-14 11:05:16'),
(66, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:13:11', '2022-04-14 11:13:17'),
(67, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:15:01', '2022-04-14 11:15:06'),
(68, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:20:06', '2022-04-14 11:20:10'),
(69, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:22:53', '2022-04-14 11:23:06'),
(70, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:23:35', '2022-04-14 11:23:41'),
(71, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:24:39', '2022-04-14 11:24:48'),
(72, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:25:30', '2022-04-14 11:25:35'),
(73, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:25:50', '2022-04-14 11:25:55'),
(74, 1, '2022-03-20', '2022-03-23', 1, 'JOAN MART?? ASENSIO VEGA', 'jbelmonte@natgas.com', '2022-04-14 16:26:20', '2022-04-14 11:26:41'),
(75, 0, '2022-04-27', '2022-04-26', 0, 'Juan P??rez', 'jbelmonte@natgas.com', '2022-04-19 15:39:42', '2022-04-19 15:39:42');

CREATE VIEW "detallesdevacaciones" AS select "perfil"."email" AS "email","perfil"."name" AS "name","perfil"."lastname" AS "lastname","departamento"."name" AS "departamento","pertenece"."position" AS "position","vacaciones"."substitute" AS "substitute","vacaciones"."startdate" AS "startdate","vacaciones"."enddate" AS "enddate","vacaciones"."idVacaciones" AS "idVacaciones","vacaciones"."verifiedleader" AS "verifiedleader","vacaciones"."status" AS "status","vacaciones"."idVacaciones" AS "id" from ((("vacaciones" join "perfil") join "pertenece") join "departamento") where (("vacaciones"."email" = "perfil"."email") and ("perfil"."email" = "pertenece"."email") and ("pertenece"."idDepartamento" = "departamento"."idDepartamento"));
CREATE VIEW "detallesempleado" AS select "perfil"."email" AS "email","perfil"."name" AS "name","perfil"."lastname" AS "lastname","perfil"."vacations" AS "vacations","perfil"."ngBlocks" AS "ngBlocks","pertenece"."position" AS "position","departamento"."name" AS "departamento","pertenece"."date" AS "contrato","perfil"."verified" AS "verified","perfil"."number" AS "number","perfil"."rfc" AS "rfc","perfil"."birthdate" AS "birthdate","perfil"."cellphone" AS "cellphone","perfil"."address" AS "address","perfil"."gender" AS "gender" from (("perfil" join "pertenece") join "departamento") where (("perfil"."email" = "pertenece"."email") and ("pertenece"."idDepartamento" = "departamento"."idDepartamento"));
CREATE VIEW "detallesempleo" AS select "perfil"."email" AS "email","perfil"."name" AS "name","perfil"."lastname" AS "lastname","perfil"."rfc" AS "rfc","perfil"."cellphone" AS "cellphone","perfil"."vacations" AS "vacations","perfil"."birthdate" AS "birthdate","perfil"."ngBlocks" AS "ngBlocks","pertenece"."position" AS "position","departamento"."name" AS "departamento","pertenece"."date" AS "contrato","perfil"."verified" AS "verified","perfil"."number" AS "number" from (("perfil" join "pertenece") join "departamento") where (("perfil"."email" = "pertenece"."email") and ("pertenece"."idDepartamento" = "departamento"."idDepartamento"));
CREATE VIEW "detallesnatgasblock" AS select "perfil"."email" AS "email","perfil"."name" AS "name","perfil"."lastname" AS "lastname","departamento"."name" AS "departamento","pertenece"."position" AS "position","natgasblock"."date" AS "date","natgasblock"."status" AS "status","natgasblock"."period" AS "period","natgasblock"."idNatgasblock" AS "id" from ((("natgasblock" join "perfil") join "pertenece") join "departamento") where (("natgasblock"."email" = "perfil"."email") and ("perfil"."email" = "pertenece"."email") and ("pertenece"."idDepartamento" = "departamento"."idDepartamento"));


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;