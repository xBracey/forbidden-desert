import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TileBase } from "./index";

export default {
  title: "Components/TileBase",
  component: TileBase,
} as ComponentMeta<typeof TileBase>;

const Template: ComponentStory<typeof TileBase> = (args) => (
  <TileBase {...args} />
);

export const Example = Template.bind({});
