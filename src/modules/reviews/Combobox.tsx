"use client";
import { useState } from "react";

import { CheckIcon, ChevronDownIcon } from "@/common/components/CustomIcon";
import { Button } from "@/common/components/Button";
import { Command } from "@/common/components/Command";
import { Popover } from "@/common/components/Popover";

export type ComboboxProps = {
  items: { label: string; value: string }[];
  onSelectChange?: (selectedValue: string) => void;
};

export const Combobox = ({ items, onSelectChange }: ComboboxProps) => {
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
          {value
            ? items.find((el) => el.value === value)?.label
            : "Select a Prof"}
        </Button>
      </Popover.Trigger>
      <Popover.Content variant="combobox">
        <Command variant="combobox">
          <Command.Input placeholder="Search for a Prof..." />
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
              >
                <CheckIcon
                  className={isMatched(el.value) ? "opacity-100" : "opacity-0"}
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
