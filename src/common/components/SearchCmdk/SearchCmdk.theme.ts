import { type VariantProps, tv } from "tailwind-variants";
export type SearchCmdkVariants = VariantProps<typeof searchCmdkTheme>;

export const searchCmdkTheme = tv(
  {
    slots: {
      modal: ["w-[45rem]"],
      content: [
        "mt-[10%] flex-row items-center gap-2 overflow-hidden py-0 sm:py-0",
      ],
      form: ["flex h-full w-full items-center justify-between p-2 pr-5"],
      input: [
        "flex h-11 w-full shrink items-center gap-2 bg-transparent p-2 focus:outline-none",
      ],
      searchIcon: ["ml-1 mr-2 text-text-em-low"],
      closeBtn: ["z-1 mr-5"],
    },
  },
  { responsiveVariants: true },
);
