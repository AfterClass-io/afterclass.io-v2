import { type VariantProps, tv } from "tailwind-variants";

export type InformationCardVariants = VariantProps<typeof informationCardTheme>;

export const informationCardTheme = tv(
  {
    slots: {
      wrapper: [
        "w-full",
        "flex",
        "flex-col",
        "bg-surface-base",
        "rounded-2xl",
        "gap-5",
        "p-6",
        "text-base",
      ],
      header: [
        "flex",
        "items-center",
        "gap-4",
        "text-2xl",
        "font-semibold",
        "text-text-em-high",
      ],
      icon: ["h-6", "w-6"],
      content: ["flex", "flex-col", "gap-2"],
      description: ["line-clamp-3", "text-text-em-high"],
    },
  },
  { responsiveVariants: true },
);
