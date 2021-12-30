declare const dojo: Dojo;

interface IMessageEvent extends MessageEvent {
  action: string;
  data: any;
}

export const ForbiddenDesert = {
  game_name: "forbiddendesert",

  constructor: function () {
    console.log("forbiddendesert constructor");
  },

  setup: function (gamedatas) {
    console.log("Starting game setup");

    // TODO: Set up your game interface here, according to "gamedatas"

    // Setup game notifications to handle (see "setupNotifications" method below)
    //@ts-ignore
    this.setupNotifications();
    this.addReactScript();

    window.addEventListener("message", (event) =>
      this.messageListener.call(this, event)
    );

    console.log("Ending game setup");
  },

  addReactScript: function () {
    // @ts-ignore
    var JSLink = g_gamethemeurl + "/modules/react.js?version=" + Math.random();
    var JSElement = document.createElement("script");
    JSElement.src = JSLink;
    document.getElementsByTagName("head")[0].appendChild(JSElement);
  },

  ajaxcallwrapper: function (action, args, handler) {
    if (!args) {
      args = [];
    }
    args.lock = true;

    //@ts-ignore
    if (this.checkAction(action)) {
      //@ts-ignore
      this.ajaxcall(
        "/" + this.game_name + "/" + this.game_name + "/" + action + ".html",
        args,
        this,
        (result) => {},
        handler
      );
    }
  },

  messageListener: function (event: IMessageEvent) {
    const { action, data } = event.data;

    if (action === "tileClicked") {
      this.ajaxcallwrapper("move", { tile_index: data.index }, () => {});
    }

    if (action === "handshakeInit") {
      window.postMessage({
        action: "handshakeComplete",
        // @ts-ignore
        data: this.gamedatas,
      });
    }
  },

  onEnteringState: function (stateName, args) {
    console.log("Entering state: " + stateName);

    switch (stateName) {
      case "postTurn":
        // Make ajax call to get all board positions
        window.postMessage({
          action: "postTurn",
          data: args.args,
        });
    }
  },

  onLeavingState: function (stateName, args) {
    console.log("Leaving state: " + stateName);

    switch (stateName) {
      case "dummy":
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
