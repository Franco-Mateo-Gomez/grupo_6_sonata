-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2023 a las 04:18:18
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sonata`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '/images/products/default.jpg',
  `totalLength` bigint(20),
  `dateUpload` date NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `coin` varchar(5) NOT NULL,
  `genereIdFk` int(11) DEFAULT NULL,
  `composerIdFk` int(11) NOT NULL,
  `offer` decimal(10,0) NOT NULL DEFAULT 0,
  `offerPercent` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `albums`
--

INSERT INTO `albums` (`id`, `name`, `description`, `image`, `totalLength`, `dateUpload`, `price`, `coin`, `genereIdFk`, `composerIdFk`, `offer`, `offerPercent`) VALUES
(24, 'Skrillex Remakes', 'Lorem Lorem ', '/images/products/albums/idProduct24.png', 0, '0000-00-00', 350, 'ARS', 4, 22, 298, 15),
(26, 'Album 2', 'Modo Mozart', '/images/products/albums/default.jpg', 0, '2023-06-02', 5, 'USD', 3, 22, 0, 0),
(27, 'Album3', 'Lorem', '/images/products/albums/idProduct27.png', 0, '2023-06-25', 300, 'ARS', 2, 22, 234, 22),
(28, 'Dream', 'Arte', '/images/products/albums/idProduct28.jpg', 0, '2023-06-26', 600, 'ARS', 3, 27, 0, 0),
(29, 'Life', 'Este álbum cuenta con una cantidad total de 5 canciones, ideal para la concentración.', '/images/products/albums/idProduct29.jpeg', 0, '2023-06-26', 550, 'ARS', 3, 27, 0, 0),
(30, 'Dancing in the Rain', 'Vivir el momento y disfrutar de la vida a pesar de las dificultades', '/images/products/albums/idProduct30.jpg', 0, '2023-06-26', 750, 'ARS', 2, 29, 0, 0),
(31, 'Whispers of the Stars', 'Captura la sensación de estar perdido en un vasto universo, donde las voces susurrantes de las estrellas guían el camino', '/images/products/albums/idProduct31.jpg', 0, '2023-06-26', 405, 'ARS', 2, 29, 0, 0),
(32, 'Retrograde Revolution', 'Un álbum que rinde homenaje al sonido clásico del rock, con influencias de las décadas pasadas, presentando melodías pegadizas, solos de guitarra virtuosos y una actitud desenfadada.', '/images/products/albums/idProduct32.jpg', 0, '2023-06-26', 300, 'ARS', 1, 31, 0, 0),
(33, 'Sons of Revolution', 'Un álbum políticamente cargado y lleno de furia, con letras que abordan temas sociales y críticas al sistema, respaldado por poderosos riffs de guitarra y una percusión contundente.', '/images/products/albums/idProduct33.jpg', 0, '2023-06-26', 420, 'ARS', 1, 31, 0, 0),
(34, 'Echoes of Thunder', 'Un álbum épico y cargado de emociones que presenta una combinación de baladas introspectivas y himnos explosivos, con letras que exploran la lucha interna y la búsqueda de redención.', '/images/products/albums/idProduct34.png', 0, '2023-06-26', 400, 'ARS', 1, 31, 0, 0),
(35, 'Synthetic Visions', 'Un álbum que fusiona elementos de la electrónica y la música ambiental, creando paisajes sonoros futuristas y etéreos, con capas de sintetizadores y efectos espaciales.', '/images/products/albums/idProduct35.jpg', 0, '2023-06-26', 309, 'ARS', 4, 30, 0, 0),
(36, 'Binary Dreams', 'Un álbum de electrónica melódica y atmosférica que transporta al oyente a un mundo de sonidos digitales y sueños electrónicos, combinando ritmos pulsantes con arreglos sutiles.', '/images/products/albums/idProduct36.png', 0, '2023-06-26', 540, 'ARS', 4, 30, 0, 0);
INSERT INTO `albums` (`id`, `name`, `description`, `image`, `totalLength`, `dateUpload`, `price`, `coin`, `genereIdFk`, `composerIdFk`, `offer`, `offerPercent`) VALUES

(37, 'abcde', '-------------', '/images/products/albums/idProduct27.jpg', 0, '2023-06-26', 5000, 'ARS', 4, 29, 0, 0),
(38, 'Puchi', '-----------------------------------------------------', '/images/products/albums/idProduct288.jpg', 0, '2023-06-26', 4, 'USD', 3, 29, 0, 0),
(39, 'astrological music', 'feel the good music in your veins like the gravity of the moon ❤️\r\n', '/images/products/albums/idProduct29.jpg', 0, '2023-06-26', 8000, 'ARS', 4, 29, 0, 0),
(40, 'healerBeat', 'music that heals your feelings ', '/images/products/albums/idProduct300.jpg', 0, '2023-06-26', 15, 'EUR', 5, 29, 8, 45),
(41, 'mystical', 'do you like olimpic and great mystical music?, so this is for you, just sit and relax with the best pop music\r\n', '/images/products/albums/idProduct311.jpg', 0, '2023-06-26', 5, 'USD', 2, 29, 0, 0),
(42, 'soft orchestra', 'is there any place that you dont want to listen this music? if you are this kind of people, try this!!', '/images/products/albums/idProduct322.jpg', 0, '2023-06-26', 7000, 'ARS', 3, 29, 0, 0),
(43, 'Ludwig van Remixoven', 'this guy... oh my god, this is the best list you can find about this man. try the best and most famous remix of Ludwig van Beethoven, the king of the clasic music!', '/images/products/albums/idProduct333.jpg', 0, '2023-06-26', 3, 'USD', 3, 29, 0, 0),
(44, 'roger rocker', 'nirvana, guns n´roses, ACDC, every band you know, are here in this list with the best remixes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', '/images/products/albums/idProduct34.jpg', 0, '2023-06-26', 6600, 'ARS', 1, 29, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Rock'),
(2, 'Pop'),
(3, 'Classic'),
(4, 'Electronic'),
(5, 'Hip-Hop'),
(6, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `idUser_Fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordersalbums`
--

CREATE TABLE `ordersalbums` (
  `id` int(11) NOT NULL,
  `idAlbum_Fk` int(11) NOT NULL,
  `idOrder_Fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `length` bigint(20) NOT NULL,
  `idAlbum_Fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '/images/users/default.jpg',
  `isComposer` tinyint(4) NOT NULL DEFAULT 0,
  `description` varchar(150) NOT NULL DEFAULT 'Nuevo artista'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `fullName`, `userName`, `email`, `password`, `image`, `isComposer`, `description`) VALUES
(21, 'Matuu', 'Matuu', 'matu@gmail.com', '$2a$10$./tXa/iHPvcpcF/7GEZ1G.p925.HGhjC9mbahFvw/WAjCMI5Jz7Y2', '/images/users/idUser26.jpg', 0, 'Nuevo artista'),
(22, 'Matuu Gomez DJ', 'MatuuDJ', 'matuDJ@gmail.com', '$2a$10$PxJSYT.g5doBEmjWIenUUOY4LdZ3oAvUx2wnteQs8877ywnsW8Vom', '/images/users/idUser25.jpeg', 1, 'Skrillex argentino, dedicado al Dubstep desde el 2011'),
(27, 'Picasso', 'Picasso', 'picasso@gmail.com', '$2a$10$sX1e2ZRVtTOwuJ/hph668.M5sr1zvDiJu7mK9HJSnQd3SPEHcWb9.', '/images/users/idUser28.jpg', 1, 'Me inspiro en las obras de Picasso'),
(28, 'Alicia González', 'melodymaker89', 'melodymaker89@gmail.com', '$2a$10$ahIixbkGlylrMoSqahsqUOWo.qEpMqU.p0Bn1Z6ivB7OskBiE/lfu', '/images/users/idUser28.jpg', 1, 'Nuevo artista'),
(29, 'Carlos Rodríguez', 'rhythmking123', 'rhythmking123@yahoo.com', '$2a$10$cONqRGEwS40en18xavbP4uI/ZGnMzHRFTm6FuNl5uaefxVlLrD11q', '/images/users/idUser29.jpg', 1, 'Nuevo artista'),
(30, 'Vanessa Sánchez', 'groovegirl22', 'groovegirl22@hotmail.com', '$2a$10$l9Kn8jPq7a.QDOJSvI83K.vbHe/Bq3aQBzoD12P56o7D1QjjCoLf.', '/images/users/idUser30.jpg', 1, 'Nuevo artista'),
(31, 'Emily Davis', 'guitarmaster456', 'guitarmaster456@gmail.com', '$2a$10$PuM.P784Dk/C7CJevHBdO.nQWWTivgzaAsji.du1aQGZj7lgg7xtu', '/images/users/idUser31.jpg', 1, 'Nuevo artista');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genereIdFk` (`genereIdFk`),
  ADD KEY `composerIdFk` (`composerIdFk`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser_Fk` (`idUser_Fk`);

--
-- Indices de la tabla `ordersalbums`
--
ALTER TABLE `ordersalbums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idOrder_Fk` (`idOrder_Fk`),
  ADD KEY `idAlbum_Fk` (`idAlbum_Fk`);

--
-- Indices de la tabla `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAlbum_Fk` (`idAlbum_Fk`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ordersalbums`
--
ALTER TABLE `ordersalbums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_3` FOREIGN KEY (`genereIdFk`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `albums_ibfk_4` FOREIGN KEY (`composerIdFk`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`idUser_Fk`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `ordersalbums`
--
ALTER TABLE `ordersalbums`
  ADD CONSTRAINT `ordersalbums_ibfk_1` FOREIGN KEY (`idOrder_Fk`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `ordersalbums_ibfk_2` FOREIGN KEY (`idAlbum_Fk`) REFERENCES `albums` (`id`);

--
-- Filtros para la tabla `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`idAlbum_Fk`) REFERENCES `albums` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
