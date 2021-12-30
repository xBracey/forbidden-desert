import React from "react";
import { IPlayer } from "../Player/types";
import { Tile } from "../Tiles/Tile";
import { ITile } from "../Tiles/Tile/types";
import { BoardContainer } from "./Board.styled";

interface IBoard {
  onTileClick: (index: number) => void;
  tiles: ITile[];
  players: IPlayer[];
}

export const Board = ({ onTileClick, tiles, players }: IBoard) => {
  const tilesComponent = tiles.map((tile, i) => {
    const tilePlayers = players.filter((p) => p.position === i);

    return (
      <Tile {...tile} onClick={() => onTileClick(i)} players={tilePlayers} />
    );
  });

  return <BoardContainer>{tilesComponent}</BoardContainer>;
};
