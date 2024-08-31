import { tv, type VariantProps } from "tailwind-variants";

export const schoolTagTheme = tv(
  {
    slots: {
      wrapper: ["py-1"],
      heading: [],
      tagIcon: [],
    },
    variants: {
      size: {
        md: { wrapper: ["pl-[0.38rem]", "pr-3"], heading: ["text-sm"] },
        sm: { wrapper: ["pl-1", "pr-2"], heading: ["text-xs"] },
      },
    },
  },
  { responsiveVariants: true },
);

export type SchoolTagVariants = VariantProps<typeof schoolTagTheme>;
