import { type PropsWithChildren } from "react";
import { Sidebar } from "./";

// !To be removed when the component is implemented
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
interface Props extends PropsWithChildren {}

export const CoreLayout = ({ children }: Props) => {
  return (
    <div className="relative flex h-full min-h-full flex-auto">
      <aside>
        <Sidebar />
      </aside>
      <main className="grow">{children}</main>
    </div>
  );
};
