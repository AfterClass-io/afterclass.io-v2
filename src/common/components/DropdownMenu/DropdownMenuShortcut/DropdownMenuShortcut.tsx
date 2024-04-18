"use client";

import * as React from "react";

import { dropdownMenuTheme } from "../DropdownMenu.theme";

export const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const { shortcut } = dropdownMenuTheme();
  return <span className={shortcut({ className })} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
