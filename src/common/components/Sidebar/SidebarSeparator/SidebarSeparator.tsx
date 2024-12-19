"use client";
import * as React from "react";

import { Separator } from "@/common/components/Separator";
import { sidebarTheme } from "../Sidebar.theme";

export const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  const { separator } = sidebarTheme();
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={separator({ className })}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
