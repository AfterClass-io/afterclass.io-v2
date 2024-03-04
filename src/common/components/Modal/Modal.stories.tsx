import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/common/components/Button";
import { Modal } from "./Modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/Modal",
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const longText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
  tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla tincidunt, sapien nec varius aliquet, libero nunc tincidunt
  libero, nec dictum libero libero ac odio. Nulla facilisi. Sed
  auctor
  `;

export const Default: Story = {
  render: () => {
    return (
      <Modal>
        <Modal.Trigger asChild>
          <Button variant="primary">Modal (outside) Buttons</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header description="Modal overflows outside">
            All button variants
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4">{longText}</div>
          </Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Content>
      </Modal>
    );
  },
};

export const OverflowsInside: Story = {
  render: () => {
    return (
      <Modal overflow="inside">
        <Modal.Trigger asChild>
          <Button variant="primary">Modal (inside) Headings</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header description="Modal overflows inside">
            Headers
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4">{longText}</div>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    );
  },
};
