import { tv, type VariantProps } from "tailwind-variants";

export const announcementsBannerTheme = tv({
  slots: {
    wrapper: ["flex", "w-[75rem]", "flex-col", "items-start", "gap-4"],
    announcements: ["flex", "items-start", "gap-6", "self-stretch"],
    heading: ["text-sm", "font-semibold", "text-text-em-high"],
    divider: ["my-4"],
    card: [
      "relative",
      "h-48",
      "shrink-0",
      "grow",
      "basis-0",
      "overflow-hidden",
      "rounded-lg",
      "bg-purple-400",
    ],
    image: ["h-48", "w-96", "flex-shrink-0", "bg-red-400"],
    text: [
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
