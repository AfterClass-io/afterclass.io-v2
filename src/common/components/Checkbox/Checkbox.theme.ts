import { type VariantProps, tv } from "tailwind-variants";

export type CheckboxVariants = VariantProps<typeof checkboxTheme>;

export const checkboxTheme = tv(
  {
    slots: {
      checkIcon: [],
      wrapper: ["gap-3", "inline-flex", "items-center"],
      checkboxRoot: [
        "flex",
        "shrink-0",
        "border",
        "border-border-default",
        "ring-border-default",
        "enabled:hover:bg-element-secondary",
        "enabled:data-[state=checked]:bg-primary-default",
      ],
      checkboxIndicator: [
        "flex",
        "w-full",
        "h-full",
        "items-center",
        "justify-center",
      ],
      label: ["flex", "w-full", "h-full", "items-center"],
    },
    variants: {
      size: {
        md: {
          checkIcon: ["h-5", "w-5"],
          label: ["text-sm"],
          checkboxRoot: ["h-6", "w-6", "rounded-md"],
        },
        sm: {
          checkIcon: ["h-3", "w-3"],
          label: ["text-xs"],
          checkboxRoot: ["h-4", "w-4", "rounded-sm"],
        },
      },
      disabled: {
        true: {
          checkboxRoot: ["cursor-not-allowed", "bg-element-disabled"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
