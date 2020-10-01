-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-01-2020 a las 18:31:29
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbcelta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion_principal`
--

CREATE TABLE `informacion_principal` (
  `id` int(11) NOT NULL,
  `Nombre_de_Contacto` varchar(50) NOT NULL,
  `Telefono_Movil` varchar(15) NOT NULL,
  `Correo_electronico` varchar(90) NOT NULL,
  `Fuente_de_reingreso` varchar(50) NOT NULL,
  `Campana_de_Leads` varchar(60) NOT NULL,
  `URL_de_formulario` varchar(150) NOT NULL,
  `Agencia_de_Origen` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil_financiero`
--

CREATE TABLE `perfil_financiero` (
  `id` int(6) UNSIGNED NOT NULL,
  `Ingresos_Mensuales` varchar(7) NOT NULL,
  `Pago_Inicial_Deseado` varchar(7) NOT NULL,
  `Buro_de_Credito` varchar(20) NOT NULL,
  `Comprobante_de_Ingresos` varchar(20) NOT NULL,
  `Mensualidad_Deseada` varchar(7) NOT NULL,
  `Ocupacion` varchar(30) NOT NULL,
  `Nota` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculo_de_interes`
--

CREATE TABLE `vehiculo_de_interes` (
  `id` int(6) UNSIGNED NOT NULL,
  `Tipo` varchar(15) NOT NULL,
  `Marca` varchar(30) NOT NULL,
  `Vehiculo` varchar(30) NOT NULL,
  `Version` varchar(20) NOT NULL,
  `Transmision` varchar(20) NOT NULL,
  `Color` varchar(20) NOT NULL,
  `Uso_de_Vehiculo` varchar(50) NOT NULL,
  `Demo_URL_formulario` varchar(150) NOT NULL,
  `Anio` varchar(4) NOT NULL,
  `VIN` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `informacion_principal`
--
ALTER TABLE `informacion_principal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `perfil_financiero`
--
ALTER TABLE `perfil_financiero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vehiculo_de_interes`
--
ALTER TABLE `vehiculo_de_interes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `informacion_principal`
--
ALTER TABLE `informacion_principal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `perfil_financiero`
--
ALTER TABLE `perfil_financiero`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vehiculo_de_interes`
--
ALTER TABLE `vehiculo_de_interes`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
