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
        "items-center",
        "justify-center",
        "h-full",
        "w-full",
        "gap-1",
        "text-text-em-low",
      ],
      icon: ["h-6", "w-6"],
      ctaTextContainer: [
        "flex",
        "items-center",
        "gap-1",
        "text-lg",
        "font-medium",
      ],
    },
    variants: {
      size: {
        md: {},
        sm: {},
      },
    },
  },
  { responsiveVariants: true },
);
