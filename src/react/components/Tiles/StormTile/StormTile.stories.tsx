import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StormTile } from "./index";

export default {
  title: "Components/StormTile",
  component: StormTile,
} as ComponentMeta<typeof StormTile>;

const Template: ComponentStory<typeof StormTile> = (args) => <StormTile {...args} />;

export const Example = Template.bind({});
