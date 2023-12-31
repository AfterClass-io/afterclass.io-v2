"use client";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify-icon/react";

import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { Button, type ButtonVariants } from "@/common/components/Button";
import { StarLineAltIcon } from "@/common/components/CustomIcon";
import { Input } from "@/common/components/Input";
import { Checkbox, type CheckedState } from "@/common/components/Checkbox";
import { Popover } from "@/common/components/Popover";

const buttonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "ghost",
  "success",
  "danger",
  "link",
] as ButtonVariants["variant"][];

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

  return (
    <div className="space-y-10 p-5 sm:p-10">
      {isMounted && (
        <button
          className="mx-auto flex items-center gap-2 rounded-md bg-primary-default p-3 text-text-on-primary"
          // data-theme="light"
          onClick={handleToggleTheme}
        >
          <Icon icon="uil:chart-line" width={16} />
          <StarLineAltIcon size={16} />
          <span>Toggle theme: Current {theme}</span>
        </button>
      )}
      <div className="space-y-4">
        <Button fullWidth>Full width</Button>
        {/* Buttons */}
        {buttonVariants.map((variant) => (
          <div
            key={variant as string}
            className="flex max-w-[320px] flex-wrap gap-3"
          >
            <Button variant={variant}>{variant as string}</Button>
            <Button variant={variant} size="sm" iconLeft={<StarLineAltIcon />}>
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
        <Popover
          popoverTriggerProps={{ asChild: true }}
          trigger={
            <Button variant="primary" as="button" size="sm">
              Popover
            </Button>
          }
        >
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
        </Popover>
      </div>
    </div>
  );
}
