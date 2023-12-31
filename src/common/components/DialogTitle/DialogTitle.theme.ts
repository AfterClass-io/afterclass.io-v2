import { type VariantProps, tv } from "tailwind-variants";

export type DialogTitleVariants = VariantProps<typeof dialogTitleTheme>;

export const dialogTitleTheme = tv(
  {
    slots: {
      dialogTitle: [
        "text-lg",
        "font-semibold",
        "leading-none",
        "tracking-tight",
      ],
    },
    variants: {
      size: {
        md: {},
        sm: {},
      },
    },
  },
  { responsiveVariants: true },
);
