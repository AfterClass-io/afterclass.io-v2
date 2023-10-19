import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { type InputVariants, inputTheme } from "./Input.theme";
import { Field, type FieldProps } from "@/common/components/Field";

export type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> &
  InputVariants &
  FieldProps & {
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    fieldProps?: ComponentPropsWithoutRef<"div">;
    wrapperProps?: ComponentPropsWithoutRef<"div">;
  };

export const Input = ({
  className,
  size = "md",
  leftContent,
  rightContent,
  wrapperProps,
  fieldProps,
  label,
  helperText,
  isError = false,
  ...props
}: InputProps) => {
  const { input: inputClasses, wrapper } = inputTheme({ className, size });
  return (
    <Field
      {...fieldProps}
      label={label}
      isError={isError}
      helperText={helperText}
    >
      <div
        {...wrapperProps}
        className={wrapper({ className: wrapperProps?.className })}
      >
        {leftContent}
        <input {...props} className={inputClasses({ className })} />
        {rightContent}
      </div>
    </Field>
  );
};
