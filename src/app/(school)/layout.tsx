import { cn } from "@/common/functions/cn";
import { type PropsWithChildren } from "react";

export default function SchoolLayout({ children }: PropsWithChildren) {
  return (
    <div className="">
      <header
        className={cn(
          "z-header sticky top-0",
          "h-16 w-full border-b border-border-default bg-bg-base",
          "flex items-center justify-between",
          "px-6",
        )}
      >
        {/* TODO: Add school select + breadcrumb */}
        <span>School header</span>

        {/* TODO: Add user profile component */}
        <span>User</span>
      </header>

      <div className="px-6 py-6 md:px-12 md:py-12">
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </div>
    </div>
  );
}
