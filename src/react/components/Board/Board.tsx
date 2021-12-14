import React from "react";
import { Player } from "../Player";
import { IPlayer } from "../Player/types";
import { StormTile } from "../Tiles/StormTile";
import { TileBase } from "../Tiles/TileBase";
import { BoardContainer } from "./Board.styled";

const tileNumber = 25;

interface IBoard {
  stormPosition: number;
  players: (IPlayer & {
    position: number;
  })[];
}

export const Board = ({ stormPosition, players }: IBoard) => {
  const tiles = Array(tileNumber)
    .fill(0)
    .map((x, i) => {
      const player = players.find((p) => p.position === i);
      const playerComponent = !!player && <Player color={player.color} />;

      return stormPosition === i ? (
        <StormTile />
      ) : (
        <TileBase>{playerComponent}</TileBase>
      );
    });

  return <BoardContainer>{tiles}</BoardContainer>;
};
