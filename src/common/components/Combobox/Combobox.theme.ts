import { type VariantProps, tv } from "tailwind-variants";

export type ComboboxVariants = VariantProps<typeof comboboxTheme>;

export const comboboxTheme = tv(
  {
    slots: {},
    variants: {},
  },
  { responsiveVariants: true },
);
