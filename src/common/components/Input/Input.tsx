import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { type InputVariants, inputTheme } from "./Input.theme";
import { Field, type FieldProps } from "@/common/components/Field";
import { type UseFormRegisterReturn } from "react-hook-form";

export type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> &
  InputVariants &
  FieldProps & {
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    fieldProps?: ComponentPropsWithoutRef<"div">;
    wrapperProps?: ComponentPropsWithoutRef<"div">;
    registerFormProps?: UseFormRegisterReturn;
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
  registerFormProps,
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
      size={size}
    >
      <div
        {...wrapperProps}
        className={wrapper({ className: wrapperProps?.className })}
      >
        {leftContent}
        <input
          {...props}
          {...registerFormProps}
          className={inputClasses({ className })}
        />
        {rightContent}
      </div>
    </Field>
  );
};
