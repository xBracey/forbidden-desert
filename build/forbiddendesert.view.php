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
 * forbiddendesert.view.php
 *
 * This is your "view" file.
 *
 * The method "build_page" below is called each time the game interface is displayed to a player, ie:
 * _ when the game starts
 * _ when a player refreshes the game page (F5)
 *
 * "build_page" method allows you to dynamically modify the HTML generated for the game interface. In
 * particular, you can set here the values of variables elements defined in forbiddendesert_forbiddendesert.tpl (elements
 * like {MY_VARIABLE_ELEMENT}), and insert HTML block elements (also defined in your HTML template file)
 *
 * Note: if the HTML of your game interface is always the same, you don't have to place anything here.
 *
 */
  
  require_once( APP_BASE_PATH."view/common/game.view.php" );
  
  class view_forbiddendesert_forbiddendesert extends game_view
  {
    function getGameName() {
        return "forbiddendesert";
    }    
  	function build_page( $viewArgs )
  	{		
        $this->page->begin_block( "forbiddendesert_forbiddendesert", "square" );
        
        $hor_scale = 64;
        $ver_scale = 64;
        for( $x=1; $x<=8; $x++ )
        {
            for( $y=1; $y<=8; $y++ )
            {
                $this->page->insert_block( "square", array(
                    'X' => $x,
                    'Y' => $y,
                    'LEFT' => round( ($x-1)* $hor_scale + 16 + $x ),
                    'TOP' => round( ($y-1)* $ver_scale + 16 + $y )
                ) );
            }        
        }
  	}
  }
  

