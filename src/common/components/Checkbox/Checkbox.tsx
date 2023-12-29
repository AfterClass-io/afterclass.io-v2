"use client";

import { useState, useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@/common/components/CustomIcon";
import {
  checkboxTheme,
  type CheckboxVariants,
} from "@/common/components/Checkbox";

export type CheckboxProps = CheckboxVariants &
  CheckboxPrimitive.CheckboxProps & {
    label: string;
    indeterminate?: boolean;
  };

export const Checkbox = ({
  label,
  className,
  size = "md",
  disabled = false,
  indeterminate = false,
  defaultChecked,
  checked: initialCheckedState,
  ...props
}: CheckboxProps) => {
  const initialState = () => {
    if (initialCheckedState !== undefined) return initialCheckedState;
    if (defaultChecked !== undefined) return defaultChecked;
    return indeterminate ? "indeterminate" : false;
  };
  const [checked, setChecked] = useState(initialState());
  const id = useId();
  const {
    wrapper,
    checkboxRoot,
    checkboxIndicator,
    checkboxIndicatorIcon,
    label: labelContainer,
  } = checkboxTheme({
    className,
    size,
    disabled,
  });

  return (
    <div className={wrapper()}>
      <CheckboxPrimitive.Root
        id={id}
        disabled={disabled}
        checked={checked}
        onCheckedChange={setChecked}
        className={checkboxRoot()}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={checkboxIndicator()}>
          {checked === "indeterminate" && (
            <MinusIcon className={checkboxIndicatorIcon()} />
          )}
          {checked === true && (
            <CheckIcon className={checkboxIndicatorIcon()} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label htmlFor={id} className={labelContainer()}>
          {label}
        </label>
      )}
    </div>
  );
};
