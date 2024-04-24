import { type VariantProps, tv } from "tailwind-variants";

export type RatingGroupVariants = VariantProps<typeof ratingGroupTheme>;

export const ratingGroupTheme = tv(
  {
    slots: {
      wrapper: ["flex items-start self-stretch"],
      label: ["group px-1"],
      input: ["hidden"],
      icon: [
        "h-8 w-8 cursor-pointer text-border-default duration-300 ease-in-out ",
      ],
    },
    variants: {
      active: {
        true: {},
      },
    },
  },
  { responsiveVariants: true },
);
