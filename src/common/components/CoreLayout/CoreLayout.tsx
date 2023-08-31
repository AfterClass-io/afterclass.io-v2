import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const CoreLayout = ({ children }: Props) => {
  return <div className="relative h-full min-h-full">{children}</div>;
};
