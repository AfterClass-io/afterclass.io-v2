import { type VariantProps, tv } from "tailwind-variants";

export type LabelVariants = VariantProps<typeof labelTheme>;

export const labelTheme = tv(
  {
    slots: {
      label: [
        "bg-transparent",
        "outline-none",
        "placeholder:text-text-em-low",
        "flex-1",
      ],
      wrapper: ["flex", "items-center", "gap-2", "pl-1"],
    },
    variants: {
      size: {
        md: {
          label: ["text-sm"],
        },
        sm: {
          label: ["text-xs"],
        },
      },
      error: {
        true: {
          wrapper: ["text-red-600"],
        },
      },
    },
  },
  { responsiveVariants: true }
);
