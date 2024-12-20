import { type PropsWithChildren } from "react";

export default async function SchoolLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-screen-lg">{children}</div>;
}
