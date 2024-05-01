import { type VariantProps, tv } from "tailwind-variants";

export type ReviewFormVariants = VariantProps<typeof reviewFormTheme>;

export const reviewFormTheme = tv(
  {
    base: ["inline-flex", "flex-col", "items-start", "gap-[3.125rem]"],
  },
  { responsiveVariants: true },
);
