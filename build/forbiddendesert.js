var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("js/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ForbiddenDesert = void 0;
    exports.ForbiddenDesert = {
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
            }), "tokens");
            // @ts-ignore
            this.placeOnObject("token_" + x + "_" + y, "overall_player_board_" + player);
            // @ts-ignore
            this.slideToObject("token_" + x + "_" + y, "square_" + x + "_" + y).play();
        },
        setupNotifications: function () {
            console.log("notifications subscriptions setup");
        },
    };
});
define( ["require", "exports", "dojo", "dojo/_base/declare", "js/index", "ebg/core/gamegui", "ebg/counter"], function (require, exports, dojo_1, declare_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.index = void 0;
    dojo_1 = __importDefault(dojo_1);
    declare_1 = __importDefault(declare_1);
    // @ts-ignore
    exports.index = (0, declare_1.default)(
    // @ts-ignore
    "bgagame.forbiddendesert", ebg.core.gamegui, index_1.ForbiddenDesert)(dojo_1.default, declare_1.default);
});
//# sourceMappingURL=forbiddendesert.js.map