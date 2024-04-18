import { type VariantProps, tv } from "tailwind-variants";

export type BreadcrumbVariants = VariantProps<typeof breadcrumbTheme>;

export const breadcrumbTheme = tv(
  {
    slots: {
      list: [
        "text-text-em-low",
        "flex",
        "flex-wrap",
        "items-center",
        "gap-1.5",
        "break-words",
        "text-sm",
        "sm:gap-2.5",
      ],
      item: ["inline-flex", "items-center", "gap-1.5"],
      link: ["hover:text-text-on-secondary", "transition-colors"],
      page: ["text-bg-base", "font-normal"],
      separator: ["[&>svg]:size-3.5"],
      ellipsisWrapper: ["flex", "h-9", "w-9", "items-center", "justify-center"],
      ellipsisIcon: ["h-4", "w-4"],
    },
    variants: {
      size: {
        md: {},
        sm: {},
      },
    },
  },
  { responsiveVariants: true },
);
