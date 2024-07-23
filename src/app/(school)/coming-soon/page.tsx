// For whoever is reading this. What's left to be done is the css animation and moving the afterclass logo behind the text
//  the tailwind classes can be cleaned up after work is complete as well.
import { AfterclassIcon } from "@/common/components/CustomIcon";
feat/coming-soon-page

export default function ComingSoon({
  title = "Coming soon",
  sbutitle = "Watch out for the red dot in the sidebar once this is done!",
  lightModeColors = {
    border: "border-zinc-200",
    backgroundFrom: "from-violet-50",
    backgroundTo: "to-violet-50",
    titleText: "text-zinc-950",
    subtitleText: "text-zinc-500",
  },
  darkModeColors = {
    border: "dark:border-black",
    backgroundFrom: "dark:from-gray-950",
    backgroundTo: "dark:to-black-1000",
    titleText: "dark:text-zinc-100",
    subtitleText: "dark:text-zinc-400",
  }
}){
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="relative flex overflow-hidden h-[200px] w-[480px] items-center rounded-4xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-violet-50 to-violet-50 dark:from-gray-900 dark:to-black-1000 bg-gradient-to-b from-violet-50 to-violet-50 px-1">
          
          <div className="relative left-[-42.55px] top-[26.84px] rotate-[60deg]">
            <AfterclassIcon className="animate-color-change ComingSoon  w-[147.12px] h-[147.12px] " />
            <div className="absolute  h-1.5 w-1.5 rounded-full bg-white" />
          </div>

          <div className="relative left-[-30px] top-[-44.58px]  rotate-[62.01deg] opacity-[0.9] ">
            <AfterclassIcon className="animate-color-change ComingSoon h-[84.22px] w-[84.22px]" />
            {/* <div className="absolute left-[39.86px] top-0 inline-flex h-11 w-11 origin-top-left rotate-[66.33deg] items-center justify-center px-1 pb-1 pt-0.5 opacity-80" /> */}
            <div className="relative left-[-30px] top-[-44.58px] rounded-full bg-white" />
          </div>
          

          <div className="absolute w-[280px] h-[94px] flex-col items-center justify-center gap-[10px] absolute top-[62px] left-[100px]">

            <div className=" text-center text-3xl font-semibold leading-9 text-zinc-950">
              Coming soon
            </div>
            <div className="w-72 text-center text-base font-normal leading-normal text-zinc-500">
              Watch out for the red dot in the sidebar once this is done!
            </div>
          </div>


          <div className="relative left-[45px] top-[-100px] rotate-[66.33deg]  opacity-[0.8] ">
            <AfterclassIcon className="animate-color-change ComingSoon w-[43.53px] h-[43.53px]" />
            {/* <div className="absolute left-[24.18px] top-0 h-6 w-6 origin-top-left rotate-[70.58deg] opacity-70" /> */}
            <div className="absolute left-[9px] top-[2px] h-1 w-1 rounded-full bg-white" />
          </div>          

        </div>
      </div>
    </>
  );
}

