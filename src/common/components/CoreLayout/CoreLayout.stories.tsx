import type { Meta, StoryObj } from "@storybook/react";

import { CoreLayout } from "./CoreLayout";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/CoreLayout",
  component: CoreLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    children: "hello world",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof CoreLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
