import type { Meta, StoryObj } from "@storybook/react";
import { NoticeCard } from "./NoticeCard";


const meta: Meta<typeof NoticeCard> = {
  title: "Common/NoticeCard",
  component: NoticeCard,
  tags: ["autodocs"],
  args: {
    title: "Custom Icons Title",
    subtitle: "Custom Icons Subtitle",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: "Coming Soon",
    subtitle: "Watch out for the red dot in the sidebar once this is done!",
  },
};