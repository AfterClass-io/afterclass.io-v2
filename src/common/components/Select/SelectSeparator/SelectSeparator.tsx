import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { selectTheme } from "../Select.theme";

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { separator } = selectTheme();
  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={separator({ className })}
      {...props}
    />
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
