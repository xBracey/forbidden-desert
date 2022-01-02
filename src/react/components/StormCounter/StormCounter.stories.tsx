import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StormCounter } from "./index";

export default {
  title: "Components/StormCounter",
  component: StormCounter,
} as ComponentMeta<typeof StormCounter>;

const Template: ComponentStory<typeof StormCounter> = (args) => (
  <StormCounter {...args} />
);

export const Example = Template.bind({});

Example.args = {
  playerNumber: 3,
  stormLevel: 1,
};
