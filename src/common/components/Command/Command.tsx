"use client";

import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ComponentPropsWithRef,
} from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";

import { SearchIcon } from "@/common/components/CustomIcon";
import { Dialog } from "@/common/components/Dialog";
import { commandTheme } from "./Command.theme";

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  const { commandInputWrapper, commandInputIcon, commandInput } =
    commandTheme();
  return (
    <div className={commandInputWrapper()} cmdk-input-wrapper="">
      <SearchIcon className={commandInputIcon()} />
      <CommandPrimitive.Input
        ref={ref}
        className={commandInput({ className })}
        {...props}
      />
    </div>
  );
});
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={commandTheme().commandList({ className })}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={commandTheme().commandEmpty()}
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={commandTheme().commandGroup({ className })}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={commandTheme().commandSeparator({ className })}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={commandTheme().commandItem({ className })}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={commandTheme().commandShortcut({ className })}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

interface CommandProps extends ComponentPropsWithRef<typeof CommandPrimitive> {
  as?: "command";
}

const CommandRoot = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={commandTheme().command({ className })}
    {...props}
  />
));
CommandRoot.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {
  as?: "dialog";
}

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  const { commandDialog, commandDialogContent } = commandTheme();
  return (
    <Dialog {...props}>
      <Dialog.Content className={commandDialogContent()}>
        <CommandRoot className={commandDialog()}>{children}</CommandRoot>
      </Dialog.Content>
    </Dialog>
  );
};

export const Command = (props: CommandProps | CommandDialogProps) => {
  if (props.as === "dialog") {
    // const { as, ..._props } = props;
    return <CommandDialog {...props} />;
  } else {
    // const { as, ..._props } = props as CommandProps;
    return <CommandRoot {...props} />;
  }
};

Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Item = CommandItem;
Command.Shortcut = CommandShortcut;
Command.Separator = CommandSeparator;
