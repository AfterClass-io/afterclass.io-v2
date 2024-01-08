import { type VariantProps, tv } from "tailwind-variants";

export type ComboboxVariants = VariantProps<typeof comboboxTheme>;

export const comboboxTheme = tv(
  {
    slots: {
      popoverTriggerButton: [],
      popoverTriggerIcon: ["h-6", "w-6", "shrink-0", "opacity-50"],
      popoverContent: [],
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
