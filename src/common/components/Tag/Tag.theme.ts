import { type VariantProps, tv } from "tailwind-variants";

export type TagVariants = VariantProps<typeof tagTheme>;

export const tagTheme = tv(
  {
    slots: {
      tag: [
        "inline-flex",
        "min-w-14",
        "py-[0.125rem]",
        "px-3",
        "gap-2",
        "justify-center",
        "items-center",
        "rounded-[6.1875rem]",
        "border",
        "border-solid",
        "border-border-default",
      ],
      icon: [],
    },
    variants: {
      variant: {
        secondary: {
          tag: [
            "border-border-secondary",
            "bg-border-secondary",
            "text-text-on-secondary",
          ],
        },
      },
      active: {
        true: {
          tag: [
            "border-border-primary",
            "bg-border-primary",
            "text-text-on-primary",
          ],
        },
      },
      hoverable: {
        true: {
          tag: ["hover:border-border-secondary", "hover:bg-border-secondary"],
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
    compoundSlots: [
      {
        slots: ["tag"],
        variant: "secondary",
        hoverable: true,
        className: ["hover:border-border-elevated", "hover:bg-border-elevated"],
      },
    ],
  },
  { responsiveVariants: true },
);
