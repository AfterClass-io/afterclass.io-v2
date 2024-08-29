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
        "text-sm",
      ],
      wrapper: ["flex", "items-center", "gap-1.5", "pl-1"],
      icon: [],
    },
    variants: {
      size: {
        md: {
          icon: ["h-4", "w-4"],
        },
        sm: {
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
  { responsiveVariants: true },
);
