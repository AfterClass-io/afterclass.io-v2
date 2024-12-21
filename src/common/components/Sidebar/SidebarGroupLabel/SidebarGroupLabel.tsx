"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  const { groupLabel } = sidebarTheme();

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={groupLabel({ className })}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
