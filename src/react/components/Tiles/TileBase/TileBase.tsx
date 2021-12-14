import React, { ReactNode } from "react";
import { TileBaseContainer } from "./TileBase.styled";

interface ITileBase {
  children?: ReactNode;
}

export const TileBase = ({ children }: ITileBase) => {
  return <TileBaseContainer>{children}</TileBaseContainer>;
};
