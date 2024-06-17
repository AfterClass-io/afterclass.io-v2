// For whoever is reading this. What's left to be done is the css animation and moving the afterclass logo behind the text
//  the tailwind classes can be cleaned up after work is complete as well.
import { AfterclassIcon } from "@/common/components/CustomIcon";
export default function ComingSoon() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="relative flex h-64 w-96 items-center rounded-2xl border border-zinc-200 bg-gradient-to-b from-violet-50 to-violet-50 px-10">
          <div className="inline-flex h-24 w-80 flex-col items-center justify-center gap-2">
            <div className="text-center text-3xl font-semibold leading-9 text-zinc-950">
              Coming soon
            </div>
            <div className="w-72 text-center text-base font-normal leading-normal text-zinc-500">
              Watch out for the red dot in the sidebar once this is done!
            </div>
          </div>
          <div className="absolute left-[-85px] top-[54.84px] h-52 w-52">
            <AfterclassIcon className="absolute left-[127.41px] top-0 h-36 w-36 origin-top-left rotate-[60deg] text-primary-default" />
            <div className="absolute left-[116px] top-[64.16px] h-8 w-8 rounded-full bg-white" />
          </div>
          <div className="absolute left-[102.58px] top-[23.42px] h-28 w-28 opacity-80">
            <AfterclassIcon className="absolute left-[74.37px] top-0 h-20 w-20 origin-top-left rotate-[62.01deg] text-primary-default opacity-90" />
            {/* <div className="absolute left-[74.37px] top-0 h-20 w-20 origin-top-left rotate-[62.01deg] opacity-90" /> */}
            <div className="absolute left-[68.42px] top-[36.58px] h-4 w-4 rounded-full bg-white" />
          </div>
          <div className="absolute left-[258px] top-[1px] h-14 w-14 opacity-60">
            <AfterclassIcon className="absolute left-[39.86px] top-0 inline-flex h-11 w-11 origin-top-left rotate-[66.33deg] items-center justify-center px-1 pb-1 pt-0.5 text-primary-default opacity-80" />
            {/* <div className="absolute left-[39.86px] top-0 inline-flex h-11 w-11 origin-top-left rotate-[66.33deg] items-center justify-center px-1 pb-1 pt-0.5 opacity-80" /> */}
            <div className="absolute left-[34.94px] top-[19.10px] h-2 w-2 rounded-full bg-white" />
          </div>
          <div className="absolute left-[373px] top-[-10px] h-8 w-8 opacity-40">
            <AfterclassIcon className="absolute left-[24.18px] top-0 h-6 w-6 origin-top-left rotate-[70.58deg] text-primary-default opacity-70" />
            {/* <div className="absolute left-[24.18px] top-0 h-6 w-6 origin-top-left rotate-[70.58deg] opacity-70" /> */}
            <div className="absolute left-[20.84px] top-[11.50px] h-1 w-1 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </>
  );
}
