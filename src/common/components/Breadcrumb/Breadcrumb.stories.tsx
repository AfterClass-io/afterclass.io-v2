import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "./Breadcrumb";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/Breadcrumb",
  component: Breadcrumb,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Library</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#" aria-current="page">
            Data
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const DefaultLocked: Story = {
//   ...Default,
//   args: {},
// };
