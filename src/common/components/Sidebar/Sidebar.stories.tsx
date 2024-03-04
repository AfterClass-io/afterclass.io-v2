import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/Sidebar",
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    children: "hello world",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HideSearch: Story = {
  ...Default,
  args: {
    ...Default.args,
    hideSearch: true,
  },
};

export const HideLogo: Story = {
  ...Default,
  args: {
    ...Default.args,
    hideLogo: true,
  },
};
