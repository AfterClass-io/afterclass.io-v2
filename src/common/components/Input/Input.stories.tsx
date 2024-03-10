import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { StarLineAltIcon } from "@/common/components/CustomIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    label: "default",
    helperText: "helper text",
    contentLeft: <StarLineAltIcon />,
    contentRight: <StarLineAltIcon />,
    placeholder: "placeholder",
    isError: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "default",
    helperText: "helper text",
    contentLeft: <StarLineAltIcon />,
    contentRight: <StarLineAltIcon />,
    placeholder: "placeholder",
  },
};
export const DefaultWithError: Story = {
  ...Default,
  args: {
    ...Default.args,
    helperText: "error helper text",
    isError: true,
  },
};
