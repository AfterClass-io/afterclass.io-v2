"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={sidebarTheme().groupContent({ className })}
    {...props}
  />
));
SidebarGroupContent.displayName = "SidebarGroupContent";
