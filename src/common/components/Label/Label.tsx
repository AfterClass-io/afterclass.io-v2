"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type LabelVariants, labelTheme } from "./Label.theme";

export type LabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> &
  LabelVariants;

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={labelTheme({ className })}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
