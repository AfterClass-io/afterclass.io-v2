import { type VariantProps, tv } from "tailwind-variants";

export type LockCtaOverlayVariants = VariantProps<typeof lockCtaOverlayTheme>;

export const lockCtaOverlayTheme = tv(
  {
    slots: {
      overlay: [
        "bg-surface-base",
        "absolute",
        "left-0",
        "top-0",
        "h-full",
        "w-full",
        "shrink-0",
        "opacity-95",
        "rounded-[inherit]",
        "backdrop-blur-[100px]",
      ],
      wrapper: [
        "inline-flex",
        "absolute",
        "left-0",
        "top-0",
        "items-center",
        "justify-center",
        "h-full",
        "w-full",
        "text-text-em-low",
        "z-10",
      ],
      icon: [],
      ctaTextContainer: ["flex", "items-center", "gap-1", "font-medium"],
    },
    variants: {
      size: {
        md: {
          wrapper: ["gap-2"],
          icon: ["h-6", "w-6"],
          ctaTextContainer: ["text-lg"],
        },
        sm: {
          wrapper: ["gap-[0.375rem]"],
          icon: ["h-4", "w-4"],
          ctaTextContainer: ["text-sm"],
        },
      },
      variant: {
        border: {
          overlay: ["hidden"],
          wrapper: [
            "rounded-lg",
            "border-2",
            "border-solid",
            "border-border-default",
          ],
        },
      },
    },
  },
  { responsiveVariants: true },
);
