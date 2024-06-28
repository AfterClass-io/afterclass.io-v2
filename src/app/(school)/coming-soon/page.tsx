// For whoever is reading this. What's left to be done is the css animation and moving the afterclass logo behind the text
//  the tailwind classes can be cleaned up after work is complete as well.
import { AfterclassIcon } from "@/common/components/CustomIcon";
export default function ComingSoon() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="relative flex h-64 w-96 overflow-hidden items-center rounded-2xl border border-zinc-200 bg-gradient-to-b from-violet-50 to-violet-50 px-10">
        <div className="absolute left-[-2px] top-[170px] scale-[6] rotate-[50deg] opacity-[1]">
              <AfterclassIcon className="animate-color-change ComingSoon" />
              <div className="absolute left-[9px] top-[4px] h-1.5 w-1.5  rounded-full bg-white" />
            </div>
          <div className="relative">
          <div className="absolute left-[50px] top-[-50px] scale-[3] rotate-[60deg] opacity-[0.7]">
            <AfterclassIcon className="animate-color-change ComingSoon" />
            {/* <div className="absolute left-[74.37px] top-0 h-20 w-20 origin-top-left rotate-[62.01deg] opacity-90" /> */}
            <div className="absolute left-[9px] top-[1.8px] h-1.5 w-1.5  rounded-full bg-white" />
          </div>
          </div>
          <div className="relative flex overflow-hidden h-24 w-80 flex-col items-center justify-center gap-2">
            <div className=" text-center text-3xl font-semibold leading-9 text-zinc-950">
              Coming soon
            </div>
            <div className="w-72 text-center text-base font-normal leading-normal text-zinc-500">
              Watch out for the red dot in the sidebar once this is done!
            </div>
          </div>
          <div className="absolute left-[140px] top-[60px] scale-[2] rotate-[64deg] opacity-[0.4] h-[3.5rem] w-[3.5rem]">
            <AfterclassIcon className="animate-color-change ComingSoon" />
            {/* <div className="absolute left-[39.86px] top-0 inline-flex h-11 w-11 origin-top-left rotate-[66.33deg] items-center justify-center px-1 pb-1 pt-0.5 opacity-80" /> */}
            <div className="absolute left-[9px] top-[2px] h-1 w-1 rounded-full bg-white" />
          </div>
          <div className="absolute left-[180px] top-[20px] scale-[1] rotate-[70.58deg] opacity-[0.3] h-[6rem] w-[6rem]">
            <AfterclassIcon className="animate-color-change ComingSoon" />
            {/* <div className="absolute left-[24.18px] top-0 h-6 w-6 origin-top-left rotate-[70.58deg] opacity-70" /> */}
            <div className="absolute left-[9px] top-[2px] h-1 w-1 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </>
  );
}

