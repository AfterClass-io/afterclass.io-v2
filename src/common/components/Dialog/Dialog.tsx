"use client";

import {
  forwardRef,
  ReactNode,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { dialogTheme, type DialogVariants } from "./Dialog.theme";
import { XCloseIcon } from "@/common/components/CustomIcon";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={className} {...props} />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogClose = DialogPrimitive.Close;

export type DialogProps = DialogVariants & {
  trigger: ReactNode;
  children: ReactNode;
  dialogRootProps?: ComponentPropsWithoutRef<typeof DialogRoot>;
  dialogOverlayProps?: ComponentPropsWithoutRef<typeof DialogOverlay>;
  dialogTriggerProps?: ComponentPropsWithoutRef<typeof DialogTrigger>;
  dialogContentProps?: ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
  dialogCloseProps?: ComponentPropsWithoutRef<typeof DialogClose>;
};

export const Dialog = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DialogProps
>(
  (
    {
      trigger,
      children,
      dialogRootProps,
      dialogOverlayProps,
      dialogTriggerProps,
      dialogContentProps,
      dialogCloseProps,
    },
    ref,
  ) => {
    const { dialogTrigger, dialogContent, dialogOverlay, dialogClose } =
      dialogTheme();
    return (
      <DialogRoot {...dialogRootProps}>
        <DialogTrigger
          {...dialogTriggerProps}
          className={dialogTrigger({
            className: dialogTriggerProps?.className,
          })}
        >
          {trigger}
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay
            {...dialogOverlayProps}
            className={dialogOverlay({
              className: dialogOverlayProps?.className,
            })}
          />
          <DialogPrimitive.Content
            {...dialogContentProps}
            ref={ref}
            className={dialogContent({
              className: dialogContentProps?.className,
            })}
          >
            {children}
            <DialogPrimitive.Close
              {...dialogCloseProps}
              className={dialogClose({
                className: dialogCloseProps?.className,
              })}
            >
              <XCloseIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPortal>
      </DialogRoot>
    );
  },
);
