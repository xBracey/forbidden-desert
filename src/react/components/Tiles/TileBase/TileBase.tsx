import React, { MouseEvent, ReactNode } from "react";
import { Sand } from "../Sand";
import { TileBaseContainer } from "./TileBase.styled";

interface ITileBase {
  children?: ReactNode;
  onClick: (event: MouseEvent) => void;
  sandLevel: number;
}

export const TileBase = ({ children, onClick, sandLevel }: ITileBase) => {
  return (
    <TileBaseContainer onClick={onClick}>
      {children}
      <Sand level={sandLevel} />
    </TileBaseContainer>
  );
};
