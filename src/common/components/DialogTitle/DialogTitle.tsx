import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  dialogTitleTheme,
  type DialogTitleVariants,
} from "./DialogTitle.theme";

export type DialogTitleProps = DialogTitleVariants &
  React.ComponentPropsWithRef<typeof DialogPrimitive.Title>;

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={dialogTitleTheme({ className })}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
