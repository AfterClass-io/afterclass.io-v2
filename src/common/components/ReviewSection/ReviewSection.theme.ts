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
      ],
      header: ["flex", "items-center", "justify-between"],
      title: ["flex", "items-center", "gap-2"],
      icon: [
        "flex",
        "h-6",
        "w-6",
        "rotate-90",
        "items-center",
        "justify-center",
      ],
      reviewsHeader: ["text-2xl", "font-semibold"],
    },
  },
  { responsiveVariants: true },
);
