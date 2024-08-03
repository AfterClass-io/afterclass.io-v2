import { type VariantProps, tv } from "tailwind-variants";
export type ReviewSectionVariants = VariantProps<typeof reviewSectionTheme>;

export const reviewSectionTheme = tv(
  {
    slots: {
      wrapper: ["flex", "flex-col", "bg-surface-base", "rounded-3xl", "w-fit"],
      header: ["flex", "items-center", "justify-between"],
      title: ["flex", "items-center", "gap-4"],
      icon: ["h-6", "w-6", "rotate-90"],
      reviewsHeader: ["text-2xl", "font-semibold"],
      reviews: ["flex", "flex-col", "gap-16"],
    },
    variants: {
      size: {
        sm: {
          wrapper: ["p-6", "gap-6"],
          reviews: ["gap-10"],
        },
        md: {
          wrapper: ["p-10", "gap-10"],
          reviews: ["gap-16"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
