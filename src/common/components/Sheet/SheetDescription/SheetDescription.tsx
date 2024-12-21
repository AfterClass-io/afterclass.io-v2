import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { sheetTheme } from "../Sheet.theme";

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => {
  const { description } = sheetTheme();
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={description({ className })}
      {...props}
    />
  );
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
