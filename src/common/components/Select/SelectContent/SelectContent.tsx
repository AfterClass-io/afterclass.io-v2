import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { SelectScrollDownButton } from "../SelectScrollDownButton";
import { SelectScrollUpButton } from "../SelectScrollUpButton";
import { selectTheme } from "../Select.theme";

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => {
  const { content, viewport } = selectTheme();
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={content({ className, position })}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={viewport({ className, position })}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
