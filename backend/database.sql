-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ding_dong
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `mobile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modele` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobile`
--

LOCK TABLES `mobile` WRITE;
/*!40000 ALTER TABLE `mobile` DISABLE KEYS */;
INSERT INTO `mobile` VALUES (1,'P30 PRO','Huawei','https://www.tradeinn.com/f/13794/137942792/huawei-smartphone-p30-pro-new-edition-8gb-256gb-6.47.jpg'),(2,'Galaxy J4+','Samsung','https://medias3-1.ubaldi.com/visuels/2486568/GALAXYJ4PLUSGOLD-b2ee66150b-43-nw.jpg'),(3,'Xperia 1 IV','Sony','https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/38/3823870/Smartfon-SONY-Xperia-1-IV-120Hz-Czarny-front-tyl.jpg'),(4,'iPhone 12','APPLE','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/412303_8f63f95c-a5b1-4df4-af75-36c94054540d.jpg'),(6,'A 10','SAMSUNG','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/302126_03af96ee-2be9-4322-9828-f710307b4d57.jpg'),(7,'S 21','SAMSUNG','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/445900_47030d85-78b9-40b6-8859-487108723a9e.jpg'),(8,'P40 Pro','HUAWEI','https://img.gkbcdn.com/s3/p/2020-03-28/HUAWEI-P40-Pro-6-58--8GB-512GB-5G-Smartphone-Gold-900427-.jpg'),(9,'A16s','OPPO','https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fterminaux%2F636x900-vue-1-face-213156_61f8df5230ee0236ac664cae_611ef0858c9c717f4ff5ea0b.png?format=504x504&saveas=webp&saveasquality=80'),(10,'11T','XIAOMI','https://www.bouyguestelecom.fr/media/catalog/product//x/i/xiaomi_11t_5g_gris_front.png'),(11,'S440','TELEFUNKEN','https://static.fnac-static.com/multimedia/Images/5F/95/1E/10/16902495-1505-1540-1/tsp20220602005808/Telephone-Portable-senior-Telefunken-S440-a-clapet-rouge-Groes-Touches.jpg#9b40c8fb-a32f-49f0-ac5c-97d8c85e1bfe'),(12,'iPhone 12','APPLE','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/None_bb1e34e0-4112-46f4-b7e0-7394beba3f40.jpg');
/*!40000 ALTER TABLE `mobile` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Marion','marion@gmail.com','$argon2id$v=19$m=19456,t=2,p=1$8/W1b24lYgs5kMlqtddC6w$tm8COo9TxGHiVN+KbdLUxFkjQ+6J2H+D/jgrZkUZn34'),(2,'Quentin','quentin@gmail.com','$argon2id$v=19$m=19456,t=2,p=1$8/W1b24lYgs5kMlqtddC6w$tm8COo9TxGHiVN+KbdLUxFkjQ+6J2H+D/jgrZkUZn34'),(3,'Angélique','angelique@gmail.com','$argon2id$v=19$m=19456,t=2,p=1$8/W1b24lYgs5kMlqtddC6w$tm8COo9TxGHiVN+KbdLUxFkjQ+6J2H+D/jgrZkUZn34');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-29 23:54:42
