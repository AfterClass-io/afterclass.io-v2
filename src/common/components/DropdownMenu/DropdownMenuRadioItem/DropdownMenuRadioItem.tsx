"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DotFilledIcon } from "@/common/components/CustomIcon";
import { dropdownMenuTheme } from "../DropdownMenu.theme";

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { radioItem, radioItemIndicatorWrapper, radioItemCheckIcon } =
    dropdownMenuTheme();
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={radioItem({ className })}
      {...props}
    >
      <span className={radioItemIndicatorWrapper()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <DotFilledIcon className={radioItemCheckIcon()} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
