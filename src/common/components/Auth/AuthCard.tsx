import { type ComponentPropsWithoutRef, forwardRef } from "react";

export const AuthCard = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, title = "Login" }, ref) => {
  return (
    <div
      ref={ref}
      className="mt-10 flex w-96 min-w-fit flex-col gap-y-5 rounded-lg bg-bg-alt px-4 py-5"
    >
      <div className="text-lg font-bold text-text-em-high">{title}</div>
      <div>{children}</div>
    </div>
  );
});

AuthCard.displayName = "AuthCard";
