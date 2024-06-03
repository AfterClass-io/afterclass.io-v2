import { tv, type VariantProps } from "tailwind-variants";

export const announcementsBannerTheme = tv({
  slots: {
    wrapper: ["flex", "flex-col", "items-start", "gap-4"],
    announcements: [
      "flex",
      "items-start",
      "gap-6",
      "self-stretch overflow-x-auto",
    ],
    heading: ["text-sm", "font-semibold", "text-text-em-high"],
    divider: ["my-4"],
    card: [
      "relative",
      "overflow-hidden",
      "rounded-lg",
      "shrink-0",
      "before:block",
      "before:absolute",
      "before:content-['']",
      "before:w-full",
      "before:h-full",
      "before:z-10",
      "before:opacity-80",
      "before:bg-gradient-to-t",
      "before:from-primary-default",
      "before:from-20%",
      "before:to-60%",
      "before:to-primary-default/20",
    ],
    text: [
      "z-20",
      "absolute",
      "bottom-3",
      "left-6",
      "text-lg",
      "font-semibold",
      "text-text-em-high",
    ],
  },
});

export type AnnouncementsBannerVariants = VariantProps<
  typeof announcementsBannerTheme
>;
