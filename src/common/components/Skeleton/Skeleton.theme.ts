import { tv, type VariantProps } from "tailwind-variants";

export const skeletonTheme = tv({
  base: ["bg-surface-elevated animate-pulse rounded-md"],
});

export type SkeletonVariants = VariantProps<typeof skeletonTheme>;
