"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { footer } = sidebarTheme();
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={footer({ className })}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";
