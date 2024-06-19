import { ThemeToggle } from "@/common/components/ThemeToggle";
import { cn } from "@/common/functions";
import { type PropsWithChildren } from "react";

export default function SchoolLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-header",
          "h-16 w-full border-b border-border-default bg-bg-base",
          "hidden flex-none items-center justify-between sm:flex",
          "px-6",
        )}
      >
        {/* TODO: Add school select + breadcrumb */}
        <span>School header</span>

        {/* TODO: Add user profile component */}
        <div className="flex items-center gap-4">
          <span>User</span>
          <ThemeToggle />
        </div>
      </header>

      <div className="h-full overflow-y-scroll px-6 py-6 md:px-12 md:py-12">
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </div>
    </>
  );
}
