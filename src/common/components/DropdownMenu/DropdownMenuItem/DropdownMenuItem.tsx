"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { dropdownMenuTheme } from "../DropdownMenu.theme";

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const { item } = dropdownMenuTheme();
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={item({ inset, className })}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
