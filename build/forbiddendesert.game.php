<?php
/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * forbiddenDesert implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * forbiddendesert.game.php
 *
 * This is the main file for your game logic.
 *
 * In this PHP file, you are going to defines the rules of the game.
 *
 */

require_once APP_GAMEMODULE_PATH . "module/table/table.game.php";

class forbiddenDesert extends Table
{
  function __construct()
  {
    // Your global variables labels:
    //  Here, you can assign labels to global variables you are using for this game.
    //  You can use any number of global variables with IDs between 10 and 99.
    //  If your game has options (variants), you also have to associate here a label to
    //  the corresponding ID in gameoptions.inc.php.
    // Note: afterwards, you can get/set the global variables with getGameStateValue/setGameStateInitialValue/setGameStateValue
    parent::__construct();

    self::initGameStateLabels([
      "turn_number" => 10,
      //    "my_first_global_variable" => 10,
      //    "my_second_global_variable" => 11,
      //      ...
      //    "my_first_game_variant" => 100,
      //    "my_second_game_variant" => 101,
      //      ...
    ]);
  }

  protected function getGameName()
  {
    // Used for translations and stuff. Please do not modify.
    return "forbiddendesert";
  }

  /*
        setupNewGame:
        
        This method is called only once, when a new game is launched.
        In this method, you must setup the game according to the game rules, so that
        the game is ready to be played.
    */
  protected function setupNewGame($players, $options = [])
  {
    // The number of colors defined here must correspond to the maximum number of players allowed for the gams
    $gameinfos = self::getGameinfos();
    $default_colors = ["ff0000", "0000ff", "00ff00", "ffffff"];
    self::setGameStateInitialValue("turn_number", 1);

    // Create players
    // Note: if you added some extra field on "player" table in the database (dbmodel.sql), you can initialize it there.
    $sql =
      "INSERT INTO player (player_id, player_color, player_canal, player_name, player_avatar) VALUES ";
    $values = [];
    foreach ($players as $player_id => $player) {
      $color = array_shift($default_colors);
      $values[] =
        "('" .
        $player_id .
        "','$color','" .
        $player["player_canal"] .
        "','" .
        addslashes($player["player_name"]) .
        "','" .
        addslashes($player["player_avatar"]) .
        "')";
    }
    $sql .= implode($values, ",");
    self::DbQuery($sql);

    // Create tiles
    $sql = "INSERT INTO tile (tile_index, sand_level, tile_state) VALUES ";
    $values = [];

    for ($i = 0; $i < 25; $i++) {
      $values[] = "(" . $i . ",0," . "'unturned')";
    }
    $sql .= implode($values, ",");

    self::DbQuery($sql);

    self::reloadPlayersBasicInfos();

    // Activate first player (which is in general a good idea :) )
    $this->activeNextPlayer();

    /************ End of the game initialization *****/
  }

  /*
        getAllDatas: 
        
        Gather all informations about current game situation (visible by the current player).
        
        The method is called each time the game interface is displayed to a player, ie:
        _ when the game starts
        _ when a player refreshes the game page (F5)
    */

  function getPlayerTileData()
  {
    $result = [];

    // Get information about players
    // Note: you can retrieve some extra field you added for "player" table in "dbmodel.sql" if you need it.
    $sql =
      "SELECT player_id id, player_color color, player_tile_index FROM player ";
    $result["players"] = self::getCollectionFromDb($sql);

    $sql = "SELECT tile_index, sand_level, tile_state FROM tile ";
    $result["tiles"] = self::getCollectionFromDb($sql);

    // TODO: Gather all information about current game situation (visible by player $current_player_id).

    return $result;
  }

  protected function getAllDatas()
  {
    return $this->getPlayerTileData();
  }

  /*
        getGameProgression:
        
        Compute and return the current game progression.
        The number returned must be an integer beween 0 (=the game just started) and
        100 (= the game is finished or almost finished).
    
        This method is called each time we are in a game state with the "updateGameProgression" property set to true 
        (see states.inc.php)
    */
  function getGameProgression()
  {
    // TODO: compute and return the game progression

    return 0;
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////// Utility functions
  ////////////

  /*
        In this space, you can put any utility methods useful for your game logic
    */

  //////////////////////////////////////////////////////////////////////////////
  //////////// Player actions
  ////////////

  /*
        Each time a player is doing some game action, one of the methods below is called.
        (note: each method below must match an input method in forbiddendesert.action.php)
    */

  function move($tile_index)
  {
    // Check that this is the player's turn and that it is a "possible action" at this game state (see states.inc.php)
    self::checkAction("move");

    $player_id = self::getActivePlayerId();

    $active_player = self::getObjectFromDB(
      "SELECT player_tile_index FROM player WHERE player_id='$player_id'"
    );
    $active_player_tile_index = intval($active_player["player_tile_index"]);

    if (
      $active_player_tile_index === intval($tile_index) + 1 ||
      $active_player_tile_index === intval($tile_index) - 1 ||
      $active_player_tile_index === intval($tile_index) + 5 ||
      $active_player_tile_index === intval($tile_index) - 5
    ) {
      self::DbQuery(
        "UPDATE player SET player_tile_index='$tile_index' WHERE player_id='$player_id'"
      );

      // Notify all players about the card played
      self::notifyAllPlayers("move", clienttranslate('${player_name} moves'), [
        "player_id" => $player_id,
        "player_name" => self::getActivePlayerName(),
      ]);

      $this->gamestate->nextState("move");
    } else {
      self::notifyPlayer(
        $player_id,
        "move",
        clienttranslate(
          "Invalid move, you can only move horizontally or vertically"
        ),
        []
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////// Game state arguments
  ////////////

  /*
        Here, you can create methods defined as "game state arguments" (see "args" property in states.inc.php).
        These methods function is to return some additional information that is specific to the current
        game state.
    */

  /*
    
    Example for game state "MyGameState":
    
    function argMyGameState()
    {
        // Get some values from the current game situation in database...
    
        // return values:
        return array(
            'variable1' => $value1,
            'variable2' => $value2,
            ...
        );
    }    
    */

  //////////////////////////////////////////////////////////////////////////////
  //////////// Game state actions
  ////////////

  /*
        Here, you can create methods defined as "game state actions" (see "action" property in states.inc.php).
        The action method of state X is called everytime the current game state is set to X.
    */

  function st_postTurn()
  {
    // Do some stuff ...
    $turn_number = self::getGameStateValue("turn_number");

    if ($turn_number > 3) {
      self::setGameStateValue("turn_number", 1);
      $this->activeNextPlayer();
    } else {
      self::setGameStateValue("turn_number", $turn_number + 1);
    }

    // (very often) go to another gamestate
    $this->gamestate->nextState("next");
  }

  function arg_playerTurn()
  {
    return ["turn_number" => self::getGameStateValue("turn_number")];
  }

  function arg_postTurn()
  {
    return $this->getPlayerTileData();
  }

  function arg_gameSetup()
  {
    return $this->getPlayerTileData();
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////// Zombie
  ////////////

  /*
        zombieTurn:
        
        This method is called each time it is the turn of a player who has quit the game (= "zombie" player).
        You can do whatever you want in order to make sure the turn of this player ends appropriately
        (ex: pass).
        
        Important: your zombie code will be called when the player leaves the game. This action is triggered
        from the main site and propagated to the gameserver from a server, not from a browser.
        As a consequence, there is no current player associated to this action. In your zombieTurn function,
        you must _never_ use getCurrentPlayerId() or getCurrentPlayerName(), otherwise it will fail with a "Not logged" error message. 
    */

  function zombieTurn($state, $active_player)
  {
    $statename = $state["name"];

    if ($state["type"] === "activeplayer") {
      switch ($statename) {
        default:
          $this->gamestate->nextState("zombiePass");
          break;
      }

      return;
    }

    if ($state["type"] === "multipleactiveplayer") {
      // Make sure player is in a non blocking status for role turn
      $this->gamestate->setPlayerNonMultiactive($active_player, "");

      return;
    }

    throw new feException(
      "Zombie mode not supported at this game state: " . $statename
    );
  }

  ///////////////////////////////////////////////////////////////////////////////////:
  ////////// DB upgrade
  //////////

  /*
        upgradeTableDb:
        
        You don't have to care about this until your game has been published on BGA.
        Once your game is on BGA, this method is called everytime the system detects a game running with your old
        Database scheme.
        In this case, if you change your Database scheme, you just have to apply the needed changes in order to
        update the game database and allow the game to continue to run with your new version.
    
    */

  function upgradeTableDb($from_version)
  {
    // $from_version is the current version of this game database, in numerical form.
    // For example, if the game was running with a release of your game named "140430-1345",
    // $from_version is equal to 1404301345

    // Example:
    //        if( $from_version <= 1404301345 )
    //        {
    //            // ! important ! Use DBPREFIX_<table_name> for all tables
    //
    //            $sql = "ALTER TABLE DBPREFIX_xxxxxxx ....";
    //            self::applyDbUpgradeToAllDB( $sql );
    //        }
    //        if( $from_version <= 1405061421 )
    //        {
    //            // ! important ! Use DBPREFIX_<table_name> for all tables
    //
    //            $sql = "CREATE TABLE DBPREFIX_xxxxxxx ....";
    //            self::applyDbUpgradeToAllDB( $sql );
    //        }
    //        // Please add your future database scheme changes here
    //
    //
  }
}
