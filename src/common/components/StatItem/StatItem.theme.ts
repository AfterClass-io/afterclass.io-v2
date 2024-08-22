import { type VariantProps, tv } from "tailwind-variants";

export type StatItemVariants = VariantProps<typeof statItemTheme>;

export const statItemTheme = tv(
  {
    slots: {
      wrapper: [
        "inline-flex",
        "flex-col",
        "items-start",
        "gap-2",
        "rounded-none",
      ],
      label: [
        "text-text-em-low",
        "text-center",
        "text-sm",
        "font-medium",
        "text-start",
      ],
      rating: ["text-text-em-high", "text-center", "text-xl", "font-semibold"],
      icon: ["h-7", "w-7"],
    },
    variants: {
      size: {
        md: {},
        sm: {
          label: ["text-xs"],
          rating: ["text-md"],
        },
      },
      layout: {
        horizontal: {
          wrapper: ["flex-row-reverse", "items-center", "gap-3"],
          label: ["text-text-em-mid", "text-base"],
          rating: ["text-2xl"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
