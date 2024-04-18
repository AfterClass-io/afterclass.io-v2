import { tv, type VariantProps } from "tailwind-variants";

export const toggleGroupTheme = tv({
  slots: {
    root: [
      "inline-flex",
      "items-start",
      "rounded-lg",
      "border",
      "border-solid",
      "text-border-default",
      "overflow-hidden",
    ],
    item: [
      "inline-flex",
      "items-center",
      "justify-center",
      "py-2",
      "px-5",
      "flex-shrink-0",
      "transition-colors",
      "bg-surface-base",
      "text-text-em-high",
      "focus-ring",
      "hover:bg-bg-alt",
      "data-[state=on]:bg-primary-default",
      "data-[state=on]:text-text-on-primary",
    ],
  },
  variants: {
    size: {
      sm: {
        item: ["h-8", "text-sm"],
      },
      md: {
        item: ["h-10", "text-base"],
      },
    },
  },
});
export type ToggleGroupVariants = VariantProps<typeof toggleGroupTheme>;
