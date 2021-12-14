declare const dojo: Dojo;

export const ForbiddenDesert = {
  constructor: function () {
    console.log("forbiddendesert constructor");
  },

  setup: function (gamedatas) {
    console.log("Starting game setup");

    // Setting up player boards
    for (var player_id in gamedatas.players) {
      var player = gamedatas.players[player_id];

      // TODO: Setting up players boards if needed
    }

    // TODO: Set up your game interface here, according to "gamedatas"

    // Setup game notifications to handle (see "setupNotifications" method below)
    this.setupNotifications();

    this.addTokenOnBoard(2, 2, [player_id]);

    // @ts-ignore
    var JSLink = g_gamethemeurl + "/modules/react.js?version=" + Math.random();
    var JSElement = document.createElement("script");
    JSElement.src = JSLink;
    document.getElementsByTagName("head")[0].appendChild(JSElement);

    console.log("Ending game setup");
  },

  onEnteringState: function (stateName, args) {
    console.log("Entering state: " + stateName);

    switch (stateName) {
      /* Example:
              
              case 'myGameState':
              
                  // Show some HTML block at this game state
                  dojo.style( 'my_html_block_id', 'display', 'block' );
                  
                  break;
             */

      case "dummmy":
        break;
    }
  },

  onLeavingState: function (stateName) {
    console.log("Leaving state: " + stateName);

    switch (stateName) {
      /* Example:
              
              case 'myGameState':
              
                  // Hide the HTML block we are displaying only during this game state
                  dojo.style( 'my_html_block_id', 'display', 'none' );
                  
                  break;
             */

      case "dummmy":
        break;
    }
  },

  onUpdateActionButtons: function (stateName, args) {
    console.log("onUpdateActionButtons: " + stateName);

    // @ts-ignore
    if (this.isCurrentPlayerActive()) {
      switch (stateName) {
      }
    }
  },

  addTokenOnBoard: function (x, y, player) {
    dojo.place(
      // @ts-ignore
      this.format_block("jstpl_token", {
        x_y: x + "_" + y,
        // @ts-ignore
        color: this.gamedatas.players[player].color,
      }),
      "tokens"
    );

    // @ts-ignore
    this.placeOnObject(
      "token_" + x + "_" + y,
      "overall_player_board_" + player
    );

    // @ts-ignore
    this.slideToObject("token_" + x + "_" + y, "square_" + x + "_" + y).play();
  },

  setupNotifications: function () {
    console.log("notifications subscriptions setup");
  },
};
