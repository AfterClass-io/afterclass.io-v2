import { type PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";
import { MobileHeader } from "@/common/components/MobileHeader";

interface CoreLayoutProps extends PropsWithChildren {}

export const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <div className="relative flex h-full flex-col">
      <MobileHeader className="flex-shrink-0 sm:hidden" />
      <div className="relative flex h-full flex-col overflow-hidden overflow-y-auto sm:flex-row">
        <aside className="relative hidden shrink-0 overflow-y-auto border-r border-border-default bg-surface-base sm:block">
          <Sidebar />
        </aside>
        <main className="relative flex flex-1 flex-col bg-bg-base">
          {children}
        </main>
      </div>
    </div>
  );
};
