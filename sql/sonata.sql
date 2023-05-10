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
  `composerIdFk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `albums`
--

INSERT INTO `albums` (`id`, `name`, `description`, `image`, `totalLength`, `dateUpload`, `price`, `coin`, `genereIdFk`, `composerIdFk`) VALUES
(14, 'Alb1', '123123123', '/images/products/albums/default.jpg', 0, '0000-00-00', 15, 'ARS', NULL, NULL),
(15, 'Álbum 1', 'Lorem ipsum qweqweufewifwmomoiqwmiqrmw', '/images/products/albums/default.jpg', 0, '0000-00-00', 20, 'ARS', NULL, NULL),
(16, 'A2', 'qqqqqq', '/images/products/albums/default.jpg', 0, '0000-00-00', 1, 'ARS', NULL, NULL),
(17, 'A3', 'qwertyqwertyqwertyqwertyqwerty', '/images/products/albums/default.jpg', 0, '0000-00-00', 15, 'ARS', NULL, 5),
(18, 'A4', '2qwerty3qwerty4qwerty5', '/images/products/albums/default.jpg', 0, '0000-00-00', 20, 'ARS', 1, 5),
(19, 'A5', 'Album de prueba N°5', '/images/products/albums/default.jpg', 0, '0000-00-00', 30, 'ARS', 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `composers`
--

CREATE TABLE `composers` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT 'No posee una descripción',
  `email` varchar(150) NOT NULL,
  `fullName` varchar(150) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '/images/users/default.jpg',
  `password` varchar(255) NOT NULL,
  `userName` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `composers`
--

INSERT INTO `composers` (`id`, `description`, `email`, `fullName`, `image`, `password`, `userName`) VALUES
(1, 'No posee una descripción', 'Fadmin@gmail.com', 'Admin', '/images/users/idUser20.jpg', '$2a$10$LonKEKnFh0bq40kcUq1uM.226f4b2i0BYYbUe70QnGkxqag0Cee.S', 'admin'),
(2, 'No posee una descripción', 'hola12@gmail.com', 'Hola12', '/images/users/default.png', '$2a$10$02lTWsqHZX6oSYnUXorF3./1kjhPduXelDX1P1dovcTbaUPRJJlQ2', 'Hola12'),
(3, 'No posee una descripción', 'h3@gmail.com', 'H3', '/images/users/idUser6.jpg', '$2a$10$00n5n5VjVI9Ga.JH0qsaWefliTn.ml8XA1m/RjpQiiq22AmZX5gpe', 'H3'),
(4, 'No posee una descripción', 'h5@gmail.com', 'H5', '/images/users/idUser7.jpg', '$2a$10$WWLtOR8PCZBUPRPFLRzQNOPa58aHOhTvYMjm1UFZ2ogmmi3CU0xCS', 'H5'),
(5, 'No posee una descripción', 'h11@gmail.com', 'H11', '/images/users/idUser11.jpg', '$2a$10$vCb3AybLINCRlYFtYtNpm.Y4cMOzT5/Ua.kz/wtTVj4.FW0xU2S/u', 'H11');

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
(2, 'Pop');

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
  `image` varchar(255) NOT NULL DEFAULT '/images/users/default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `fullName`, `userName`, `email`, `password`, `image`) VALUES
(1, '131123123123', '123123', 'hola@gmail.com', '$2a$10$gMPCaaIHJxHEe5sLDE20V.yLfuKrW9XSITuJtXrVdbLr.Y4PqSJLK', '/images/users/idUser20.jpg'),
(2, '123123123', 'Hola11', 'hola@gmail.com.arararar', '$2a$10$1p4ibxQuHuVHig9IW9LETOXl8PfAya6SRVK04Lqb47Du9DU7MkK9G', '/images/users/idUser20.jpg'),
(3, 'Hola100', 'Hola100', 'hola100@gmail.com', '$2a$10$a79TvwzadfN/F7h7kEgOF.bG9/V8SeURX8DSX/NTgGfaJ0QCCgI5q', '/images/users/idUserundefined.jpg'),
(4, 'H1', 'H1', 'h1@gmail.com', '$2a$10$h2KiRTNGIqQhZIneno2tpegtAWvQXZ.oOOqu6LAD8pKh4krIq9SJC', '/images/users/idUser[object Promise]1.jpg'),
(5, 'H2', 'H2', 'h2@gmail.com', '$2a$10$ZovN7MHC8eLBKriyrHOWeulXK00XK7W3LSgHiZNFhXZxL8QxHZYie', '/images/users/idUser5.jpg'),
(6, 'H4', 'H4', 'h4@gmail.com', '$2a$10$Te/JE0MIUYYJWPv3TKgTPODj.p4EgLbRSCWqhkfLynEEOglu7zPb2', '/images/users/idUser6.jpg'),
(7, 'H6', 'H6', 'h6@gmail.com', '$2a$10$G5I1jv/eZtelOJUs5HoZOePlR.gAKqA1naEUN4dhZXHQ10N5ZPZh.', '/images/users/idUser7.jpg'),
(8, 'H7', 'H7', 'h7@gmail.com', '$2a$10$yx4MMCdgFwqu1a82QzTvU.xei7E962RZka1ysFYFlpD6qCrsBjASK', '/images/users/idUser8.jpg'),
(9, 'H8', 'H8', 'h8@gmail.com', '$2a$10$WmV/kQ9d/Q4XcbgdNEGs/er2MOhQqG7I1UQ03VS55RZdX2J.jUJGW', '/images/users/default.png'),
(10, 'H10', 'H10', 'h10@gmail.com', '$2a$10$L1kkCxbIISdgYvQqka7Oru0gLnLZLtCC5wSETs3hH6l6Tzc3orFeu', '/images/users/default.png'),
(11, 'userLogin', 'userLogin', 'userlogin@gmail.com', '$2a$10$ZqJ6drsQ0y7RJ/gRXy84TO7WtiJryYdWypkJA5CAw1hoFmUcR.4Ke', '/images/users/default.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genereIdFk` (`genereIdFk`);

--
-- Indices de la tabla `composers`
--
ALTER TABLE `composers`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `composers`
--
ALTER TABLE `composers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_3` FOREIGN KEY (`genereIdFk`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `albums_ibfk_4` FOREIGN KEY (`genereIdFk`) REFERENCES `composers` (`id`);

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
