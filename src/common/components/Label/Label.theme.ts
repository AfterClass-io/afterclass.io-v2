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
      wrapper: ["flex", "items-center", "gap-1.5", "pl-1"],
      icon: [],
    },
    variants: {
      size: {
        md: {
          label: ["text-sm"],
          icon: ["h-4", "w-4"],
        },
        sm: {
          label: ["text-xs"],
          icon: ["h-3.5", "w-3.5"],
        },
      },
      error: {
        true: {
          wrapper: ["text-text-error"],
        },
      },
    },
  },
  { responsiveVariants: true }
);
