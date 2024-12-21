import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { sheetTheme } from "../Sheet.theme";

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => {
  const { title } = sheetTheme();
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={title({ className })}
      {...props}
    />
  );
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
