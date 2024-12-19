import { type VariantProps, tv } from "tailwind-variants";

export type ReviewItemVariants = VariantProps<typeof reviewItemTheme>;

export const reviewItemTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "flex-col",
        "items-start",
        "h-fit",
        "max-w-prose",
        "rounded-md",
        "p-4",
        "text-left",
        "focus-ring",
        "cursor-pointer",
        "hover:bg-surface-elevated",
      ],
      headingContainer: [
        "flex",
        "flex-col",
        "content-center",
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
        "items-center",
        "justify-between",
        "gap-4",
        "self-stretch",
        "text-text-em-low",
      ],
      timedelta: ["overflow-hidden", "text-sm", "text-ellipsis"],
      body: [
        "text-sm",
        "text-text-em-mid",
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
      modalTrigger: [],
      modalContent: ["w-full"],
      usernameAndTimestampWrapper: ["space-x-2", "pb-[18px]"],
      username: ["font-medium"],
      modalBody: ["pb-[16px]", "whitespace-pre-wrap"],
      likeAndShareWrapper: [
        "flex",
        "gap-x-3",
        "items-center",
        "w-fit",
        "justify-between",
      ],
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
          modalContent: ["text-xs"],
          seeMoreLink: ["h-fit"],
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
