"use client";
import * as React from "react";

import { useSidebar } from "../SidebarProvider";
import { Button, type ButtonProps } from "@/common/components/Button";
import { sidebarTheme } from "../Sidebar.theme";
import { MinusIcon, PlusIcon } from "@/common/components/CustomIcon";

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  ButtonProps
>(({ className, onClick, ...props }, ref) => {
  const { open, toggleSidebar } = useSidebar();
  const { trigger } = sidebarTheme();

  return (
    <Button
      ref={ref}
      as="button"
      data-sidebar="trigger"
      variant="ghost"
      className={trigger({ className })}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {open ? <MinusIcon /> : <PlusIcon />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
