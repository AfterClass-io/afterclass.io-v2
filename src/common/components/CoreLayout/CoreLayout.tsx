import { type PropsWithChildren } from "react";

/**
 * eslint-disable no-empty-interface
 * !To be removed when the component is implemented
 */
interface Props extends PropsWithChildren {}

export const CoreLayout = ({ children }: Props) => {
  return <div className="relative h-full min-h-full">{children}</div>;
};
