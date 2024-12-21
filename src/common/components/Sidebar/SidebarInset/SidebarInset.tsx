"use client";
import * as React from "react";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  const { inset } = sidebarTheme();
  return <main ref={ref} className={inset({ className })} {...props} />;
});
SidebarInset.displayName = "SidebarInset";
