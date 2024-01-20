"use client";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { Button, type ButtonVariants } from "@/common/components/Button";
import {
  BookLineIcon,
  CheckIcon,
  DealsIcon,
  StarLineAltIcon,
  EnvelopeIcon,
  LockIcon,
} from "@/common/components/CustomIcon";
import { Input } from "@/common/components/Input";
import { Checkbox, type CheckedState } from "@/common/components/Checkbox";
import { Popover } from "@/common/components/Popover";
import { Command } from "@/common/components/Command";
import { RatingSection } from "@/common/components/RatingSection";
import { StatItem } from "@/common/components/StatItem";
import formatPercentage from "@/common/functions/formatPercentage";
import { Combobox } from "@/modules/reviews/Combobox";

// TODO: replace with real data
import { exampleListCountries } from "./exampleCountryList";
import { Modal } from "@/common/components/Modal";
import Heading from "@/common/components/Heading";

const exampleListObj = exampleListCountries.map((el) => ({
  value: el.toLowerCase(),
  label: el,
}));

const buttonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "ghost",
  "success",
  "danger",
  "link",
] as ButtonVariants["variant"][];

const CommandContent = () => (
  <>
    <Command.Input placeholder="Type a command or search..." />
    <Command.List>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Suggestions">
        <Command.Item>
          <BookLineIcon className="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </Command.Item>
        <Command.Item>
          <CheckIcon className="mr-2 h-4 w-4" />
          <span>Search Emoji</span>
        </Command.Item>
        <Command.Item>
          <DealsIcon className="mr-2 h-4 w-4" />
          <span>Calculator</span>
        </Command.Item>
      </Command.Group>
      <Command.Separator />
      <Command.Group heading="Settings">
        <Command.Item>
          <EnvelopeIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <Command.Shortcut>⌘P</Command.Shortcut>
        </Command.Item>
        <Command.Item>
          <LockIcon className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <Command.Shortcut>⌘B</Command.Shortcut>
        </Command.Item>
        <Command.Item>
          <StarLineAltIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <Command.Shortcut>⌘S</Command.Shortcut>
        </Command.Item>
      </Command.Group>
    </Command.List>
  </>
);

export default function Components() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggleTheme = useCallback(() => {
    if (theme === APP_THEMES.light) setTheme(APP_THEMES.dark);
    if (theme === APP_THEMES.dark) setTheme(APP_THEMES.light);
  }, [setTheme, theme]);

  const [checkedDefault, setCheckedDefault] =
    useState<CheckedState>("indeterminate");
  const [checkedDisabled, setCheckedDisabled] =
    useState<CheckedState>("indeterminate");

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="space-y-10 p-5 sm:p-10">
      {isMounted && (
        <Button onClick={handleToggleTheme}>
          Toggle theme: Current {theme}
        </Button>
      )}
      <div className="space-y-4">
        <Heading className="text-5xl" as="h1">
          Heading 1
        </Heading>
        <Heading className="text-4xl" as="h2">
          Heading 2
        </Heading>
      </div>
      <Modal>
        <Modal.Trigger asChild>
          <Button variant="primary">Modal (all button variants)</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>All button variants</Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <Button fullWidth>Full width</Button>
              {/* Buttons */}
              {buttonVariants.map((variant) => (
                <div
                  key={variant as string}
                  className="flex max-w-[320px] flex-wrap gap-3"
                >
                  <Button variant={variant}>{variant as string}</Button>
                  <Button
                    variant={variant}
                    size="sm"
                    iconLeft={<StarLineAltIcon />}
                  >
                    Small
                  </Button>
                  <Button
                    variant={variant}
                    aria-label="star"
                    iconLeft={<StarLineAltIcon />}
                  />
                  <Button
                    variant={variant}
                    size="sm"
                    aria-label="star"
                    iconLeft={<StarLineAltIcon />}
                  />
                  <Button variant={variant} loading>
                    {variant as string}
                  </Button>
                  <Button
                    variant={variant}
                    size="sm"
                    iconLeft={<StarLineAltIcon />}
                    loading
                  >
                    Small
                  </Button>
                  <Button
                    variant={variant}
                    aria-label="star"
                    iconLeft={<StarLineAltIcon />}
                    loading
                  />
                  <Button
                    variant={variant}
                    size="sm"
                    aria-label="star"
                    iconLeft={<StarLineAltIcon />}
                    loading
                  />
                  <Button variant={variant} disabled>
                    {variant as string}
                  </Button>
                  <Button
                    variant={variant}
                    size="sm"
                    iconLeft={<StarLineAltIcon />}
                    disabled
                  >
                    Small
                  </Button>
                  <Button
                    variant={variant}
                    aria-label="star"
                    iconLeft={<StarLineAltIcon />}
                    disabled
                  />
                  <Button
                    variant={variant}
                    size="sm"
                    aria-label="star"
                    iconLeft={<StarLineAltIcon />}
                    disabled
                  />
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Content>
      </Modal>

      <div className="space-y-4">
        <Input
          label={"Test Label 1"}
          helperText={"Test helper text"}
          contentLeft={<StarLineAltIcon size={16} />}
          contentRight={<StarLineAltIcon size={16} />}
          placeholder="Write here"
        />
        <Input
          label={"Test Label 2"}
          helperText={"Test error helper text"}
          contentLeft={<StarLineAltIcon size={16} />}
          contentRight={<StarLineAltIcon size={16} />}
          placeholder="Write here"
          size={{ initial: "sm", md: "md" }}
          isError={true}
        />
      </div>
      <div className="flex gap-4">
        {/* 
        to use checkbox in a form:
        <Checkbox
          label="test"
          {...register("fieldName")}
          onCheckedChange={(v: boolean) => setValue("fieldName", v)}
        />
        */}
        <div className="flex flex-col gap-3">
          <Checkbox label="default unchecked" />
          <Checkbox label="default checked" defaultChecked />
          <Checkbox
            label="default indeterminate"
            checked={checkedDefault}
            onCheckedChange={setCheckedDefault}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Checkbox label="disabled unchecked" disabled />
          <Checkbox label="disabled checked" disabled defaultChecked />
          <Checkbox
            label="disabled indeterminate"
            checked={checkedDisabled}
            onCheckedChange={setCheckedDisabled}
            disabled
          />
        </div>
      </div>
      <div className="flex gap-4">
        <Popover>
          <Popover.Trigger asChild>
            <Button variant="primary" as="button" size="sm">
              Popover
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-muted-foreground text-sm">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="width">Width</label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="maxWidth">Max. width</label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="height">Height</label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="maxHeight">Max. height</label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </Popover.Content>
        </Popover>
      </div>
      <div className="flex gap-4">
        {/* <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="primary" as="button">
              Dialog
            </Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                {
                  "Make changes to your profile here. Click save when you're done."
                }
              </Dialog.Description>
            </Dialog.Header>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <div className="col-span-3">
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                  Username
                </label>
                <div className="col-span-3">
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </div>
            </div>
            <Dialog.Footer>
              <Button variant="primary" as="button" type="submit">
                Save changes
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog> */}
      </div>
      <div className="flex max-w-sm gap-8">
        <Command className="">
          <CommandContent />
        </Command>
        <span>OR</span>
        <div>
          <div className="flex flex-col gap-2 text-sm">
            <span>Press</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-base font-medium opacity-100">
              <span>⌘</span>J
            </kbd>
          </div>
          <Command as="dialog" open={open} onOpenChange={setOpen}>
            <CommandContent />
          </Command>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <RatingSection
          headingRatingItem={{ label: "Average Rating", rating: 4.85 }}
          ratingItems={[
            { label: "Engaging", rating: formatPercentage(0.64) },
            { label: "Fair Grading", rating: formatPercentage(0.78) },
            { label: "Knowledgeable", rating: formatPercentage(0.717) },
            { label: "Effective Teaching", rating: formatPercentage(0.78) },
            { label: "Manageable Workload", rating: formatPercentage(0.78) },
          ]}
        />
        <RatingSection
          headingRatingItem={{ label: "Average Rating", rating: 4.85 }}
          ratingItems={[
            { label: "Engaging", rating: formatPercentage(0.64) },
            { label: "Fair Grading", rating: formatPercentage(0.78) },
            { label: "Knowledgeable", rating: formatPercentage(0.71) },
            { label: "Effective Teaching", rating: formatPercentage(0.78) },
            { label: "Manageable Workload", rating: formatPercentage(0.78) },
          ]}
          isLocked={true}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <StatItem label="This is Unlocked" rating="64%" />
          <StatItem label="This is Locked" rating="64%" isLocked={true} />
        </div>
        <div className="flex flex-col items-start gap-4">
          <StatItem label="This is Unlocked" rating="64%" layout="horizontal" />
          <StatItem
            label="This is Locked"
            rating="64%"
            layout="horizontal"
            isLocked={true}
          />
        </div>
      </div>
      <div>
        <Combobox
          placeholder="Search for a Prof..."
          triggerLabel="Select a Prof"
          items={exampleListObj}
        />
        {/* 
        to use Combobox in a form:
        <Combobox
          placeholder="Search for a Prof..."
          triggerLabel="Select a Prof"
          items={exampleListObj}
          onSelectChange={(v) => setValue("fieldName", v)}
          {...register("fieldName")}
        />
        */}
      </div>
    </div>
  );
}
