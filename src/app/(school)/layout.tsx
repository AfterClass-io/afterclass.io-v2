import { Button } from "@/common/components/Button";
import { ThemeToggle } from "@/common/components/ThemeToggle";
import { cn } from "@/common/functions";
import { type PropsWithChildren } from "react";
import { getServerAuthSession } from "@/server/auth";

export default async function SchoolLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();
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
          {session ? (
            <div className="flex items-center gap-2">
              <div className="overflow-hidden text-ellipsis text-sm text-text-em-mid">
                <div className="h-4 w-4 rounded-full bg-cyan-800"></div>
              </div>
              <div>{session.user.email}</div>
            </div>
          ) : (
            <Button as="a" variant="secondary" href="/account/auth/login">
              Login
            </Button>
          )}
          <ThemeToggle />
        </div>
      </header>

      <div className="h-full overflow-y-scroll px-6 py-6 md:px-12 md:py-12">
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </div>
    </>
  );
}
