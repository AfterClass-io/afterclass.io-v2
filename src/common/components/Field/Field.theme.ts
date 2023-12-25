import { type VariantProps, tv } from "tailwind-variants";

export type FieldVariants = VariantProps<typeof fieldTheme>;

export const fieldTheme = tv(
  {
    slots: {
      wrapper: ["flex", "flex-col", "gap-2", "w-full"],
    },
    variants: {},
  },
  { responsiveVariants: true },
);
