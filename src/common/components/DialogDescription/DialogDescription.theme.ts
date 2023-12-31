import { type VariantProps, tv } from "tailwind-variants";

export type DialogDescriptionVariants = VariantProps<
  typeof dialogDescriptionTheme
>;

export const dialogDescriptionTheme = tv(
  {
    slots: {
      dialogDescription: ["text-muted-foreground", "text-sm"],
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
