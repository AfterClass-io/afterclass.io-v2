import { type PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";

// !To be removed when the component is implemented
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
interface Props extends PropsWithChildren {}

export const CoreLayout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-full flex-auto">
      <aside>
        <Sidebar />
      </aside>
      <main className="grow bg-bg-alt">{children}</main>
    </div>
  );
};
