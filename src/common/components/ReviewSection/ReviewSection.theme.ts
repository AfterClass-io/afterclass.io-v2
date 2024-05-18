import { type VariantProps, tv } from "tailwind-variants";
export type ReviewSectionVariants = VariantProps<typeof reviewSectionTheme>;

export const reviewSectionTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "flex-col",
        "gap-6",
        "bg-surface-base",
        "rounded-3xl",
        "p-8",
        "w-full",
      ],
      header: ["flex", "items-center", "justify-between"],
      title: ["flex", "items-center", "gap-4"],
      icon: ["h-6", "w-6", "rotate-90"],
      reviewsHeader: ["text-2xl", "font-semibold"],
    },
  },
  { responsiveVariants: true },
);
