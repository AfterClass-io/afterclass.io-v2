import { type PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

type Props = PropsWithChildren;

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
