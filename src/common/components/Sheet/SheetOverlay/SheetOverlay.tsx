import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { sheetTheme } from "../Sheet.theme";

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { overlay } = sheetTheme();
  return (
    <SheetPrimitive.Overlay
      className={overlay({ className })}
      {...props}
      ref={ref}
    />
  );
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
