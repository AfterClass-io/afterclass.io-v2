import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { selectTheme } from "../Select.theme";

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  const { label } = selectTheme();
  return (
    <SelectPrimitive.Label
      ref={ref}
      className={label({ className })}
      {...props}
    />
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
