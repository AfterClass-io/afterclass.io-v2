import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TagGroup } from "./TagGroup";
import { Field } from "@/common/components/Field";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/TagGroup",
  component: TagGroup,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    items: [
      {
        label: "Engaging",
        value: "ENGAGING",
      },
      {
        label: "Knowledgeable",
        value: "KNOWLEDGEABLE",
      },
      {
        label: "Fair grading",
        value: "FAIR_GRADING",
      },
      {
        label: "Effective teaching",
        value: "EFFECTIVE_TEACHING",
      },
      {
        label: "Manageable workload",
        value: "MANAGEABLE_WORKLOAD",
      },
    ],
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof TagGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const formSchema = z.object({
  tags: z.array(z.string()),
});
type FormInputsSchema = z.infer<typeof formSchema>;

export const AsFormInput: Story = {
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
  render: (args) => {
    const { register, watch } = useForm<FormInputsSchema>({
      resolver: zodResolver(formSchema),
    });
    return (
      <div>
        <form>
          <Field label="Tags *" isError={false}>
            <TagGroup {...args} {...register("tags")} />
          </Field>
        </form>
        <hr className="my-4" />
        <pre>{JSON.stringify(watch())}</pre>
      </div>
    );
  },
};
