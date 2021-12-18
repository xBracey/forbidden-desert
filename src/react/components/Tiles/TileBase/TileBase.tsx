import React, { MouseEvent, ReactNode } from "react";
import { TileBaseContainer } from "./TileBase.styled";

interface ITileBase {
  children?: ReactNode;
  onClick: (event: MouseEvent) => void;
}

export const TileBase = ({ children, onClick }: ITileBase) => {
  return <TileBaseContainer onClick={onClick}>{children}</TileBaseContainer>;
};
