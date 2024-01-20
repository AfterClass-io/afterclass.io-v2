/**
 * ref:
 * - https://ui.shadcn.com/docs/components/popover
 * - https://www.radix-ui.com/primitives/docs/components/popover
 */
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { popoverTheme, type PopoverVariants } from "./Popover.theme";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

type PopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> &
  PopoverVariants;
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, variant, align = "start", sideOffset = 12, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={popoverTheme({ className, variant })}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export const Popover = ({
  children,
  ...props
}: PopoverPrimitive.PopoverProps) => {
  return <PopoverRoot {...props}>{children}</PopoverRoot>;
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
