import { tv, type VariantProps } from "tailwind-variants";

export const pageTitleTheme = tv({
  slots: {
    wrapper: ["inline-flex", "pb-2", "items-center", "gap-6"],
    heading: ["text-center", "text-3xl"],
  },
});

export type PageTitleVariants = VariantProps<typeof pageTitleTheme>;
