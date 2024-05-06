import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { ChevronUpIcon } from "@/common/components/CustomIcon";
import { selectTheme } from "../Select.theme";

export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => {
  const { scrollButton } = selectTheme();
  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={scrollButton({ className })}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
