import { type VariantProps, tv } from "tailwind-variants";

export type FilterToggleSectionVariants = VariantProps<
  typeof filterToggleSectionTheme
>;

export const filterToggleSectionTheme = tv(
  {
    slots: {
      section: [
        "flex",
        "w-full",
        "p-6",
        "flex-col",
        "items-start",
        "gap-5",
        "rounded-2xl",
        "bg-surface-base",
        "relative",
        "select-none",
      ],
      sectionHeader: [
        "flex",
        "items-center",
        "gap-4",
        "text-text-em-high",
        "font-semibold",
        "text-2xl",
      ],
      headerIcon: ["w-6", "h-6"],
      container: [
        "flex",
        "items-start",
        "content-start",
        "gap-4",
        "self-stretch",
        "flex-wrap",
      ],
      item: [
        "group",
        "flex",
        "w-64",
        "p-3",
        "items-center",
        "gap-4",
        "rounded-lg",
        "border",
        "border-border-elevated",
        "hover:bg-surface-elevated",
      ],
      itemHeader: ["text-text-em-high", "font-semibold", "text-sm"],
      content: [
        "flex",
        "flex-col",
        "justify-center",
        "items-start",
        "gap-2",
        "flex-1",
      ],
      statWrapper: ["flex", "items-center", "gap-4"],
      contentSubheaderWrapper: [
        "flex",
        "items-center",
        "justify-between",
        "self-stretch",
      ],
      stat: ["flex", "items-center", "gap-1", "text-sm", "text-text-em-low"],
    },
    variants: {
      selected: {
        true: {
          item: ["bg-surface-elevated"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
