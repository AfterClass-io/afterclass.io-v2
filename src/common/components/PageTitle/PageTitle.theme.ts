import { tv, type VariantProps } from "tailwind-variants";

export const pageTitleTheme = tv(
  {
    slots: {
      wrapper: ["inline-flex", "pb-2", "items-center"],
      heading: ["text-center"],
    },
    variants: {
      size: {
        md: { wrapper: ["gap-6"], heading: ["text-3xl"] },
        sm: { wrapper: ["gap-3"], heading: ["text-lg"] },
      },
    },
  },
  { responsiveVariants: true },
);

export type PageTitleVariants = VariantProps<typeof pageTitleTheme>;
