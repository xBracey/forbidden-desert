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

    // @ts-ignore
    var JSLink = g_gamethemeurl + "/modules/react.js?version=" + Math.random();
    var JSElement = document.createElement("script");
    JSElement.src = JSLink;
    document.getElementsByTagName("head")[0].appendChild(JSElement);

    window.addEventListener("message", (event) => {
      console.log(event);
    });

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

  setupNotifications: function () {
    console.log("notifications subscriptions setup");
  },
};
