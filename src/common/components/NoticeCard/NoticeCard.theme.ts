import { type VariantProps, tv } from "tailwind-variants";

export type NoticeCardVariants = VariantProps<typeof noticeCardTheme>;

export const noticeCardTheme = tv(
  {
    slots: {
      wrapper: [
        "relative",
        "flex",
        "h-fit",
        "flex-shrink-0",
        "justify-center",
        "overflow-hidden",
        "rounded-4xl",
        "border",
        "border-border-default",
        "bg-surface-elevated",
        "bg-gradient-to-b",
        "from-bg-alt",
      ],
      floatingIcons: [],
      icon: [
        "absolute",
        "flex-shrink-0",
        "animate-[pulse_3s_ease-in-out_infinite]",
      ],
      textContainer: [
        "mx-auto",
        "flex",
        "h-full",
        "flex-col",
        "items-center",
        "justify-center",
      ],
      title: [
        "mt-4",
        "text-center",
        "font-semibold",
        "tracking-tight",
        "text-text-em-high",
      ],
      children: ["text-center", "font-normal", "text-text-em-mid"],
    },
    variants: {
      isError: {
        true: {
          floatingIcons: ["scale-y-[-1]"],
          icon: ["text-red-600/20"],
        },
        false: {
          icon: ["text-primary-default/20"],
        },
      },
      iconSize: {
        xl: {
          icon: [
            "bottom-0",
            "left-[-3.5rem]",
            "h-36",
            "w-36",
            "rotate-[60deg]",
          ],
        },
        lg: {
          icon: [
            "bottom-[7.5rem]",
            "left-[7rem]",
            "h-20",
            "w-20",
            "rotate-[62deg]",
          ],
        },
        md: {
          icon: [
            "bottom-[11rem]",
            "left-[16rem]",
            "h-11",
            "w-11",
            "rotate-[66deg]",
          ],
        },
        sm: {
          icon: [
            "bottom-[13rem]",
            "left-[22rem]",
            "h-6",
            "w-6",
            "rotate-[70deg]",
          ],
        },
      },
      size: {
        sm: {
          wrapper: ["w-full"],
          textContainer: ["px-10", "py-10", "gap-6"],
          title: ["text-3xl"],
          children: ["text-base"],
        },
        md: {
          wrapper: ["w-[30rem]"],
          textContainer: ["px-24", "py-12", "gap-8"],
          title: ["text-4xl"],
          children: ["text-lg"],
        },
      },
    },
  },
  { responsiveVariants: true },
);
