import React from "react";
import {
  StormTileContainer,
  StormCircleOuter,
  StormCircleInner,
} from "./StormTile.styled";

interface IStormTile {}

export const StormTile = ({}: IStormTile) => {
  return (
    <StormTileContainer>
      <StormCircleOuter>
        <StormCircleInner />
      </StormCircleOuter>
    </StormTileContainer>
  );
};
