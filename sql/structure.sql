CREATE DATABASE `SONATA`;
USE `SONATA`;

CREATE TABLE `sonata`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL DEFAULT '/images/users/default.jpg',
  PRIMARY KEY (`id`));
  
CREATE TABLE `sonata`.`Orders`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `idUser_Fk` INT NOT NULL,
  FOREIGN KEY (idUser_Fk) REFERENCES Users(id),
PRIMARY KEY (`id`));

-- Tabla intermedia OrdersAlbums
CREATE TABLE `sonata`.`OrdersAlbums`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `idAlbum_Fk` INT NOT NULL,
    `idOrder_Fk` INT NOT NULL,
PRIMARY KEY (`id`));


CREATE TABLE `sonata`.`Albums`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `image` VARCHAR(255) NOT NULL DEFAULT '/images/products/default.jpg',
    `totalLength` BIGINT NOT NULL,
    `rate` TINYINT NOT NULL,
    `dateUpload` DATE NOT NULL,
    `idGenre_Fk` INT NOT NULL,
    `idComposer_Fk` INT NOT NULL,
PRIMARY KEY (`id`));

CREATE TABLE `sonata`.`Genres`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`));

CREATE TABLE `sonata`.`Songs`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `length` BIGINT NOT NULL,
    `idAlbum_Fk` INT NOT NULL,
    FOREIGN KEY (`idAlbum_Fk`) REFERENCES `Albums`(`id`),
PRIMARY KEY (`id`));

CREATE TABLE `sonata`.`Composers`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NOT NULL DEFAULT 'No posee una descripción',
PRIMARY KEY (`id`));

ALTER TABLE OrdersAlbums MODIFY COLUMN idOrder_Fk INT NOT NULL, 
ADD FOREIGN KEY (idOrder_Fk) REFERENCES Orders(id);

ALTER TABLE OrdersAlbums MODIFY COLUMN idAlbum_Fk INT NOT NULL, 
ADD FOREIGN KEY (idAlbum_Fk) REFERENCES Albums(id);

ALTER TABLE Albums MODIFY COLUMN idGenre_Fk INT NOT NULL UNIQUE, 
ADD FOREIGN KEY (idGenre_Fk) REFERENCES Genres(id);

ALTER TABLE Albums MODIFY COLUMN idComposer_Fk INT NOT NULL, 
ADD FOREIGN KEY (idComposer_Fk) REFERENCES Composers(id);