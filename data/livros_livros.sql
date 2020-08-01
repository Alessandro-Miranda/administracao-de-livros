-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: livros
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livros` (
  `nome` varchar(200) NOT NULL,
  `autor` varchar(45) NOT NULL,
  `quant_paginas` int NOT NULL,
  `preco` float NOT NULL,
  `flag` tinyint NOT NULL DEFAULT '1',
  `data_inclusao_edicao` date DEFAULT NULL,
  PRIMARY KEY (`nome`),
  UNIQUE KEY `nome_UNIQUE` (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES ('A cinco passos de você','Rachael Lippincott',288,39.9,0,'2020-07-31'),('A Espiã','Paulo Coelho',184,34.9,0,'2020-07-31'),('A garota do lago','Charlie Donlea',296,14.9,0,'2020-07-31'),('A garota no gelo','Robert Bryndza',336,44.9,0,'2020-07-31'),('A mulher na janela','A. J. Finn',352,44.9,1,'2020-07-30'),('A paciente silenciosa','Alex Michaelides',350,49.9,1,'2020-07-30'),('Cinquenta Tons de Cinza','E. L. James',480,44.9,1,'2020-07-25'),('Deixada para trás','Charlie Donlea',1,24.9,1,'2020-07-30'),('F*ck love - Louco amor','Tarryn Fisher',288,12.9,0,'2020-07-31'),('Fangirl - Slim','Rainbow Rowell',320,14.9,1,'2020-07-30'),('Manuscrito Encontrado Em Accra','Paulo Coelho',176,3.9,1,'2020-07-25'),('Me poupe! - 10 passos para nunca mais faltar dinheiro no seu bolso','Nathalia Arcuri',176,36.96,0,'2020-07-31'),('Não confie em ninguém','Charlie Donlea',352,24.9,1,'2020-07-30'),('O homem de giz','C. J. Tudor',272,49.9,1,'2020-07-30'),('O Livro Dos Baltimore','Joël Dicker',416,49.9,1,'2020-07-25'),('O que aconteceu com annie','C. J. Tudor',288,54.9,1,'2020-07-30'),('Seja Foda','Caio Carneiro',192,44.9,1,'2020-07-25'),('Uma casa no fundo de um lago','Josh Malerman',160,19.9,1,'2020-07-30'),('Uma mulher na escuridão','Charlie Donlea',304,19.9,1,'2020-07-30'),('Uma Prova de Amor - A Princípio, Foi Uma Mudança Sutil','Emily Giffin',432,16.9,0,'2020-07-25');
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-31 12:10:54
