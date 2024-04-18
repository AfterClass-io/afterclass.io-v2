import * as React from "react";

import { breadcrumbTheme } from "../Breadcrumb.theme";

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => {
  const { item } = breadcrumbTheme();
  return <li ref={ref} className={item({ className })} {...props} />;
});
BreadcrumbItem.displayName = "BreadcrumbItem";
