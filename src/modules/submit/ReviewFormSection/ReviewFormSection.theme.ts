import { type VariantProps, tv } from "tailwind-variants";

export type ReviewFormSectionVariants = VariantProps<
  typeof reviewFormSectionTheme
>;

export const reviewFormSectionTheme = tv(
  {
    slots: {
      wrapper: [
        "flex",
        "w-[48rem]",
        "flex-col",
        "items-start",
        "gap-6",
        "rounded-2xl",
        "bg-surface-base",
        "px-6",
        "py-8",
      ],
      header: ["flex", "items-end", "justify-between", "self-stretch"],
      divider: ["h-0", "w-full", "border-border-default"],
      lower: ["flex", "flex-col", "items-start", "gap-8"],
      textarea: ["w-full"],
    },
  },
  { responsiveVariants: true },
);
