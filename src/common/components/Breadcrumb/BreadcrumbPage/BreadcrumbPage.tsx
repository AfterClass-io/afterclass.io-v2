import * as React from "react";

import { breadcrumbTheme } from "../Breadcrumb.theme";

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => {
  const { page } = breadcrumbTheme();
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={page({ className })}
      {...props}
    />
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";
