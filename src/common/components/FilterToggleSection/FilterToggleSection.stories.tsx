import type { Meta, StoryObj } from "@storybook/react";
import { FilterToggleSection } from "./FilterToggleSection";
import {
  BooksIcon,
  GraduationCapIcon,
  PencilIcon,
} from "@/common/components/CustomIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/FilterToggleSection",
  component: FilterToggleSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    title: "Professors",
    filterItems: [
      {
        header: "Alexander the Great",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <BooksIcon />, value: 20 },
        ],
      },
      {
        header: "John Doe",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <BooksIcon />, value: 20 },
        ],
      },
      {
        header: "Julius Caesar",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <BooksIcon />, value: 20 },
        ],
      },
    ],
  },
} satisfies Meta<typeof FilterToggleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithSubHeader: Story = {
  args: {
    title: "Courses",
    filterItems: [
      {
        header: "AI: Past, Present, and Future",
        subheader: "COR2224",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <GraduationCapIcon />, value: 20 },
        ],
      },
      {
        header: "Business, Government and Society",
        subheader: "COR2224",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <GraduationCapIcon />, value: 20 },
        ],
      },
      {
        header: "Web Application Development II",
        subheader: "IS216",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <GraduationCapIcon />, value: 20 },
        ],
      },
    ],
  },
};

export const Locked: Story = {
  args: {
    isLocked: true,
    title: "Courses",
    filterItems: [
      {
        header: "AI: Past, Present, and Future",
        subheader: "COR2224",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <GraduationCapIcon />, value: 20 },
        ],
      },
      {
        header: "Business, Government and Society",
        subheader: "COR2224",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <GraduationCapIcon />, value: 20 },
        ],
      },
      {
        header: "Web Application Development II",
        subheader: "IS216",
        filterStats: [
          { icon: <PencilIcon />, value: 10 },
          { icon: <GraduationCapIcon />, value: 20 },
        ],
      },
    ],
  },
};
