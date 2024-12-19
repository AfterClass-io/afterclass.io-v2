import { tv, type VariantProps } from "tailwind-variants";

export const formTheme = tv({
  slots: {
    message: ["text-text-error", "text-[0.8rem]", "font-medium"],
    label: [],
    item: ["w-full", "space-y-2"],
    description: ["text-text-em-low", "text-[0.8rem]"],
  },
  variants: {
    error: {
      true: {
        label: [
          // "text-text-error"
        ],
      },
    },
  },
});

export type FormVariants = VariantProps<typeof formTheme>;
