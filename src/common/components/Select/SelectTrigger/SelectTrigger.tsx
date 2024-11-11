import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { selectTheme } from "../Select.theme";

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { trigger } = selectTheme();
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={trigger({ className })}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
