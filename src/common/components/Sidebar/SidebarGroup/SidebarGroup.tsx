"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { group } = sidebarTheme();
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={group({ className })}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";
