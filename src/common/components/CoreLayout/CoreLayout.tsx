import { type PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";
import { MobileHeader } from "@/common/components/MobileHeader";

interface CoreLayoutProps extends PropsWithChildren {}

export const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <div className="relative flex h-full flex-col">
      <MobileHeader className="flex-shrink-0 sm:hidden" />
      <div className="relative flex h-full flex-col overflow-hidden sm:flex-row">
        <aside className="relative hidden overflow-y-auto bg-surface-base sm:block">
          <Sidebar />
        </aside>
        <main className="relative flex-1 overflow-y-auto bg-bg-base">
          {children}
        </main>
      </div>
    </div>
  );
};
