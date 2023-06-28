-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: ding_dong
-- ------------------------------------------------------
DROP TABLE IF EXISTS `mobile`;

CREATE TABLE
  `mobile` (
    `id` int NOT NULL AUTO_INCREMENT,
    `modele` varchar(100) NOT NULL,
    `name` varchar(100) NOT NULL,
    `image` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `mobile`
VALUES
  (
    1,
    "P30 PRO",
    "Huawei",
    "https://www.tradeinn.com/f/13794/137942792/huawei-smartphone-p30-pro-new-edition-8gb-256gb-6.47.jpg"
  ),
  (
    2,
    "Galaxy J4+",
    "Samsung",
    "https://medias3-1.ubaldi.com/visuels/2486568/GALAXYJ4PLUSGOLD-b2ee66150b-43-nw.jpg"
  ),
  (
    3,
    "Xperia 1 IV",
    "Sony",
    "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/38/3823870/Smartfon-SONY-Xperia-1-IV-120Hz-Czarny-front-tyl.jpg"
  );

DROP TABLE IF EXISTS `user`;

CREATE TABLE
  `user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `mail` varchar(100) NOT NULL,
    `password` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `user`
VALUES
  (
    1,
    "Marion",
    "marion@gmail.com",
    "$argon2id$v=19$m=19456,t=2,p=1$8/W1b24lYgs5kMlqtddC6w$tm8COo9TxGHiVN+KbdLUxFkjQ+6J2H+D/jgrZkUZn34"
  ),
  (
    2,
    "Quentin",
    "quentin@gmail.com",
    "$argon2id$v=19$m=19456,t=2,p=1$8/W1b24lYgs5kMlqtddC6w$tm8COo9TxGHiVN+KbdLUxFkjQ+6J2H+D/jgrZkUZn34"
  ),
  (
    3,
    "Angélique",
    "angelique@gmail.com",
    "$argon2id$v=19$m=19456,t=2,p=1$8/W1b24lYgs5kMlqtddC6w$tm8COo9TxGHiVN+KbdLUxFkjQ+6J2H+D/jgrZkUZn34"
  );

UNLOCK TABLES;