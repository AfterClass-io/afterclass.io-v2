"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import {
  toggleGroupTheme,
  type ToggleGroupVariants,
} from "./ToggleGroup.theme";

const ToggleGroupContext = React.createContext<ToggleGroupVariants>({
  size: "md",
});

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    ToggleGroupVariants
>(({ className, size = "md", children, ...props }, ref) => {
  const { root } = toggleGroupTheme();
  return (
    <ToggleGroupContext.Provider value={{ size }}>
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={root({ className, size })}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Root>
    </ToggleGroupContext.Provider>
  );
});
ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    ToggleGroupVariants
>(({ className, children, size = "md", ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const { item } = toggleGroupTheme();
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={item({ className, size: context.size ?? size })}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export const ToggleGroup = Object.assign({}, ToggleGroupRoot, {
  Item: ToggleGroupItem,
});
