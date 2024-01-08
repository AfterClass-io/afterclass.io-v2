"use client";

import { ComponentPropsWithoutRef } from "react";

import { CheckIcon, ChevronDownIcon } from "@/common/components/CustomIcon";
import { Button } from "@/common/components/Button";
import { Command } from "@/common/components/Command";
import { Popover } from "@/common/components/Popover";
import { comboboxTheme, type ComboboxVariants } from "./Combobox.theme";

export type ComboboxProps = ComboboxVariants & {
  placeholder: string;
  filtered: { label: string; value: string }[];
  value: string;
  setValue: (arg0: string) => void;
  open: boolean;
  setOpen: (arg0: boolean) => void;
  popoverTriggerButtonProps?: ComponentPropsWithoutRef<"button">;
  popoverTriggerIconProps?: ComponentPropsWithoutRef<"svg">;
  popoverContentProps?: ComponentPropsWithoutRef<"div">;
  commandInputProps?: ComponentPropsWithoutRef<"input">;
  commandEmptyProps?: ComponentPropsWithoutRef<"div">;
  commandGroupProps?: ComponentPropsWithoutRef<"div">;
  commandItemProps?: ComponentPropsWithoutRef<"div">;
};

export function Combobox({
  placeholder,
  filtered,
  value,
  setValue,
  open,
  setOpen,
  popoverTriggerButtonProps,
  popoverTriggerIconProps,
  popoverContentProps,
  commandInputProps,
  commandEmptyProps,
  commandGroupProps,
  commandItemProps,
}: ComboboxProps) {
  const {
    popoverTriggerButton,
    popoverTriggerIcon,
    popoverContent,
    commandInput,
    commandItemSelectedIcon,
    commandEmpty,
    commandGroup,
    commandItem,
  } = comboboxTheme();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="tertiary"
          as="button"
          aria-expanded={open}
          className={popoverTriggerButton({
            className: popoverTriggerButtonProps?.className,
          })}
          iconRight={
            <ChevronDownIcon
              className={popoverTriggerIcon({
                className: popoverTriggerIconProps?.className,
              })}
            />
          }
        >
          {value
            ? filtered.find(
                (el) => el.value.toLowerCase() === value.toLowerCase(),
              )?.label
            : placeholder}
        </Button>
      </Popover.Trigger>
      <Popover.Content
        className={popoverContent({
          className: popoverContentProps?.className,
        })}
      >
        <Command>
          <Command.Input
            placeholder={placeholder}
            className={commandInput({
              className: commandInputProps?.className,
            })}
          />
          <Command.Empty
            className={commandEmpty({
              className: commandEmptyProps?.className,
            })}
          >
            Nothing found.
          </Command.Empty>
          <Command.Group
            className={commandGroup({
              className: commandGroupProps?.className,
            })}
          >
            {filtered.map((el) => (
              <Command.Item
                key={el.value}
                value={el.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
                className={commandItem({
                  className: commandItemProps?.className,
                })}
              >
                <CheckIcon
                  className={commandItemSelectedIcon({
                    selected: el.value.toLowerCase() === value.toLowerCase(),
                  })}
                />
                {el.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command>
      </Popover.Content>
    </Popover>
  );
}
