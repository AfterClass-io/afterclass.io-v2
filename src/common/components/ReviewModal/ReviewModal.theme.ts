import { type VariantProps, tv } from "tailwind-variants";
export type ReviewModalVariants = VariantProps<typeof reviewModalTheme>;
export const reviewModalTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "flex-col",
        "p-4",
        "rounded-md",
        "hover:bg-surface-elevated",
        "rounded-md",
        "border",
        "border-surface-base",
        "hover:border-border-elevated",
        "cursor-pointer",
        "w-full",
        "gap-4",
      ],
      modalTrigger: ["w-[45rem]"],
      modalContent: ["w-full", "mx-10"],
      modalBody: [],
      usernameAndTimestampWrapper: ["space-x-2", "pb-[18px]"],
      username: ["text-lg", "font-medium"],
      body: ["pb-[16px]", "whitespace-pre-wrap"],
      likeAndShareWrapper: [
        "flex",
        "gap-x-6",
        "items-center",
        "w-fit",
        "justify-between",
      ],
      likeWrapper: [
        "flex",
        "w-fit",
        "items-center",
        "justify-center",
        "gap-x-1",
      ],
      // likeIcon: ["h-fit", "w-[18px]"],
      shareWrapper: ["flex", "w-fit", "items-center", "justify-center"],
      // shareIcon: ["h-fit", "w-[18px]"],
      seeMoreDivider: [
        "w-full",
        "border-t",
        "border-border-default",
        "mt-6",
        "mb-3",
      ],
      seeMoreLink: ["flex", "h-10", "items-center", "text-primary-default"],
    },
  },
  { responsiveVariants: true },
);
