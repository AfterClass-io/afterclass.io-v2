import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { NoticeCard, NoticeCardProps } from "./NoticeCard";
import { ErrorNoticeCard, ErrorNoticeCardProps } from './NoticeCardError/ErrorNoticeCard';


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

export const NormalNotice: Story = {};

export const ErrorNotice: Story = {
  args: {
    title: "Custom Icons Title",
    subtitle: "Custom Icons Subtitle",
  },
  render: (args: ErrorNoticeCardProps) => (
    <ErrorNoticeCard {...args}>
      
    </ErrorNoticeCard>
  ),
};