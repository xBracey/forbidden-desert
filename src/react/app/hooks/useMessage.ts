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
            waterLevel: t.water_level,
            onClick: () => {},
            isStorm: t.is_storm,
            isMoveable: false,
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
