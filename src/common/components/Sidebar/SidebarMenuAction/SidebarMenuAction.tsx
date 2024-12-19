"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { menuAction } = sidebarTheme();

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={menuAction({
        showOnHover,
        className,
      })}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
