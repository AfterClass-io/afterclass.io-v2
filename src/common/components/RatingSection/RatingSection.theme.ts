import { type VariantProps, tv } from "tailwind-variants";

export type RatingSectionVariants = VariantProps<typeof ratingSectionTheme>;

export const ratingSectionTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "flex-col",
        "relative",
        "items-start",
        "rounded-2xl",
        "bg-surface-base",
        "w-full",
        "p-6",
        "gap-5",
      ],
      headingContainer: [
        "flex",
        "items-center",
        "rounded-none",
        "w-full",
        "gap-10",
      ],
      headingRating: ["flex", "items-center", "gap-3", "rounded-none"],
      statItemWrapper: [
        "flex",
        "items-start",
        "rounded-none",
        "w-full",
        "gap-14",
        "py-0",
        "px-1",
      ],
      icon: ["h-6", "w-6"],
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
