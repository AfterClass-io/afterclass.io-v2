import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { WarningCircleIcon } from "@/common/components/CustomIcon";
import { Label } from "@/common/components/Label";
import { fieldTheme } from "./Field.theme";

export type FieldProps = {
  label?: string;
  children?: ReactNode;
  isError?: boolean;
  helperText?: string;
};

export type FieldFullProps = ComponentPropsWithoutRef<"div"> & FieldProps;

export const Field = ({
  label,
  children,
  helperText,
  isError = false,
  ...props
}: FieldFullProps) => {
  const { wrapper } = fieldTheme();
  return (
    <div {...props} className={wrapper()}>
      {label && <Label text={label} size={{ initial: "sm", md: "md" }} />}
      {children}
      {helperText && (
        <Label
          leftContent={<WarningCircleIcon size={12} />}
          text={helperText}
          size={{ initial: "sm", md: "md" }}
          isError={isError}
        />
      )}
    </div>
  );
};
