import { useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@/common/components/CustomIcon";
import { CheckboxVariants, checkboxTheme } from "@/common/components/Checkbox";

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
  ...props
}: CheckboxProps) => {
  const id = useId();
  const {
    wrapper,
    checkboxRoot,
    checkboxIndicator,
    checkIcon,
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
      >
        <CheckboxPrimitive.Indicator className={checkboxIndicator()}>
          <CheckIcon className={checkIcon()} />
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
