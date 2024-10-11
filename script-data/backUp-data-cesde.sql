-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: cesde_db
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (4,'Alejandro Quintero','alejandro@gmail.com','10203045'),(5,'Julio Méndez','julio@gmail.com','12345678'),(6,'Ernesto Perez','ernesto@gmail.com','12760987'),(7,'John Doe','john@gmail.com','1098766544'),(8,'Jane Doe','jane@gmail.com','12348765547');
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES (20,'Matemáticas','Curso de Matemáticas Básicas',30,520000,'2024-10-28',4),(21,'Lógica de Programación','Introducción a la programación',3,40000,'2024-10-28',5),(22,'Estadística','Estadística básica',7,50000,'2024-10-31',6),(23,'Física 1','Cinemática ',8,600000,'2024-10-29',7),(24,'Matemáticas Discretas','Matemáticas Discretas',10,70000,'2024-10-23',8),(25,'POO','Programación Orientada a Objectos',20,400000,'2024-10-24',7),(26,'Diseño de Bases de datos','Creación y modelado de datos',30,50000,'2024-10-23',7),(27,'Sociales','Sociales y gobierno',10,30000,'2024-10-22',5),(28,'Optimización','Optimización de código',34,450000,'2024-10-23',7),(30,'Ingles 2','Ingles intermedio',10,20000,'2024-10-29',7),(31,'Ingles 3','Inglés Avanzado',10,200000,'2024-10-22',7);
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-11  9:50:53
