"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={sidebarTheme().menuBadge({ className })}
    {...props}
  />
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
