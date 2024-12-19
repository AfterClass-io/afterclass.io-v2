"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={sidebarTheme().menuItem({ className })}
    {...props}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";
