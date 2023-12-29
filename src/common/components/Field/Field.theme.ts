import { type VariantProps, tv } from "tailwind-variants";

export type FieldVariants = VariantProps<typeof fieldTheme>;

export const fieldTheme = tv(
  {
    slots: {
      labelContainer: [
        "flex",
        "flex-wrap",
        "justify-between",
        "gap-x-2",
        "gap-y-1",
      ],
      wrapper: ["flex", "flex-col", "gap-2", "w-full"],
    },
    variants: {},
  },
  { responsiveVariants: true },
);
