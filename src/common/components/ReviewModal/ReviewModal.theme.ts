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
        "bg-bg-alt",
        "w-[45rem]",
        "gap-4",
      ],
      modalTrigger: ["w-[45rem]"],
      modalContent: ["min-w-[600px]"],
      modalBody: ["space-y-8"],
      usernameAndTimestampWrapper: ["space-x-2", "pb-[18px]"],
      username: ["text-lg", "font-medium"],
      body: ["pb-[16px]"],
      likeAndShareWrapper: ["flex", "gap-x-6"],
      likeWrapper: [
        "flex",
        "w-fit",
        "items-center",
        "justify-center",
        "gap-x-1",
      ],
      likeIcon: ["h-fit", "w-[18px]"],
      shareWrapper: ["flex", "w-fit", "items-center", "justify-center"],
      shareIcon: ["h-fit", "w-[18px]"],
      seeMoreWrapper: ["w-full", "border-t", "border-border-default", "pt-3"],
      seeMoreLink: ["flex", "h-10", "items-center", "text-primary-default"],
    },
  },
  { responsiveVariants: true },
);
