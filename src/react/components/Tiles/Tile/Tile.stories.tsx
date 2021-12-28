import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tile } from "./index";

export default {
  title: "Components/Tile",
  component: Tile,
} as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const Example = Template.bind({});
