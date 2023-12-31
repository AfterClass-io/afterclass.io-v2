"use client";

import * as React from "react";

import { CheckIcon, ChevronDownIcon } from "@/common/components/CustomIcon";
import { cn } from "@/common/tools/tailwind/functions/cn";
import { Button } from "@/common/components/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/common/components/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/Popover";

export type ComboboxProps = {
  placeholder: string;
  filtered: { label: string; value: string }[];
  value: string;
  setValue: (arg0: string) => void;
  open: boolean;
  setOpen: (arg0: boolean) => void;
};

export function Combobox({
  placeholder,
  filtered,
  value,
  setValue,
  open,
  setOpen,
}: ComboboxProps) {
  console.log(value);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="tertiary"
          as="button"
          aria-expanded={open}
          className="w-[200px] justify-between"
          iconRight={
            <ChevronDownIcon className="h-6 w-6 shrink-0 opacity-50" />
          }
        >
          {value
            ? filtered.find(
                (el) => el.value.toLowerCase() === value.toLowerCase(),
              )?.label
            : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-h-60 w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>Nothing found.</CommandEmpty>
          <CommandGroup>
            {filtered.map((el) => (
              <CommandItem
                key={el.value}
                value={el.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === el.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {el.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
