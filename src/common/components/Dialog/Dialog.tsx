/**
 * ref:
 * - https://ui.shadcn.com/docs/components/dialog
 * - https://www.radix-ui.com/primitives/docs/components/dialog
 */
"use client";

import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { dialogTheme } from "./Dialog.theme";
import { XCloseIcon } from "@/common/components/CustomIcon";
import { DialogHeader } from "@/common/components/DialogHeader";
import { DialogTitle } from "@/common/components/DialogTitle";
import { DialogDescription } from "@/common/components/DialogDescription";
import { DialogFooter } from "@/common/components/DialogFooter";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { dialogOverlay } = dialogTheme();
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={dialogOverlay({ className })}
      {...props}
    />
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogClose = DialogPrimitive.Close;

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { dialogContent, dialogClose } = dialogTheme();
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={dialogContent({ className })}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className={dialogClose()}>
          <XCloseIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

export interface DialogProps
  extends ComponentPropsWithoutRef<typeof DialogRoot> {
  children: React.ReactNode;
}
export const Dialog = ({ children, ...props }: DialogProps) => {
  return <DialogRoot {...props}>{children}</DialogRoot>;
};

Dialog.Trigger = DialogTrigger;
Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
