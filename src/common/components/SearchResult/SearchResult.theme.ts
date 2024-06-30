import { type VariantProps, tv } from "tailwind-variants";
export type SearchResultVariants = VariantProps<typeof searchResultTheme>;

export const searchResultTheme = tv(
  {
    slots: {
      root: ["flex", "h-full", "flex-col", "gap-10"],
      title: ["truncate", "text-left"],
      titleIcon: ["text-text-em-mid", "flex-none"],
      content: ["flex", "h-full", "gap-12"],
      list: ["flex", "w-full", "flex-col", "items-start", "gap-4"],
      empty: [
        "w-full",
        "p-5",
        "gap-4",
        "items-center",
        "flex",
        "rounded-lg",
        "bg-surface-base",
      ],
      item: [
        "flex",
        "h-fit",
        "w-full",
        "items-center",
        "justify-between",
        "gap-4",
        "rounded-lg",
        "border",
        "border-border-default",
        "bg-surface-base",
        "p-4",
      ],
      itemHeadWrapper: ["flex", "items-start", "gap-4", "self-stretch"],
      itemContent: [
        "flex",
        "flex-[1_0_0%]",
        "flex-col",
        "items-start",
        "justify-center",
        "gap-4",
      ],
      itemSchoolIcon: ["mt-[2px]", "flex-none", "text-primary-default"],
      itemArrow: ["flex-none", "text-text-em-mid"],
      itemTitle: ["text-left", "text-lg", "tracking-tight"],
      itemSubtitle: ["text-lg", "tracking-tight", "text-text-em-low"],
      itemStatsWrapper: ["flex", "items-center", "gap-4", "text-text-em-low"],
      divider: ["mx-4", "border-l-2", "border-border-default"],
      filter: [
        "sticky",
        "top-12",
        "flex",
        "h-fit",
        "w-fit",
        "flex-col",
        "items-start gap-12",
      ],
      filterField: ["w-fit"],
      filterToggleGroup: ["border-border-default"],
      filterToggleGroupItem: [],
    },
    variants: {
      show: {
        false: {
          empty: ["hidden"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
