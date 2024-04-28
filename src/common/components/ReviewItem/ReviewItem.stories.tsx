import type { Meta, StoryObj } from "@storybook/react";

import { ReviewItem, type ReviewLabel } from "./ReviewItem";

const review = {
  id: "1",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc a velit congue, et faucibus sapien iaculis. Quisque id felis non sapien egestas ultricies vulputate posuere quam. Vestibulum scelerisque arcu leo, sit amet interdum enim suscipit ut. Sed dolor turpis, tincidunt sed elementum at, posuere ac justo. Curabitur sem turpis, porttitor at ante sed, laoreet condimentum magna. Suspendisse ex orci, laoreet in cursus nec, rhoncus quis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia varius quam, ut blandit quam suscipit nec. Morbi facilisis mauris erat, quis porttitor purus consequat id. Maecenas.",
  courseCode: "COR-MGMT1302",
  username: "Anonymous",
  likeCount: 10,
  createdAt: 1705745162,
  reviewedUniversityId: 1,
  reviewFor: "professor" as "professor" | "course",
  professorName: "John Doe",
  labels: [
    { name: "Engaging" },
    { name: "Fair Grading" },
    {
      name: "Effective Teaching",
    },
    {
      name: "Interesting",
    },
    {
      name: "Practical",
    },
    {
      name: "Gained New Skills",
    },
  ] as ReviewLabel[],
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/ReviewItem",
  component: ReviewItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    review: review,
    isLocked: false,
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ReviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHomePage: Story = {
  args: {
    variant: "home",
    review: review,
    isLocked: false,
  },
};
export const LockedHomePage: Story = {
  ...DefaultHomePage,
  args: {
    ...DefaultHomePage.args,
    isLocked: true,
  },
};
export const DefaultProfessorPage: Story = {
  ...DefaultHomePage,
  args: {
    ...DefaultHomePage.args,
    variant: "professor",
  },
};
export const LockedProfessorPage: Story = {
  ...DefaultProfessorPage,
  args: {
    ...DefaultProfessorPage.args,
    isLocked: true,
  },
};
export const DefaultCoursePage: Story = {
  ...DefaultHomePage,
  args: {
    ...DefaultHomePage.args,
    variant: "course",
  },
};
export const LockedCoursePage: Story = {
  ...DefaultCoursePage,
  args: {
    ...DefaultCoursePage.args,
    isLocked: true,
  },
};
