import { type VariantProps, tv } from "tailwind-variants";
export type LoadMoreReviewsVariants = VariantProps<typeof loadMoreReviewsTheme>;

export const loadMoreReviewsTheme = tv(
  {
    slots: {
      seeMore: ["flex", "justify-center", "mt-4"],
    },
  },
  { responsiveVariants: true },
);