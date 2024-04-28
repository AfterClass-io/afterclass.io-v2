import { type VariantProps, tv } from "tailwind-variants";

export type TagVariants = VariantProps<typeof tagTheme>;

export const tagTheme = tv(
  {
    slots: {
      tag: [
        "inline-flex",
        "min-w-14",
        "py-[0.38rem]",
        "px-3",
        "gap-2",
        "justify-center",
        "items-center",
        "rounded-[6.1875rem]",
        "border",
        "border-solid",
        "border-border-default",
        "transition-color",
        "bg-transparent",
      ],
      icon: [],
    },
    variants: {
      active: {
        true: {
          tag: [
            "border-border-primary",
            "bg-border-primary",
            "text-text-on-primary",
          ],
        },
      },
      clickable: {
        true: {
          tag: ["cursor-pointer", "hover:bg-element-secondary"],
        },
      },
      size: {
        sm: {
          icon: ["h-3", "w-3"],
        },
        md: {
          icon: ["h-4", "w-4"],
        },
      },
    },
    compoundVariants: [
      {
        active: true,
        clickable: true,
        class: {
          tag: ["hover:text-text-on-secondary"],
        },
      },
    ],
  },
  { responsiveVariants: true },
);
