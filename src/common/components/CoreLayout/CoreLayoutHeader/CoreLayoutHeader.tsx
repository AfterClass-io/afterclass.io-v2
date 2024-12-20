import { auth } from "@/server/auth";

import { SidebarTrigger } from "@/common/components/Sidebar";
import { Separator } from "@/common/components/Separator";
import { Breadcrumb } from "@/modules/home/components/Breadcrumb";
import { Button } from "@/common/components/Button";
import { ThemeToggle } from "@/common/components/ThemeToggle";

export const CoreLayoutHeader = async () => {
  const session = await auth();
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border-default px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 h-4 bg-border-elevated"
      />
      <div className="flex w-full items-center justify-between">
        <Breadcrumb />
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-2">
              <div className="overflow-hidden text-ellipsis text-sm text-text-em-mid">
                <div className="h-4 w-4 rounded-full bg-cyan-800"></div>
              </div>
              <div>{session.user.email}</div>
            </div>
          ) : (
            <Button
              as="a"
              variant="secondary"
              href="/account/auth/login"
              data-test="login"
            >
              Login
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
