"use client";

import { forwardRef, useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@/common/components/CustomIcon";
import { checkboxTheme, type CheckboxVariants } from "./Checkbox.theme";

export type CheckedState = CheckboxPrimitive.CheckedState;

export type CheckboxProps = CheckboxVariants &
  CheckboxPrimitive.CheckboxProps & {
    label?: string;
  };

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, className, size = "md", disabled = false, ...props }, ref) => {
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
          className={checkboxRoot()}
          {...props}
          ref={ref}
        >
          <CheckboxPrimitive.Indicator className={checkboxIndicator()}>
            {props.checked === "indeterminate" ? (
              <MinusIcon className={checkboxIndicatorIcon()} />
            ) : (
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
  },
);

Checkbox.displayName = "Checkbox";
