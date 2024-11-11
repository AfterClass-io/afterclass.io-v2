import { tv, type VariantProps } from "tailwind-variants";

export const tooltipTheme = tv({
  base: [
    "bg-surface-base",
    "z-popover",
    "border",
    "border-border-default",
    "text-text-em-high",
    "shadow-md",
    "outline-none",
    "z-50",
    "overflow-hidden",
    "rounded-md",
    "px-3",
    "py-1.5",
    "text-xs",
    "animate-in",
    "fade-in-0",
    "zoom-in-95",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0",
    "data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2",
    "data-[side=top]:slide-in-from-bottom-2",
  ],
  variants: {},
});
export type TooltipVariants = VariantProps<typeof tooltipTheme>;
