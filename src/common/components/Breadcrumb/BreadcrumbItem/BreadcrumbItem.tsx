import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { SlashIcon, DotsHorizontalIcon } from "@/common/components/CustomIcon";
import { breadcrumbTheme } from "../Breadcrumb.theme";

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => {
  const { item } = breadcrumbTheme();
  return <li ref={ref} className={item({ className })} {...props} />;
});
BreadcrumbItem.displayName = "BreadcrumbItem";
