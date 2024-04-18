"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { dropdownMenuTheme } from "../DropdownMenu.theme";

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const { subcontent } = dropdownMenuTheme();
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={subcontent({ className })}
      {...props}
    />
  );
});
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;
