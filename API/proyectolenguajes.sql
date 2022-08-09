-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-08-2022 a las 00:39:15
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectolenguajes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accesstypes`
--

CREATE TABLE `accesstypes` (
  `id` int(11) NOT NULL,
  `idInvitado` int(11) DEFAULT NULL,
  `idStudent` int(11) DEFAULT NULL,
  `idComputer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carnetrequests`
--

CREATE TABLE `carnetrequests` (
  `id` int(11) NOT NULL,
  `idStudent` int(11) DEFAULT NULL,
  `requestDate` datetime DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `computers`
--

CREATE TABLE `computers` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `serial` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `guests`
--

CREATE TABLE `guests` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `identificacion` bigint(20) DEFAULT NULL,
  `idTypeIdentification` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingressguests`
--

CREATE TABLE `ingressguests` (
  `id` int(11) NOT NULL,
  `dateHourIngress` datetime DEFAULT NULL,
  `dateHourExit` datetime DEFAULT NULL,
  `motivo` text DEFAULT NULL,
  `idGuestIngress` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220807025954-create-user.js'),
('20220807081412-create-typeidentification.js'),
('20220807081931-create-guest.js'),
('20220807085356-create-ingress-guest.js'),
('20220807090033-create-computer.js'),
('20220807090117-create-access-type.js'),
('20220807092619-create-student.js'),
('20220807092642-create-career.js'),
('20220807092721-create-carnet-request.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `studentCode` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `cellphone` bigint(20) DEFAULT NULL,
  `idCareer` int(11) DEFAULT NULL,
  `promotion` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeidentifications`
--

CREATE TABLE `typeidentifications` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'prueba', 'admin@admin.com', '$2b$10$9IXaYQLEqB8uUqFk5DgI/uLKueLGBmH3UAa69CnjweZSVxhUZycGu', '2022-08-07 05:40:44', '2022-08-07 05:40:44'),
(2, 'prueba', 'admin2@admin.com', '$2b$10$n1VaB7yXV743j.wn582rYOhqzXGE7YNpNAx0UJpCgrr58L5j3kH0K', '2022-08-07 05:44:59', '2022-08-07 05:44:59'),
(3, 'Brayan', 'brayz987@gmail.com', '$2b$10$woVJ3EMVP5QSjWSY9Egd5uMhLb6GaygFPXhAkczHu7eKH.WxJzjaO', '2022-08-07 08:26:31', '2022-08-07 08:26:31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accesstypes`
--
ALTER TABLE `accesstypes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idInvitado` (`idInvitado`),
  ADD KEY `idStudent` (`idStudent`),
  ADD KEY `idComputer` (`idComputer`);

--
-- Indices de la tabla `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carnetrequests`
--
ALTER TABLE `carnetrequests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idStudent` (`idStudent`);

--
-- Indices de la tabla `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `guests`
--
ALTER TABLE `guests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTypeIdentification` (`idTypeIdentification`);

--
-- Indices de la tabla `ingressguests`
--
ALTER TABLE `ingressguests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGuestIngress` (`idGuestIngress`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCareer` (`idCareer`);

--
-- Indices de la tabla `typeidentifications`
--
ALTER TABLE `typeidentifications`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accesstypes`
--
ALTER TABLE `accesstypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carnetrequests`
--
ALTER TABLE `carnetrequests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `computers`
--
ALTER TABLE `computers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `guests`
--
ALTER TABLE `guests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ingressguests`
--
ALTER TABLE `ingressguests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `typeidentifications`
--
ALTER TABLE `typeidentifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `accesstypes`
--
ALTER TABLE `accesstypes`
  ADD CONSTRAINT `accesstypes_ibfk_1` FOREIGN KEY (`idInvitado`) REFERENCES `guests` (`id`),
  ADD CONSTRAINT `accesstypes_ibfk_2` FOREIGN KEY (`idStudent`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `accesstypes_ibfk_3` FOREIGN KEY (`idComputer`) REFERENCES `computers` (`id`);

--
-- Filtros para la tabla `carnetrequests`
--
ALTER TABLE `carnetrequests`
  ADD CONSTRAINT `carnetrequests_ibfk_1` FOREIGN KEY (`idStudent`) REFERENCES `students` (`id`);

--
-- Filtros para la tabla `guests`
--
ALTER TABLE `guests`
  ADD CONSTRAINT `guests_ibfk_1` FOREIGN KEY (`idTypeIdentification`) REFERENCES `typeidentifications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ingressguests`
--
ALTER TABLE `ingressguests`
  ADD CONSTRAINT `ingressguests_ibfk_1` FOREIGN KEY (`idGuestIngress`) REFERENCES `guests` (`id`);

--
-- Filtros para la tabla `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`idCareer`) REFERENCES `careers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
