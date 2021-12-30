import { useEffect } from "react";
import { IPlayer } from "../../components/Player/types";
import { ITile } from "../../components/Tiles/Tile/types";

export const useMessage = (
  setPlayers: (players: IPlayer[]) => void,
  setTiles: (tiles: ITile[]) => void
) => {
  useEffect(() => {
    window.postMessage({
      action: "handshakeInit",
    });

    const listener = (event) => {
      const { action, data } = event.data;

      console.log(data);

      if (action === "postTurn" || action === "handshakeComplete") {
        setPlayers(
          Object.values(data.players).map((p: any) => ({
            color: p.color,
            position: parseInt(p.player_tile_index),
          }))
        );
        setTiles(
          Object.values(data.tiles).map((t: any) => ({
            players: [],
            sandLevel: t.sand_level,
            onClick: () => {},
            isMoveable: false,
            tileState: t.tile_state,
          }))
        );
      }
    };

    window.addEventListener("message", listener);

    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);
};
