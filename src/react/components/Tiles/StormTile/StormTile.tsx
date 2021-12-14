import React from "react";
import {
  StormTileContainer,
  StormCircleOuter,
  StormCircleInner,
} from "./StormTile.styled";

interface IStormTile {}

export const StormTile = ({}: IStormTile) => {
  const onClick = () => {
    window.postMessage({
      action: "tileClicked",
      source: "react",
    });
  };

  return (
    <StormTileContainer onClick={onClick}>
      <StormCircleOuter>
        <StormCircleInner />
      </StormCircleOuter>
    </StormTileContainer>
  );
};
