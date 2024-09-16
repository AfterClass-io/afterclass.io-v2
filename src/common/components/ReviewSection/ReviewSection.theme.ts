import { type VariantProps, tv } from "tailwind-variants";
export type ReviewSectionVariants = VariantProps<typeof reviewSectionTheme>;

export const reviewSectionTheme = tv(
  {
    slots: {
      wrapper: ["flex", "flex-col", "bg-surface-base", "rounded-3xl", "w-full"],
      header: ["flex", "items-center", "justify-between", "p-4", "pb-0"],
      title: ["flex", "items-center", "gap-4"],
      icon: ["h-6", "w-6", "rotate-90"],
      reviewsHeader: ["text-2xl", "font-semibold"],
      reviews: ["flex", "flex-col"],
    },
    variants: {
      size: {
        sm: {
          wrapper: ["p-3", "gap-4"],
          reviews: ["gap-3"],
        },
        md: {
          wrapper: ["p-6", "gap-6"],
          reviews: ["gap-5"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
