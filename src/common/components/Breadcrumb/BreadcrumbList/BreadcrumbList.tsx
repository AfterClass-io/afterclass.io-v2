import * as React from "react";

import { breadcrumbTheme } from "../Breadcrumb.theme";

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => {
  const { list } = breadcrumbTheme();
  return <ol ref={ref} className={list({ className })} {...props} />;
});
BreadcrumbList.displayName = "BreadcrumbList";
