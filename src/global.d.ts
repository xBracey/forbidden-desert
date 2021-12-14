/// <reference path="../node_modules/dojo-typings/dojo/1.11/index.d.ts" />
/// <reference path="../node_modules/dojo-typings/dojo/1.11/modules.d.ts" />
/// <reference path="../node_modules/dojo-typings/dijit/1.11/index.d.ts" />
/// <reference path="../node_modules/dojo-typings/dijit/1.11/modules.d.ts" />
/// <reference path="../node_modules/dojo-typings/dojox/1.11/index.d.ts" />
/// <reference path="../node_modules/dojo-typings/dojox/1.11/modules.d.ts" />

declare module "ebg/core/gamegui" {
  const egb: {
    core: {
      gamegui: {};
    };
  };
  export = egb;
}

interface Game {
  setup: (gamedatas: any) => void;
  onEnteringState: (stateName: string, args: any) => void;
  onLeavingState: (stateName: string) => void;
  onUpdateActionButtons: (stateName: string, args: any) => void;
  setupNotifications: () => void;
}
