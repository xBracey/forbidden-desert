import React, { useState } from "react";
import { GlobalStyles } from "../theme";
import WebFont from "webfontloader";
import { Board } from "../components/Board";
import { IPlayer } from "../components/Player/types";
import { useMessage } from "./hooks/useMessage";
import { ITile } from "../components/Tiles/Tile/types";

WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

export const App = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [tiles, setTiles] = useState<ITile[]>([]);

  const onTileClick = (index: number) => {
    window.postMessage({
      action: "tileClicked",
      data: { index },
    });
  };

  useMessage(setPlayers, setTiles);

  return (
    <div>
      <Board tiles={tiles} onTileClick={onTileClick} players={players} />
      <GlobalStyles />
    </div>
  );
};
