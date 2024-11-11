import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { ChevronDownIcon } from "@/common/components/CustomIcon";
import { selectTheme } from "../Select.theme";

export const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => {
  const { scrollButton } = selectTheme();
  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={scrollButton({ className })}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;
