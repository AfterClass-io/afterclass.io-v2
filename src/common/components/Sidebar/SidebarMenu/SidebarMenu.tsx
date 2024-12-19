"use client";
import { sidebarTheme } from "../Sidebar.theme";
import * as React from "react";

export const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={sidebarTheme().menu({ className })}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";
