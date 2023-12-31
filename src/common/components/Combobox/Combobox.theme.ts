import { type VariantProps, tv } from "tailwind-variants";

export type ComboboxVariants = VariantProps<typeof comboboxTheme>;

export const comboboxTheme = tv(
  {
    slots: {
      popoverTriggerButton: ["w-[200px]", "justify-between"],
      popoverTriggerIcon: ["h-6", "w-6", "shrink-0", "opacity-50"],
      popoverContent: ["max-h-60 w-[200px] p-0"],
      commandInput: [],
      commandEmpty: [],
      commandGroup: [],
      commandItem: [],
      commandItemSelectedIcon: ["mr-2", "h-4", "w-4", "opacity-0"],
    },
    variants: {
      selected: {
        true: {
          commandItemSelectedIcon: ["block"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
