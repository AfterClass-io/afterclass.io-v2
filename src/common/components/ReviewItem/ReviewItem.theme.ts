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
        "self-stretch",
        "justify-between",
        "items-center",
        "rounded-none",
        "w-full",
        "gap-10",
      ],
      schoolContainer: ["flex", "items-center", "gap-2"],
      schoolIcon: [],
      schoolCourseCode: [
        "flex",
        "overflow-hidden",
        "text-sm",
        "text-ellipsis",
        "text-text-em-mid",
      ],
      metadataContainer: ["flex", "gap-4", "items-center", "justify-end"],
      profileContainer: ["flex", "items-center", "gap-2"],
      profileName: [
        "overflow-hidden",
        "text-sm",
        "text-ellipsis",
        "text-text-em-mid",
      ],
      profileIcon: [],
      timedelta: [
        "overflow-hidden",
        "text-sm",
        "text-ellipsis",
        "text-text-em-low",
      ],
      body: ["text-sm", "text-text-em-high", "line-clamp-3"],
      labels: [
        "text-sm",
        "text-text-on-secondary",
        "flex",
        "gap-4",
        "items-start",
        "capitalize",
      ],
      skeleton: ["bg-surface-elevated animate-pulse rounded-md"],
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
