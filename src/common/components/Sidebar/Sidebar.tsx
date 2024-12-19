"use client";

import * as React from "react";

import { Sheet, SheetContent } from "@/common/components/Sheet";

import { SIDEBAR_WIDTH_MOBILE } from "./constants";

import { SidebarContent } from "./SidebarContent";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarGroup } from "./SidebarGroup";
import { SidebarGroupAction } from "./SidebarGroupAction";
import { SidebarGroupContent } from "./SidebarGroupContent";
import { SidebarGroupLabel } from "./SidebarGroupLabel";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarInput } from "./SidebarInput";
import { SidebarInset } from "./SidebarInset";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarMenuAction } from "./SidebarMenuAction";
import { SidebarMenuBadge } from "./SidebarMenuBadge";
import { SidebarMenuButton } from "./SidebarMenuButton";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { SidebarMenuSkeleton } from "./SidebarMenuSkeleton";
import { SidebarMenuSub } from "./SidebarMenuSub";
import { SidebarMenuSubButton } from "./SidebarMenuSubButton";
import { SidebarMenuSubItem } from "./SidebarMenuSubItem";
import { SidebarProvider, useSidebar } from "./SidebarProvider";
import { SidebarRail } from "./SidebarRail";
import { SidebarSeparator } from "./SidebarSeparator";
import { SidebarTrigger } from "./SidebarTrigger";
import { sidebarTheme } from "./Sidebar.theme";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    const {
      root,
      rootCollapsibleMobileSheetContent,
      rootCollapsibleMobileWrapper,
      rootCollapsibleWrapper,
      rootCollapsibleSidebarDesktopGap,
      rootCollapsibleSidebarWrapper,
      rootCollapsibleSidebar,
    } = sidebarTheme();

    if (collapsible === "none") {
      return (
        <div className={root({ className })} ref={ref} {...props}>
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className={rootCollapsibleMobileSheetContent()}
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className={rootCollapsibleMobileWrapper()}>{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className={rootCollapsibleWrapper()}
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div className={rootCollapsibleSidebarDesktopGap({ variant })} />
        <div
          className={rootCollapsibleSidebarWrapper({
            side,
            variant,
            className,
          })}
          {...props}
        >
          <div data-sidebar="sidebar" className={rootCollapsibleSidebar()}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
};
