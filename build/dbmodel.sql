
-- ------
-- BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
-- forbiddenDesert implementation : © <Your name here> <Your email address here>
-- 
-- This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
-- See http://en.boardgamearena.com/#!doc/Studio for more information.
-- -----

-- dbmodel.sql

-- CREATE TABLE IF NOT EXISTS `tile` (
--   `index` int unsigned NOT NULL,
--   PRIMARY KEY (`index`,`board_y`)
-- ) ENGINE=InnoDB;


-- CREATE TABLE IF NOT EXISTS `player` (
--   `player_id` int unsigned NOT NULL,
--   `player_no` int unsigned NOT NULL,
--   `player_name` varchar(255) NOT NULL,
--   `player_color` varchar(255) NOT NULL,
--   `player_avatar` varchar(255) NOT NULL,
--   `tile_index` int unsigned NULL,
--   PRIMARY KEY (`board_x`,`board_y`)
-- ) ENGINE=InnoDB;

ALTER TABLE `player` 
  ADD `player_tile_index` int(10) NOT NULL DEFAULT '0';

CREATE TABLE IF NOT EXISTS `tile` (
  `tile_index` int(10) unsigned NOT NULL,
  `sand_level` int(10) unsigned NOT NULL,
  `tile_state` varchar(255) NOT NULL,
  PRIMARY KEY (`tile_index`)
) ENGINE=InnoDB;