-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 27, 2025 at 05:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `swakdining`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Beverage'),
(2, 'Burgers'),
(3, 'Pasta'),
(4, 'Main Dish'),
(5, 'Dessert');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productCode` varchar(15) NOT NULL,
  `productPrice` int(4) NOT NULL,
  `productImage` varchar(50) NOT NULL,
  `isAvailable` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `productName`, `productCode`, `productPrice`, `productImage`, `isAvailable`) VALUES
(1, 2, 'Classic Burger', 'BGR', 50, 'burger.jpg', 'No'),
(2, 2, 'Cheeseburger Deluxe', 'CHDLX', 70, 'CheeseburgerDeluxe.jpg', 'Yes'),
(3, 2, 'Double Bacon Burger', 'DBBGR', 95, 'dblbaconburger.jpg', 'Yes'),
(4, 2, 'Spicy Chicken Burger', 'SPCHB', 85, 'spicychknburger.jpg', 'Yes'),
(5, 2, 'Mushroom Swiss Burger', 'MSSWB', 90, 'mshrmswissburger.jpeg', 'No'),
(6, 2, 'Veggie Burger', 'VGGBR', 75, 'veggieburger.jpg', 'No'),
(7, 2, 'BBQ Bacon Cheeseburger', 'BBQBC', 100, 'bbqBaconCheeseburger.jpg', 'Yes'),
(8, 2, 'Crispy Fish Burger', 'FSHBG', 80, 'crispyfishburger.jpg', 'Yes'),
(9, 3, 'Spaghetti & Meatballs', 'SPGMT', 300, 'spagmtbl.png', 'Yes'),
(10, 3, 'Fettuccine Alfredo', 'FTALF', 280, 'fettucinealf.jpg', 'No'),
(11, 3, 'Penne Arrabbiata', 'PNARB', 250, 'penne.jpg', 'Yes'),
(12, 3, 'Lasagna Bolognese', 'LSBLG', 320, 'lasagna.jpg', 'Yes'),
(13, 3, 'Linguine with Clam Sauce', 'LGCLS', 290, 'linguine.jpg', 'No'),
(14, 3, 'Tortellini Carbonara', 'TRLCB', 310, 'tortellini.jpg', 'Yes'),
(15, 3, 'Pesto Pasta', 'PSTPS', 260, 'pesto.jpg', 'Yes'),
(16, 3, 'Macaroni and Cheese', 'MACCH', 240, 'maccheese.jpg', 'No'),
(17, 3, 'Seafood Marinara', 'SFDMR', 330, 'seafoodmarinara.jpg', 'Yes'),
(18, 3, 'Pasta Primavera', 'PSTPR', 410, 'primavera.jpg', 'Yes'),
(19, 3, 'Spinach & Ricotta Ravioli', 'SPNRV', 270, 'spinachravioli.jpg', 'Yes'),
(20, 4, 'Steak Frites', 'STKFR', 450, 'steakfrites.jpg', 'Yes'),
(21, 4, 'Grilled Salmon', 'GRLSM', 400, 'grillsalmon.jpg', 'No'),
(22, 4, 'Chicken Parmesan', 'CHKPRM', 320, 'chickenparm.jpg', 'Yes'),
(23, 4, 'Vegetarian Lasagna', 'VGLSN', 240, 'veglasagna.jpg', 'Yes'),
(24, 4, 'Lamb Chops', 'LMBCH', 900, 'lambchops.jpg', 'Yes'),
(25, 4, 'Mushroom Risotto', 'MSHRSTO', 380, 'mshrmrisotto.jpg', 'No'),
(26, 4, 'Beef Wellington', 'BFWLL', 1000, 'beefwellington.jpg', 'No'),
(27, 4, 'BBQ Ribs', 'BBQRB', 820, 'bbqribs.jpg', 'Yes'),
(28, 4, 'Shrimp Scampi', 'SHRSC', 520, 'shrimpscampi.jpg', 'Yes'),
(29, 5, 'Banana Split', 'BNSPLT', 220, 'bananasplit.jpg', 'Yes'),
(30, 5, 'Chocolate Lava Cake', 'CHLVC', 250, 'chocolavacake.jpg', 'No'),
(31, 5, 'Strawberry Cheesecake', 'STCHS', 240, 'strawcheesecake.jpg', 'Yes'),
(32, 5, 'Tiramisu', 'TRMSU', 260, 'tiramisu.jpg', 'No'),
(33, 5, 'Crème Brûlée', 'CRMBL', 270, 'cremebrulee.jpg', 'Yes'),
(34, 5, 'Apple Pie à la Mode', 'APLMD', 230, 'applealamode.jpg', 'Yes'),
(35, 5, 'Molten Brownie Sundae', 'MBRSD', 255, 'browniesundae.jpg', 'Yes'),
(36, 5, 'Lemon Tart', 'LMNTR', 210, 'lemontart.jpg', 'Yes'),
(37, 1, 'Coke RG', 'CKRG', 30, 'coke.jpg', 'Yes'),
(38, 1, 'Coke MD', 'CKMD', 35, 'coke.jpg', 'Yes'),
(39, 1, 'Coke LG', 'CKLG', 40, 'coke.jpg', 'Yes'),
(40, 1, 'Sprite RG', 'SPRTRG', 30, 'sprite.jpg', 'No'),
(41, 1, 'Sprite MD', 'SPRTMD', 35, 'sprite.jpg', 'No'),
(42, 1, 'Sprite LG', 'SPRTLG', 40, 'sprite.jpg', 'No'),
(43, 1, 'Iced Tea RG', 'ICTEARG', 60, 'icedtea.jpg', 'Yes'),
(44, 1, 'Iced Tea MD', 'ICTEAMD', 75, 'icedtea.jpg', 'Yes'),
(45, 1, 'Iced Tea LG', 'ICTEALG', 85, 'icedtea.jpg', 'Yes'),
(46, 1, 'Cucumber Lemonade RG', 'CCLMNRG', 50, 'cuculemon.jpg', 'Yes'),
(47, 1, 'Cucumber Lemonade MD', 'CCLMNMD', 65, 'cuculemon.jpg', 'Yes'),
(48, 1, 'Cucumber Lemonade LG', 'CCLMNLG', 75, 'cuculemon.jpg', 'Yes');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
