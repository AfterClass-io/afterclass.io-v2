import { type VariantProps, tv } from "tailwind-variants";

export type PopoverVariants = VariantProps<typeof popoverTheme>;

export const popoverTheme = tv(
  {
    base: [
      "bg-bg-base",
      "z-50",
      "w-72",
      "rounded-md",
      "border",
      "p-4",
      "shadow-md",
      "outline-none",
      "text-text-em-high",
      "border-border-elevated",
      "data-[state=open]:animate-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0",
      "data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95",
      "data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
    ],
    variants: {
      variant: {
        combobox: ["max-h-60 w-[200px] border-none p-0 flex"],
      },
    },
  },
  { responsiveVariants: true },
);
