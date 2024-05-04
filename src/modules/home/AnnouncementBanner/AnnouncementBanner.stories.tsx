import type { Meta, StoryObj } from "@storybook/react";

import { AnnouncementBanner } from "./AnnouncementBanner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/AnnouncementBanner",
  component: AnnouncementBanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof AnnouncementBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="overflow-x-scroll">
      <AnnouncementBanner />
    </div>
  ),
};
