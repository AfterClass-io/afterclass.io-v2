"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { sidebarTheme } from "../Sidebar.theme";

export const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { groupAction } = sidebarTheme();

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={groupAction({ className })}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
