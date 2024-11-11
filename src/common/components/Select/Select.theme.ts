import { type VariantProps, tv } from "tailwind-variants";

export type SelectVariants = VariantProps<typeof selectTheme>;

export const selectTheme = tv(
  {
    slots: {
      trigger: [
        "focus-ring",
        "flex",
        "h-9",
        "w-full",
        "items-center",
        "justify-between",
        "whitespace-nowrap",
        "rounded-md",
        "border",
        "bg-transparent",
        "px-3",
        "py-2",
        "text-sm",
        "shadow-sm",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "[&>span]:line-clamp-1",
      ],
      scrollButton: [
        "flex",
        "cursor-default",
        "items-center",
        "justify-center",
        "py-1",
      ],
      content: [
        "bg-surface-base",
        "z-select",
        "text-text-em-high",
        "border-border-default",
        "relative",
        "max-h-96",
        "min-w-[8rem]",
        "overflow-hidden",
        "rounded-md",
        "border",
        "shadow-md",
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
      viewport: ["p1"],
      label: ["px-2", "py-1.5", "text-sm", "font-semibold"],
      separator: ["bg-muted", "-mx-1", "my-1", "h-px"],
      item: [
        "relative",
        "flex",
        "w-full",
        "cursor-default",
        "select-none",
        "items-center",
        "rounded-sm",
        "py-1.5",
        "pl-2",
        "pr-8",
        "text-sm",
        "outline-none",
        "focus:bg-bg-alt",
        "focus:text-text-on-secondary",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
      ],
      iconWrapper: [
        "absolute",
        "right-2",
        "flex",
        "h-3.5",
        "w-3.5",
        "items-center",
        "justify-center",
      ],
      icon: ["h-4", "w-4"],
    },
    variants: {
      position: {
        popper: {
          content: [
            "data-[side=bottom]:translate-y-1",
            "data-[side=left]:-translate-x-1",
            "data-[side=right]:translate-x-1",
            "data-[side=top]:-translate-y-1",
          ],
          viewport: [
            "h-[var(--radix-select-trigger-height)]",
            "w-full min-w-[var(--radix-select-trigger-width)]",
          ],
        },
        "item-aligned": {},
      },
    },
  },
  { responsiveVariants: true },
);
