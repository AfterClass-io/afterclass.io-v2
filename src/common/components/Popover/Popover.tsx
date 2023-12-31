"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { popoverTheme, type PopoverVariants } from "./Popover.theme";

const PopoveRoot = PopoverPrimitive.Root;

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
      className={className}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export type PopoverProps = PopoverVariants & {
  trigger: React.ReactNode;
  content: React.ReactNode;
  popoverRootProps?: React.ComponentPropsWithoutRef<typeof PopoveRoot>;
  popoverTriggerProps?: React.ComponentPropsWithoutRef<typeof PopoverTrigger>;
  popoverContentProps?: React.ComponentPropsWithoutRef<typeof PopoverContent>;
};

export const Popover = ({
  trigger,
  content,
  popoverRootProps,
  popoverTriggerProps,
  popoverContentProps,
  ...props
}: PopoverProps) => {
  const { popoverContent } = popoverTheme();
  return (
    <PopoveRoot {...popoverRootProps}>
      <PopoverTrigger {...popoverTriggerProps}>{trigger}</PopoverTrigger>
      <PopoverContent
        className={popoverContent()}
        {...popoverContentProps}
        {...props}
      >
        {content}
      </PopoverContent>
    </PopoveRoot>
  );
};
