import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { WarningCircleIcon } from "@/common/components/CustomIcon";
import { Label, type LabelVariants } from "@/common/components/Label";
import { fieldTheme } from "./Field.theme";

export type FieldProps = {
  label?: string;
  labelRight?: ReactNode;
  children?: ReactNode;
  isError?: boolean;
  helperText?: string;
};

export type FieldFullProps = ComponentPropsWithoutRef<"div"> &
  FieldProps &
  LabelVariants;

export const Field = ({
  label,
  labelRight,
  children,
  helperText,
  isError = false,
  size,
  className,
  ...props
}: FieldFullProps) => {
  const { labelContainer, wrapper } = fieldTheme();
  return (
    <div className={wrapper({ className })} {...props}>
      <div className={labelContainer()}>
        {label && <Label text={label} size={size} />}
        {labelRight}
      </div>
      {children}
      {helperText && (
        <Label
          leftContent={<WarningCircleIcon size={14} />}
          text={helperText}
          size={size}
          isError={isError}
        />
      )}
    </div>
  );
};
