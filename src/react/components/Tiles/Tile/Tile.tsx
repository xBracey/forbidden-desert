import React from "react";
import { Player } from "../../Player";
import { StormTile } from "../StormTile";
import { TileBase } from "../TileBase";
import { ITile } from "./types";

export const Tile = ({
  players,
  sandLevel,
  waterLevel,
  onClick,
  isStorm,
  isMoveable,
}: ITile) => {
  if (isStorm) return <StormTile />;

  return (
    <TileBase onClick={onClick} sandLevel={sandLevel}>
      {players.map((p) => (
        <Player {...p} />
      ))}
    </TileBase>
  );
};
