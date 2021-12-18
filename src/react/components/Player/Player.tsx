import React from "react";
import { PlayerContainer } from "./Player.styled";
import { IPlayer } from "./types";

// const colors = {
//   [PlayerColor.Red]: "#ff0000",
//   [PlayerColor.Blue]: "#0000ff",
//   [PlayerColor.Green]: "#00ff00",
//   [PlayerColor.White]: "#ffffff",
// };

export const Player = ({ color }: IPlayer) => {
  // const colorHex = colors[color];

  console.log({ color });

  return <PlayerContainer colorHex={color} />;
};
