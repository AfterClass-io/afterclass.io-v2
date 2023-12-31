import { type VariantProps, tv } from "tailwind-variants";

export type DialogHeaderVariants = VariantProps<typeof dialogHeaderTheme>;

export const dialogHeaderTheme = tv(
  {
    base: ["flex", "flex-col", "space-y-1.5", "text-center", "sm:text-left"],
    variants: {
      size: {
        md: {},
        sm: {},
      },
    },
  },
  { responsiveVariants: true },
);
