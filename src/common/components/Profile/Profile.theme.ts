import { type VariantProps, tv } from "tailwind-variants";

export type ProfileVariants = VariantProps<typeof profileTheme>;

export const profileTheme = tv(
  {
    slots: {
      wrapper: ["flex", "items-center", "gap-2"],
      name: ["overflow-hidden", "text-sm", "text-ellipsis", "text-text-em-mid"],
      icon: [],
    },
  },
  { responsiveVariants: true },
);
