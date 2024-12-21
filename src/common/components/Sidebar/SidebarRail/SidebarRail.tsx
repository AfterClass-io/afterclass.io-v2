"use client";
import * as React from "react";

import { useSidebar } from "../SidebarProvider";
import { sidebarTheme } from "../Sidebar.theme";

export const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  const { rail } = sidebarTheme();

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={rail({ className })}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";
