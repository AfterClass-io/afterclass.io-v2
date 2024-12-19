import { type VariantProps, tv } from "tailwind-variants";

export type ReviewFormVariants = VariantProps<typeof reviewFormTheme>;

export const reviewFormTheme = tv(
  {
    slots: {
      form: ["inline-flex", "flex-col", "items-start"],
      wrapper: [
        "flex",
        "max-w-[48rem]",
        "flex-col",
        "items-start",
        "gap-6",
        "rounded-2xl",
        "bg-surface-base",
        "px-6",
        "py-8",
        "w-full",
      ],
      header: ["flex", "justify-between", "self-stretch"],
      button: ["text-sm", "min-w-fit"],
      divider: ["h-0", "w-full", "border-border-default"],
      lower: ["flex", "flex-col", "items-start", "gap-8", "self-stretch"],
      textarea: ["w-full"],
    },
    variants: {
      size: {
        md: {
          form: ["gap-[3.125rem]"],
          header: ["flex-row", "items-end"],
        },
        sm: {
          form: ["gap-5"],
          header: ["flex-col", "items-start", "gap-6"],
        },
      },
    },
  },

  { responsiveVariants: true },
);
