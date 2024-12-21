"use client";
import * as React from "react";

import { useSidebar } from "../SidebarProvider";
import { Button, type ButtonProps } from "@/common/components/Button";
import { sidebarTheme } from "../Sidebar.theme";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  ButtonProps
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  const { trigger } = sidebarTheme();

  return (
    <Button
      ref={ref}
      as="button"
      data-sidebar="trigger"
      variant="ghost"
      className={trigger({ className })}
      aria-label="Toggle Sidebar"
      iconLeft={
        <>
          <Icon icon="uil:bars" />
          <span className="sr-only">Toggle Sidebar</span>
        </>
      }
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    />
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
