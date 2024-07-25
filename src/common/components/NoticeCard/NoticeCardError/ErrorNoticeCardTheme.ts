import { tv, type VariantProps } from "tailwind-variants";


export const ErrorNoticeCardTheme = tv({
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
      "border",
      "border-transparent",
      "border-image-slice-1",
      "border-width-4",
      "border-image-source-[linear-gradient(to_right,_#FCF2F2_0%,_#F0EDED_100%)]"
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
        "absolute top-[10.5rem]",
        "left-[16.5rem]",
        "h-11",
        "w-11",
        "flex-shrink-0",
        "rotate-[-66.33deg]",
        "animate-[pulse_3s_ease_infinite]",
        "text-current",
        "transform scale-y-[-1]",
        "opacity-[80%]"
      ],
      medium:[
        "absolute",
        "top-[6.3rem]",
        "left-[7.5rem]",
        "h-20",
        "w-20",
        "flex-shrink-0",
        "rotate-[-62.01deg]",
        "animate-[pulse_3s_ease_infinite]",
        "text-current",
        "transform scale-y-[-1]",
        "opacity-[90%]"
      ],
      large: [
        "absolute top-[0]",
        "left-[-3.8rem]",
        "h-[147.12px]",
        "w-[147.12px]",
        "flex-shrink-0",
        "rotate-[-60deg]",
        "animate-[pulse_3s_ease_infinite]",
        "text-current",
        "transform scale-y-[-1]"
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

export type ErrorNoticeCardVariants = VariantProps<typeof ErrorNoticeCardTheme>;
