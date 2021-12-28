import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sand } from "./index";

export default {
  title: "Components/Sand",
  component: Sand,
} as ComponentMeta<typeof Sand>;

const Template: ComponentStory<typeof Sand> = (args) => <Sand {...args} />;

export const Example = Template.bind({});
