import type { Meta, StoryObj } from "@storybook/react";
import { StarLineAltIcon } from "@/common/components/CustomIcon";

import { SidebarItem } from "./SidebarItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/SidebarItem",
  component: SidebarItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    label: "Default",
    icon: <StarLineAltIcon size={16} />,
    href: "/",
    exact: false,
  },
  render: (args) => (
    <div>
      <ul className="space-y-2">
        <SidebarItem {...args} />
      </ul>
    </div>
  ),
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
