"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { header } = sidebarTheme();
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={header({ className })}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";
