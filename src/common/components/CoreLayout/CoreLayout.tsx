import { type PropsWithChildren } from "react";

// !To be removed when the component is implemented
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
interface Props extends PropsWithChildren {}

export const CoreLayout = ({ children }: Props) => {
  return <div className="relative h-full min-h-full">{children}</div>;
};
