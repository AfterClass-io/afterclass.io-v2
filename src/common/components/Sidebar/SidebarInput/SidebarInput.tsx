"use client";
import * as React from "react";

import { Input } from "@/common/components/Input";
import { sidebarTheme } from "../Sidebar.theme";

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  const { input } = sidebarTheme();
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={input({ className })}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";
