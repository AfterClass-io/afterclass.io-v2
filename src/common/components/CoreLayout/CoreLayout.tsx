import { type PropsWithChildren } from "react";
import { auth } from "@/server/auth";
import { AppSidebar } from "@/modules/home/components/AppSidebar";
import { SidebarProvider } from "@/common/components/Sidebar/SidebarProvider";
import { SidebarTrigger } from "@/common/components/Sidebar/SidebarTrigger";
import { SidebarInset } from "@/common/components/Sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Breadcrumb } from "@/modules/home/components/Breadcrumb";
import { Button } from "@/common/components/Button";
import { ThemeToggle } from "@/common/components/ThemeToggle";

// interface CoreLayoutProps extends PropsWithChildren {}
type CoreLayoutProps = PropsWithChildren;

export async function CoreLayout({ children }: CoreLayoutProps) {
  const session = await auth();
  return (
    <SidebarProvider className="h-dvh">
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
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
        </header>
        <section
          className="h-full overflow-y-scroll p-6 md:p-12"
          data-test="scrollable"
        >
          {children}
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
