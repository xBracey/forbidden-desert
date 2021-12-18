import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./theme";
import WebFont from "webfontloader";
import { Board } from "./components/Board";
import { IPlayer } from "./components/Player/types";

WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

export const App = () => {
  const [players, setPlayers] = useState<
    (IPlayer & {
      position: number;
    })[]
  >([]);

  const onTileClick = (index: number) => {
    window.postMessage({
      action: "tileClicked",
      data: { index },
    });
  };

  useEffect(() => {
    window.postMessage({
      action: "handshakeInit",
    });

    const listener = (event) => {
      const { action, data } = event.data;

      console.log(action, data);

      if (action === "postTurn") {
        setPlayers(
          Object.values(data.args).map((p: any) => ({
            color: p.player_color,
            position: parseInt(p.player_tile_index),
          }))
        );
      } else if (action === "handshakeComplete") {
        console.log(data.players);

        setPlayers(
          Object.values(data.players).map((p: any) => ({
            color: p.color,
            position: parseInt(p.player_tile_index),
          }))
        );
      }
    };

    window.addEventListener("message", listener);

    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  return (
    <div>
      <Board stormPosition={12} players={players} onTileClick={onTileClick} />
      <GlobalStyles />
    </div>
  );
};
