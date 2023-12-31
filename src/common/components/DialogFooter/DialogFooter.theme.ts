import { type VariantProps, tv } from "tailwind-variants";

export type DialogFooterVariants = VariantProps<typeof dialogFooterTheme>;

export const dialogFooterTheme = tv(
  {
    base: [
      "flex",
      "flex-col-reverse",
      "sm:flex-row",
      "sm:justify-end",
      "sm:space-x-2",
    ],
    variants: {
      size: {
        md: {},
        sm: {},
      },
    },
  },
  { responsiveVariants: true },
);
