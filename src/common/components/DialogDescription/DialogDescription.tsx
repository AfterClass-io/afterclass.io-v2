import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  dialogDescriptionTheme,
  type DialogDescriptionVariants,
} from "./DialogDescription.theme";

export type DialogDescriptionProps = DialogDescriptionVariants &
  React.ComponentPropsWithRef<typeof DialogPrimitive.Description>;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={dialogDescriptionTheme({ className })}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
