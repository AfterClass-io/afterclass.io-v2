import { type PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";

// !To be removed when the component is implemented
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
interface Props extends PropsWithChildren {}

export const CoreLayout = ({ children }: Props) => {
  return (
    <div className="relative flex h-screen flex-auto">
      <aside>
        <Sidebar />
      </aside>
      <main className="grow overflow-y-auto overflow-x-hidden bg-bg-alt">
        {children}
      </main>
    </div>
  );
};
