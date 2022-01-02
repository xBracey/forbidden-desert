import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BaseCard } from "./index";

export default {
  title: "Components/BaseCard",
  component: BaseCard,
} as ComponentMeta<typeof BaseCard>;

const Template: ComponentStory<typeof BaseCard> = (args) => (
  <BaseCard {...args} />
);

export const Example = Template.bind({});

Example.args = {
  cardType: "storm",
};
