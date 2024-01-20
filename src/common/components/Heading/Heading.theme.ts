import { tv, type VariantProps } from "tailwind-variants";

export const headingTheme = tv({
  base: ["text-text-em-high", "font-sans", "tracking-tighter", "font-semibold"],
});

export type HeadingVariants = VariantProps<typeof headingTheme>;
