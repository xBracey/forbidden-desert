import React from "react";
import { Tile } from "../Tiles/Tile";
import { ITile } from "../Tiles/Tile/types";
import { BoardContainer } from "./Board.styled";

interface IBoard {
  onTileClick: (index: number) => void;
  tiles: ITile[];
}

export const Board = ({ onTileClick, tiles }: IBoard) => {
  const tilesComponent = tiles.map((tile, i) => {
    return <Tile {...tile} onClick={() => onTileClick(i)} />;
  });

  return <BoardContainer>{tilesComponent}</BoardContainer>;
};
