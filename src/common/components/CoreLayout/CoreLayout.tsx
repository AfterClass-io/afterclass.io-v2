import { type PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";
import { MobileHeader } from "@/common/components/MobileHeader";
import { getServerAuthSession } from "@/server/auth";

interface CoreLayoutProps extends PropsWithChildren {}

export async function CoreLayout({ children }: CoreLayoutProps) {
  const session = await getServerAuthSession();
  return (
    <div className="flex h-dvh flex-col">
      <MobileHeader
        className="flex-shrink-0 sm:hidden"
        isLoggedIn={!!session}
      />
      <div className="flex flex-1 overflow-hidden">
        <aside className="relative hidden shrink-0 overflow-y-auto border-r border-border-default bg-surface-base sm:block">
          <Sidebar />
        </aside>
        <main className="relative flex flex-1 flex-col bg-bg-base">
          {children}
        </main>
      </div>
    </div>
  );
}
