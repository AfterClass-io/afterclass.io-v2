"use client";

import * as React from "react";

import { useFormField } from "../hook";
import { formTheme } from "../Form.theme";

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  const { message } = formTheme();

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={message({ className })}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";
