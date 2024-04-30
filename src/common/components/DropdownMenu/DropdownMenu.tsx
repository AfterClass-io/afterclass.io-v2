// ref: https://ui.shadcn.com/docs/components/dropdown-menu
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DropdownMenuCheckboxItem } from "./DropdownMenuCheckboxItem";
import { DropdownMenuContent } from "./DropdownMenuContent";
import { DropdownMenuItem } from "./DropdownMenuItem";
import { DropdownMenuLabel } from "./DropdownMenuLabel";
import { DropdownMenuRadioItem } from "./DropdownMenuRadioItem";
import { DropdownMenuSeparator } from "./DropdownMenuSeparator";
import { DropdownMenuShortcut } from "./DropdownMenuShortcut";
import { DropdownMenuSubContent } from "./DropdownMenuSubContent";
import { DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger";

const DropdownMenuRoot = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenu = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuProps) => {
  return <DropdownMenuRoot {...props}>{children}</DropdownMenuRoot>;
};

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem;
DropdownMenu.RadioItem = DropdownMenuRadioItem;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.Shortcut = DropdownMenuShortcut;
DropdownMenu.Group = DropdownMenuGroup;
DropdownMenu.Portal = DropdownMenuPortal;
DropdownMenu.Sub = DropdownMenuSub;
DropdownMenu.SubContent = DropdownMenuSubContent;
DropdownMenu.SubTrigger = DropdownMenuSubTrigger;
DropdownMenu.RadioGroup = DropdownMenuRadioGroup;
