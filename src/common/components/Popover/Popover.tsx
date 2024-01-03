/**
 * ref:
 * - https://ui.shadcn.com/docs/components/popover
 * - https://www.radix-ui.com/primitives/docs/components/popover
 */
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { popoverTheme } from "./Popover.theme";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={popoverTheme({ className })}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export const Popover = ({ children }: { children: React.ReactNode }) => {
  return <PopoverRoot>{children}</PopoverRoot>;
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
