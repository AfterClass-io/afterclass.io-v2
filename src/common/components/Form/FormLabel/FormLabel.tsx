"use client";

import * as React from "react";
import type * as LabelPrimitive from "@radix-ui/react-label";

import { useFormField } from "../hook";
import { formTheme } from "../Form.theme";
import { Label } from "@/common/components/Label";

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  const { label } = formTheme();

  return (
    <Label
      ref={ref}
      className={label({ error: !!error, className })}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";
