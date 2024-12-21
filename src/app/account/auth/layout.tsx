import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-1 items-center justify-center">{children}</div>
  );
}
