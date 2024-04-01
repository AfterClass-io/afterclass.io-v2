import { type VariantProps, tv } from "tailwind-variants";

export type TextareaVariants = VariantProps<typeof textareaTheme>;

export const textareaTheme = tv(
  {
    slots: {
      wrapper: [],
      textarea: [
        "flex",
        "items-start",
        "p-2",
        "w-80",
        "max-w-[30rem]",
        "min-h-32",
        "gap-2",
        "rounded-lg",
        "border",
        "border-solid",
        "bg-surface-base",
        "border-border-default",
        "text-text-em-mid",
      ],
    },
    variants: {
      size: {
        md: {
          wrapper: [],
          textarea: ["text-sm"],
        },
        sm: {
          wrapper: [],
          textarea: ["text-xs"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
