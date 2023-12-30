import { type VariantProps, tv } from "tailwind-variants";

export type ComboboxVariants = VariantProps<typeof comboboxTheme>;

export const comboboxTheme = tv(
  {
    slots: {
      inputContainer: [
        "focus-ring",
        "relative",
        "w-full",
        "cursor-default",
        "overflow-hidden",
      ],
      input: [
        "flex",
        "relative",
        "shrink-0",
        "items-center",
        "bg-surface-base",
        "border-border-default",
        "focus-ring",
        "gap-2",
        "p-2",
        "w-full",
        "border",
      ],
      optionContainer: ["bg-surface-base", "overflow-auto", "py-1"],
      option: [
        "text-text-on-primary",
        "relative",
        "cursor-default",
        "select-none",
        "py-2",
        "pl-10",
        "pr-4",
      ],
      optionLabel: ["block", "truncate"],
      showMoreIcon: [],
      showMoreButton: [
        "flex",
        "absolute",
        "items-center",
        "inset-y-0",
        "right-0",
        "pr-2",
        "z-10",
      ],
      selectedIcon: ["hidden"],
      nothingFound: [
        "text-text-on-tertiary",
        "relative",
        "cursor-default",
        "select-none",
        "px-4",
        "py-2",
      ],
    },
    variants: {
      size: {
        sm: {
          inputContainer: ["rounded-md", "shadow-sm"],
          input: ["rounded-md", "h-8", "text-xs"],
          optionContainer: ["rounded-md", "shadow-lg", "max-h-60", "text-xs"],
          showMoreIcon: ["h-4", "w-4"],
        },
        md: {
          inputContainer: ["rounded-lg", "shadow-md"],
          input: ["rounded-lg", "h-10", "text-sm"],
          optionContainer: ["rounded-lg", "shadow-xl", "max-h-72", "text-xs"],
          showMoreIcon: ["h-6", "w-6"],
        },
      },
      selected: {
        true: {
          optionLabel: ["font-semibold"],
          selectedIcon: [
            "flex",
            "absolute",
            "inset-y-0",
            "left-0",
            "items-center",
            "pl-3",
            "h-full",
            "w-8",
          ],
        },
      },
      active: {
        true: {
          option: ["bg-bg-alt"],
          selectedIcon: [],
        },
      },
    },
  },
  { responsiveVariants: true },
);
