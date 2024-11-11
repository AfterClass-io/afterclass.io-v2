import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex h-full flex-shrink-0 items-start justify-center p-5 md:items-center md:py-16">
      {children}
    </section>
  );
}
