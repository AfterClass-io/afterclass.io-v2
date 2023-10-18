import { type VariantProps, tv } from "tailwind-variants";

export type FieldVariants = VariantProps<typeof fieldTheme>;

export const fieldTheme = tv(
  {
    slots: {
      wrapper: ["flex", "flex-col", "gap-1"],
    },
    variants: {},
  },
  { responsiveVariants: true }
);
