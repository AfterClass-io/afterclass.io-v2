import { type VariantProps, tv } from "tailwind-variants";

export type TagGroupVariants = VariantProps<typeof tagGroupTheme>;

export const tagGroupTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "flex-wrap",
        "content-start",
        "items-start",
        "gap-3",
        "self-stretch",
        "text-sm",
      ],
      input: ["hidden"],
      tag: ["select-none"],
    },
  },
  { responsiveVariants: true },
);
