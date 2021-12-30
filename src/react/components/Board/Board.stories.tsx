import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Board } from "./index";
import { ITile, TileState } from "../Tiles/Tile/types";
import { IPlayer } from "../Player/types";

export default {
  title: "Components/Board",
  component: Board,
} as ComponentMeta<typeof Board>;

const players: IPlayer[] = [
  {
    color: "0000ff",
    position: 2,
  },
  {
    color: "ff0000",
    position: 3,
  },
  {
    color: "ffff00",
    position: 3,
  },
  {
    color: "ffffff",
    position: 3,
  },
];

const Template: ComponentStory<typeof Board> = (args) => {
  const tiles: ITile[] = Array(25)
    .fill(0)
    .map((v, i) => ({
      players: [],
      sandLevel: 0,
      onClick: () => {},
      isMoveable: false,
      tileState: TileState.UNTURNED,
    }));

  tiles[12].tileState = TileState.STORM;

  tiles[0].players = players;

  return <Board {...args} tiles={tiles} />;
};

export const Example = Template.bind({});

Example.args = {
  onTileClick: () => {},
  tiles: [],
};
