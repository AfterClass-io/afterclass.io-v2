"use client";
import { useState } from "react";

import { CheckIcon, ChevronDownIcon } from "@/common/components/CustomIcon";
import { Button } from "@/common/components/Button";
import { Command } from "@/common/components/Command";
import { Popover } from "@/common/components/Popover";
import { cn } from "@/common/functions/cn";

export type ComboboxProps = {
  items: { label: string; value: string }[];
  placeholder: string;
  triggerLabel: string;
  onSelectChange?: (selectedValue: string) => void;
};

export const Combobox = ({
  items,
  placeholder,
  triggerLabel,
  onSelectChange,
}: ComboboxProps) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const isMatched = (v: string) => v === value;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="tertiary"
          as="button"
          aria-expanded={open}
          iconRight={<ChevronDownIcon />}
        >
          {value ? items.find((el) => el.value === value)?.label : triggerLabel}
        </Button>
      </Popover.Trigger>
      <Popover.Content variant="combobox">
        <Command variant="combobox">
          <Command.Input placeholder={placeholder} />
          <Command.Separator />
          <Command.Empty>Nothing found.</Command.Empty>
          <Command.Group>
            {items.map((el) => (
              <Command.Item
                id={el.value}
                key={el.value}
                value={el.value}
                onSelect={(selectedValue) => {
                  setValue(selectedValue === value ? "" : selectedValue);
                  setOpen(false);
                  onSelectChange?.(selectedValue);
                }}
                aria-selected={isMatched(el.value)}
                data-selected={isMatched(el.value) ? "" : undefined}
              >
                <CheckIcon
                  className={cn(
                    "text-primary-default",
                    isMatched(el.value) ? "visible" : "invisible",
                  )}
                />
                {el.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command>
      </Popover.Content>
    </Popover>
  );
};
