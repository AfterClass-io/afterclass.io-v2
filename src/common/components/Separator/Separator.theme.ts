import { tv, type VariantProps } from "tailwind-variants";

export const separatorTheme = tv({
  base: ["bg-border-default", "shrink-0"],
  variants: {
    horizontal: {
      true: ["h-[1px]", "w-full"],
      false: ["h-full", "w-[1px]"],
    },
  },
});

export type SeparatorVariants = VariantProps<typeof separatorTheme>;
