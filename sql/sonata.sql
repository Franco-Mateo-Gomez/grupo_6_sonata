-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2023 a las 04:09:51
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
  `totalLength` bigint(20) NOT NULL,
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
(26, 'Album 2', 'Modo Mozart', '/images/products/albums/default.jpg', 0, '2023-06-02', 5, 'USD', 3, 22, 0, 0);

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
(22, 'Matuu Gomez DJ', 'MatuuDJ', 'matuDJ@gmail.com', '$2a$10$PxJSYT.g5doBEmjWIenUUOY4LdZ3oAvUx2wnteQs8877ywnsW8Vom', '/images/users/idUser25.jpeg', 1, 'Skrillex argentino, dedicado al Dubstep desde el 2011');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
