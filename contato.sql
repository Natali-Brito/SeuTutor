-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 25-Nov-2019 às 03:12
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contato`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `cpf` varchar(14) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `skype` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `endereco` text NOT NULL,
  `foto` blob NOT NULL,
  `dias` text NOT NULL,
  `turno` text NOT NULL,
  `data_nasc` date NOT NULL,
  `sobre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`cpf`, `nome`, `sobrenome`, `telefone`, `skype`, `email`, `endereco`, `foto`, `dias`, `turno`, `data_nasc`, `sobre`) VALUES
('861.539.165-38', 'Natali', 'Amaral', '(11)11111-1111', '11111111111111', 'natalibamaral@gmail.com', 'EdifÃ­cio Salvador Trade Center, Torre Sul 1807', 0x313537343634373638362e6a7067, ' dom seg ter qua', ' mat ves not', '1574-12-20', 'gggggggggg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `form_contato`
--

CREATE TABLE `form_contato` (
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `mensagem` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `form_contato`
--

INSERT INTO `form_contato` (`nome`, `sobrenome`, `email`, `telefone`, `mensagem`, `id`) VALUES
('AAAAA', 'Amaral', 'natalibamaral@gmail.com', '(11)11111-1111', 'AAAAAAAAAAAAAA', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`cpf`);

--
-- Indexes for table `form_contato`
--
ALTER TABLE `form_contato`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form_contato`
--
ALTER TABLE `form_contato`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
