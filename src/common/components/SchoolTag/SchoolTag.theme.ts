import { tv, type VariantProps } from "tailwind-variants";

export const schoolTagTheme = tv({
  slots: {
    heading: ["text-sm"],
    tagIcon: ["h-6", "w-6"],
  },
});

export type SchoolTagVariants = VariantProps<typeof schoolTagTheme>;
