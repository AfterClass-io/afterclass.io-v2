"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { content } = sidebarTheme();
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={content({ className })}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";
