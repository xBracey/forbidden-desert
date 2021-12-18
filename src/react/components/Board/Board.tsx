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
  onTileClick: (index: number) => void;
}

export const Board = ({ stormPosition, players, onTileClick }: IBoard) => {
  console.log(players);

  const tiles = Array(tileNumber)
    .fill(0)
    .map((x, i) => {
      const playersOnTile = players.filter((p) => p.position === i);
      const playersComponent = playersOnTile.map((player) => (
        <Player color={player.color} />
      ));

      return stormPosition === i ? (
        <StormTile />
      ) : (
        <TileBase
          onClick={() => {
            onTileClick(i);
          }}
        >
          {playersComponent}
        </TileBase>
      );
    });

  return <BoardContainer>{tiles}</BoardContainer>;
};
