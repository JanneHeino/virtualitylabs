-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema virtualitylabs
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `virtualitylabs` ;

-- -----------------------------------------------------
-- Schema virtualitylabs
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `virtualitylabs` DEFAULT CHARACTER SET utf8mb3 ;
USE `virtualitylabs` ;

-- -----------------------------------------------------
-- Table `virtualitylabs`.`kuvat360`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtualitylabs`.`kuvat360` ;

CREATE TABLE IF NOT EXISTS `virtualitylabs`.`kuvat360` (
  `kuva360_id` INT NOT NULL,
  `kuvat360` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`kuva360_id`),
  UNIQUE INDEX `kuvat360_UNIQUE` (`kuvat360` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `virtualitylabs`.`kuvat_perus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `virtualitylabs`.`kuvat_perus` ;

CREATE TABLE IF NOT EXISTS `virtualitylabs`.`kuvat_perus` (
  `kuva_id` INT NOT NULL,
  `kuva` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`kuva_id`),
  UNIQUE INDEX `kuva_UNIQUE` (`kuva` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
