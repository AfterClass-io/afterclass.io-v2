"use client";
import { useState } from "react";

import { CheckIcon, ChevronDownIcon } from "@/common/components/CustomIcon";
import { Button } from "@/common/components/Button";
import { Command } from "@/common/components/Command";
import { Popover } from "@/common/components/Popover";

// TODO: replace with real data
import { exampleListCountries } from "./exampleCountryList";

export function ProfCombobox() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  // TODO: replace with data fetching
  const filtered = exampleListCountries.map((el) => ({
    value: el.toLowerCase(),
    label: el,
  }));
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
            ? filtered.find((el) => el.value === value)?.label
            : "Select a Prof"}
        </Button>
      </Popover.Trigger>
      <Popover.Content variant="combobox">
        <Command variant="combobox">
          <Command.Input placeholder="Search for a Prof..." />
          <Command.Empty>Nothing found.</Command.Empty>
          <Command.Group>
            {filtered.map((el) => (
              <Command.Item
                key={el.value}
                value={el.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
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
}
