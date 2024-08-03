import { type VariantProps, tv } from "tailwind-variants";

export type ReviewItemVariants = VariantProps<typeof reviewItemTheme>;

export const reviewItemTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "flex-col",
        "p-4",
        "items-start",
        "w-full",
        "gap-4",
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
        "md:flex-row-reverse",
        "md:justify-between",
      ],
      metadataContainer: ["flex", "gap-4", "items-center"],
      revieweeGroup: [
        "flex",
        "w-full",
        "items-center",
        "justify-between",
        "gap-3",
        "md:w-fit",
        "md:justify-normal",
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
            "text-sm",
            "text-ellipsis",
            "text-text-em-high",
          ],
        },
      },
    },
  },
  { responsiveVariants: true },
);
