import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      {children}
    </div>
  );
}
