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
      "border",
    
    ],
    icon: [
      "absolute",
      "flex-shrink-0",
      "animate-[pulse_3s_ease-in-out_infinite]",
      "text-primary-default/20",
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
      "justify-center",
      "border",
      "border-border-default",
      
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
    // error:{
    //   true:{
    //     icons:["scale-y-[-1"],
    //   },
    // },
    size:{
      xl: {
        icon: [
          "bottom-0",
          "left-[-3.5rem]",
          "h-36",
          "w-36",
          "animate-[pulse_3s_ease_infinite]",
          "rotate-[60deg]",
        ],
      },
      lg: {
        icon: [
          "bottom-[7.5rem]",
          "left-[7rem]",
          "h-20",
          "w-20",
          "animate-[pulse_3s_ease_infinite]",
          "rotate-[62deg]",
        ],
      },
      md: {
        icon: [
          "bottom-[11rem]",
          "left-[16rem]",
          "h-11",
          "w-11",
          "animate-[pulse_3s_ease_infinite]",
          "rotate-[66deg]",
        ],
      },
      
    },
  },
},
{ responsiveVariants: true },
);


export type NoticeCardVariants = VariantProps<typeof NoticeCardTheme>;
