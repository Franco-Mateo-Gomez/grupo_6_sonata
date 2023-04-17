# Insertamos usuarios a la tabla Users, la contraseña de los mismos es: 1234
INSERT INTO `sonata`.`Users` (`fullName`,`userName`,`email`,`password`,`image`) VALUES 
("Profesores Digital House", 
"ProfesDH", 
"profesDigitalHouse@gmail.com",
"$2a$10$X0oMG87Jar4T/Zp.x.domeXoW.YNrnp4yIMiY94KFPGo.FpQBfq3i", 
"/images/users/default.png"),
("Guido Rafael Mamani", 
"GuidoRMA", 
"guidorafaelmamani100@gmail.com", 
"$2a$10$X0oMG87Jar4T/Zp.x.domeXoW.YNrnp4yIMiY94KFPGo.FpQBfq3i", 
"/images/users/default.png"),
("Franco Mateo Gomez", 
"FrancoMG", 
"matufranone@gmail.com", 
"$2a$10$X0oMG87Jar4T/Zp.x.domeXoW.YNrnp4yIMiY94KFPGo.FpQBfq3i", 
"/images/users/default.png"),
("Abril Martinez", 
"AbrilMC", 
"abrilmartinezcata@gmail.com", 
"$2a$10$X0oMG87Jar4T/Zp.x.domeXoW.YNrnp4yIMiY94KFPGo.FpQBfq3i", 
"/images/users/default.png");



INSERT INTO `sonata`.`Orders` (`idUser_Fk`) VALUES (1);

# Insertamos "algunos" ejemplos de generos para los albumes
INSERT INTO `sonata`.`Genres` (`name`) VALUES('Rock'),('Jazz'),('Metal'),('Alternative & Punk'),('Rock And Roll'),('Blues'),('Latin'),('Reggae'),('Pop'),('Soundtrack'),('Bossa Nova'),
('Easy Listening'),('Heavy Metal'),('R&B/Soul'),('Electronica/Dance'),('World'),('Hip Hop/Rap'),('Science Fiction'),('TV Shows'),
('Sci Fi & Fantasy'),('Drama'),('Comedy'),('Alternative'),('Classical'),('Opera'),('Cumbia');

# Insertamos algunos compositores
INSERT INTO `sonata`.`Composers` (`name`, `description`)
VALUES ('Adele', 'Compositora y cantante británica conocida por su voz poderosa y emotiva, y por su estilo de música pop y soul.'),
       ('Ed Sheeran', 'Compositor y cantante británico conocido por su habilidad para mezclar géneros como el pop, el folk y el hip hop en su música.'),
       ('Justin Bieber', 'Compositor y cantante canadiense conocido por su estilo de música pop y R&B, y por su impacto en la cultura pop en su juventud.'),
       ('Bruce Springsteen', 'Compositor y cantante estadounidense conocido como "El Jefe", famoso por su estilo de música rock, folk y americana, y por sus letras introspectivas y poéticas.'),
       ('Queen', 'Banda de rock británica formada en los años 70, conocida por su innovador sonido rock y su icónico vocalista Freddie Mercury.'),
       ('The Beatles', 'Banda de rock británica considerada una de las más influyentes en la historia de la música, conocida por su estilo musical diverso y su creatividad en la composición.'),
       ('Ludwig van Beethoven', 'Compositor alemán considerado uno de los más grandes de la música clásica, conocido por su obra maestra "Sinfonía No. 9" y su innovación en la música clásica.'),
       ('Johann Sebastian Bach', 'Compositor y músico alemán conocido por su profundo legado en la música clásica barroca, con obras maestras como "Misa en si menor" y "El clave bien temperado".'),
       ('Wolfgang Amadeus Mozart', 'Compositor austriaco considerado uno de los más grandes de la música clásica, conocido por su prodigiosa habilidad en la composición y su amplio repertorio de obras clásicas.'),
       ('Kendrick Lamar', 'Compositor y rapero estadounidense conocido por su estilo de música hip hop y su enfoque lírico profundo y reflexivo, que aborda temas sociales y políticos.'),
       ('Jay-Z', 'Compositor, rapero y productor musical estadounidense conocido como uno de los más exitosos en la historia del hip hop, famoso por su habilidad lírica y su influencia en la cultura hip hop.'),
       ('Eminem', 'Compositor, rapero y productor musical estadounidense conocido por su estilo de música rap y su habilidad técnica en la composición lírica, considerado uno de los mejores raperos de la historia.');
       

#Insertar algunos albumes para los compositores
INSERT INTO `sonata`.`Albums` (`name`, `description`, `image`, `totalLength`, `rate`, `dateUpload`, `idGenre_Fk`, `idComposer_Fk`)
VALUES 
('21', 'Segundo álbum de estudio de Adele, lanzado en 2011. Incluye los exitosos sencillos "Rolling in the Deep" y "Someone Like You".', '/images/products/default.jpg', 47, 5, '2011-02-22', 1, 1),
('x', 'Tercer álbum de estudio de Ed Sheeran, lanzado en 2014. Incluye los sencillos "Sing", "Don\'t" y "Photograph".', '/images/products/default.jpg', 50, 4, '2014-06-20', 2, 2),
('Purpose', 'Cuarto álbum de estudio de Justin Bieber, lanzado en 2015. Incluye los sencillos "What Do You Mean?", "Sorry" y "Love Yourself".', '/images/products/default.jpg', 55, 4, '2015-11-13', 1, 3),
('Born in the U.S.A.', 'Séptimo álbum de estudio de Bruce Springsteen, lanzado en 1984. Incluye los exitosos sencillos "Dancing in the Dark", "Born in the U.S.A." y "I\'m on Fire".', '/images/products/default.jpg', 46, 5, '1984-06-04', 3, 4),
('Greatest Hits', 'Álbum recopilatorio de Queen, lanzado en 1981. Incluye algunos de los mayores éxitos de la banda, como "Bohemian Rhapsody", "Don\'t Stop Me Now" y "We Will Rock You".', '/images/products/default.jpg', 58, 5, '1981-10-26', 4, 5),
('Abbey Road', 'Undécimo álbum de estudio de The Beatles, lanzado en 1969. Incluye canciones icónicas como "Come Together", "Something" y "Here Comes the Sun".', '/images/products/default.jpg', 47, 5, '1969-09-26', 4, 6);

#Insertar algunos canciones para los albumes
INSERT INTO `sonata`.`Songs` (`name`, `length`, `idAlbum_Fk`)
VALUES 
('Rolling in the Deep', 228, 1),
('Someone Like You', 285, 1),
('Sing', 206, 2),
('Don\'t', 240, 2),
('Photograph', 258, 2),
('What Do You Mean?', 207, 3),
('Sorry', 200, 3),
('Love Yourself', 234, 3),
('Dancing in the Dark', 252, 4),
('Born in the U.S.A.', 292, 4),
('I\'m on Fire', 140, 4),
('Bohemian Rhapsody', 354, 5),
('Don\'t Stop Me Now', 211, 5),
('We Will Rock You', 122, 5),
('Come Together', 259, 6),
('Something', 182, 6),
('Here Comes the Sun', 185, 6);

INSERT INTO `sonata`.`OrdersAlbums` (`idAlbum_Fk`, `idOrder_Fk`) VALUES (1,1);
