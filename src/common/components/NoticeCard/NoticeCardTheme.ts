import { tv, type VariantProps } from "tailwind-variants";


export const NoticeCardTheme = tv({
  slots: {

    icons: [
      "relative flex",
      "border-border",
      "gap-6",
      "h-[200px]",
      "w-[480px]",
      "flex-shrink-0",
      "items-center",
      "justify-center",
      "overflow-hidden",
      "rounded-4xl",
      "border"
    ],
    title: [
      "mt-4",
      "text-center",
      "text-3xl",
      "font-semibold",
      "tracking-tight",
      "text-text-em-high"
    ],
    subtitle:[
      "text-center",
      "text-base",
      "font-normal",
      "text-text-em-mic"
    ],
    wrapper:[
      "flex",
      "h-screen",
      "items-center",
      "justify-center"
    ],
    textBox:[
      "flex",
      "w-72",
      "max-w-96",
      "flex-col",
      "items-center",
      "justify-center",
      "gap-3",
    ],
  },
  variants:{
    size:{
      small: [
        "absolute bottom-[11rem]",
        "left-[16rem]",
        "h-11",
        "w-11",
        "flex-shrink-0",
        "rotate-[66deg]",
        "animate-[pulse_3s_ease_infinite]",
        "text-current"
      ],
      medium:[
        "absolute",
        "bottom-[7.5rem]",
        "left-[8rem]",
        "h-20",
        "w-20",
        "flex-shrink-0",
        "rotate-[62deg]",
        "animate-[pulse_3s_ease_infinite]",
        "text-current"
      ],
      large: [
        "absolute bottom-0",
        "left-[-3.5rem]",
        "h-[147.12px]",
        "w-[147.12px]",
        "flex-shrink-0",
        "rotate-[60deg]",
        "animate-[pulse_3s_ease_infinite]",
        "text-current"
      ],
    },
  },
  compoundVariants:[
    {
      size: ["small","medium","large"],
    }
  ],
  defaultVariants:{
    size: "small",
  }
  }
);

export type NoticeCardVariants = VariantProps<typeof NoticeCardTheme>;
