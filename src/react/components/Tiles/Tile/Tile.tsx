import React from "react";
import { Player } from "../../Player";
import { StormTile } from "../StormTile";
import { TileBase } from "../TileBase";
import { PlayersContainer } from "./Tile.styled";
import { ITile, TileState } from "./types";

export const Tile = ({
  players,
  sandLevel,
  onClick,
  isMoveable,
  tileState,
}: ITile) => {
  if (tileState === TileState.STORM) return <StormTile />;

  return (
    <TileBase onClick={onClick} sandLevel={sandLevel}>
      <PlayersContainer>
        {players.map((p) => (
          <Player {...p} />
        ))}
      </PlayersContainer>
    </TileBase>
  );
};
