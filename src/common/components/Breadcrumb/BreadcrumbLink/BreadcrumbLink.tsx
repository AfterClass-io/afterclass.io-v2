import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";

import { breadcrumbTheme } from "../Breadcrumb.theme";

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    href: string;
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : Link;
  const { link } = breadcrumbTheme();
  return <Comp ref={ref} className={link({ className })} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";
