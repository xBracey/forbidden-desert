import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Board } from "./index";
import { PlayerColor } from "../Player/types";

export default {
  title: "Components/Board",
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Example = Template.bind({});

Example.args = {
  stormPosition: 12,
  players: [
    {
      color: PlayerColor.Blue,
      position: 2,
    },
    {
      color: PlayerColor.Red,
      position: 3,
    },
  ],
};
