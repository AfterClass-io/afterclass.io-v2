import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { WarningCircleIcon } from "@/common/components/CustomIcon";
import { LabelVariants } from "@/common/components/Label/Label.theme";
import { Label } from "@/common/components/Label";
import { fieldTheme } from "./Field.theme";

export type FieldProps = {
  label?: string;
  children?: ReactNode;
  isError?: boolean;
  helperText?: string;
};

export type FieldFullProps = ComponentPropsWithoutRef<"div"> &
  FieldProps &
  LabelVariants;

export const Field = ({
  label,
  children,
  helperText,
  isError = false,
  size,
  ...props
}: FieldFullProps) => {
  const { wrapper } = fieldTheme();
  return (
    <div {...props} className={wrapper()}>
      {label && <Label text={label} size={size} />}
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
