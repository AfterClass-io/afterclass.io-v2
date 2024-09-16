import { type VariantProps, tv } from "tailwind-variants";

export type DetailCardVariations = VariantProps<typeof detailCardTheme>;

export const detailCardTheme = tv(
  {
    slots: {
      wrapper: [
        "w-full",
        "h-full",
        "flex",
        "flex-col",
        "bg-surface-base",
        "rounded-2xl",
        "gap-5",
        "p-6",
        "text-base",
      ],
      header: ["text-2xl", "font-semibold", "text-text-em-high"],
      body: ["flex", "flex-col", "gap-3"],
      content: ["flex", "gap-3", "text-lg", "font-medium"],
      field: ["text-text-em-mid"],
      value: ["text-text-em-high"],
    },
  },
  { responsiveVariants: true },
);
