"use client";

import * as React from "react";

import { formTheme } from "../Form.theme";

export type FormItemContextValue = {
  id: string;
};

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();
  const { item } = formTheme();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={item({ className })} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";
