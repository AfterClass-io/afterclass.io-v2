import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { CheckIcon } from "@/common/components/CustomIcon";
import { selectTheme } from "../Select.theme";

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { item, iconWrapper, icon } = selectTheme();
  return (
    <SelectPrimitive.Item ref={ref} className={item({ className })} {...props}>
      <span className={iconWrapper()}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className={icon()} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
