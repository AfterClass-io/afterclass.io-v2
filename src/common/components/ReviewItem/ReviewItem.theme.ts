import { type VariantProps, tv } from "tailwind-variants";

export type ReviewItemVariants = VariantProps<typeof reviewItemTheme>;

export const reviewItemTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "flex-col",
        "items-start",
        "w-full",
        "rounded-md",
        "cursor-pointer",
        "max-w-[45rem]",
      ],
      headingContainer: [
        "flex",
        "flex-col",
        "items-start",
        "gap-3",
        "self-stretch",
      ],
      metadataContainer: ["flex", "gap-4", "items-center"],
      revieweeGroup: [
        "flex",
        "w-full",
        "items-center",
        "justify-between",
        "gap-3",
      ],
      reviewerGroup: [
        "flex",
        "h-7",
        "items-center",
        "justify-between",
        "gap-4",
        "self-stretch",
      ],
      timedelta: [
        "overflow-hidden",
        "text-sm",
        "text-ellipsis",
        "text-text-em-low",
      ],
      body: [
        "text-sm",
        "text-text-em-high",
        "line-clamp-3",
        /**
         * TODO: replace when tailwind fixes behavior
         * see: https://github.com/tailwindlabs/tailwindcss/discussions/12127
         */
        // "break-words",
        "break-anywhere",
      ],
      labels: [
        "text-sm",
        "text-text-on-secondary",
        "flex",
        "gap-4",
        "items-start",
        "capitalize",
      ],
      modalTrigger: ["w-[45rem]"],
      modalContent: ["w-full"],
      usernameAndTimestampWrapper: ["space-x-2", "pb-[18px]"],
      username: ["font-medium"],
      modalBody: ["pb-[16px]", "whitespace-pre-wrap"],
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
      seeMoreDivider: ["w-full", "border-t", "border-border-default"],
      seeMoreLink: ["flex", "h-10", "items-center", "text-primary-default"],
    },
    variants: {
      isLocked: {
        true: {
          body: [
            "relative",
            "flex",
            "h-16",
            "w-full",
            "self-stretch",
            "overflow-hidden",
            "text-ellipsis",
          ],
        },
      },
      size: {
        sm: {
          wrapper: ["gap-2"],
          timedelta: ["text-xs"],
          body: ["text-xs"],
          labels: ["text-xs"],
          modalContent: ["m-0", "h-full", "text-xs"],
        },
        md: {
          wrapper: ["gap-4"],
          headingContainer: ["flex-row-reverse", "justify-between"],
          revieweeGroup: ["w-fit", "justify-normal"],
          timedelta: ["text-sm"],
          body: ["text-sm"],
          labels: ["text-sm"],
          modalContent: ["mx-10", "my-auto", "h-auto", "text-sm"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
