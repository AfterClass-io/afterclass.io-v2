import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { WarningCircleIcon } from "@/common/components/CustomIcon";
import { Label, type LabelVariants } from "@/common/components/Label";
import { fieldTheme } from "./Field.theme";

export type FieldProps = {
  label?: string;
  labelDataTestId?: string;
  labelRight?: ReactNode;
  children?: ReactNode;
  isError?: boolean;
  helperText?: string;
  helperTextDataTestId?: string;
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
  labelDataTestId,
  helperTextDataTestId,
  ...props
}: FieldFullProps) => {
  const { labelContainer, wrapper } = fieldTheme();
  return (
    <div className={wrapper({ className })} {...props}>
      {label && (
        <div className={labelContainer()}>
          <Label text={label} size={size} data-test={labelDataTestId} />
          {labelRight}
        </div>
      )}
      {children}
      {helperText && (
        <Label
          leftContent={<WarningCircleIcon size={14} />}
          text={helperText}
          size={size}
          isError={isError}
          data-test={helperTextDataTestId}
        />
      )}
    </div>
  );
};
