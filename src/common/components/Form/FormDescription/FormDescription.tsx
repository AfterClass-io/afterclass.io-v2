"use client";

import * as React from "react";

import { useFormField } from "../hook";
import { formTheme } from "../Form.theme";

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  const { description } = formTheme();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={description({ className })}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";
