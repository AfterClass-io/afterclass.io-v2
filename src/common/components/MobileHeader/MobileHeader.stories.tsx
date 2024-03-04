import type { Meta, StoryObj } from "@storybook/react";

import { MobileHeader } from "./MobileHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/MobileHeader",
  component: MobileHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    className: "flex-shrink-0",
  },
  render: (args) => (
    <div className="relative flex h-full flex-col">
      <MobileHeader {...args} />
    </div>
  ),
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof MobileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
