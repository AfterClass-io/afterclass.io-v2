"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={sidebarTheme().menuSub({ className })}
    {...props}
  />
));
SidebarMenuSub.displayName = "SidebarMenuSub";
