import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  forwardRef,
} from "react";
import { type InputVariants, inputTheme } from "./Input.theme";
import { Field, type FieldProps } from "@/common/components/Field";

export type InputProps = Omit<ComponentPropsWithRef<"input">, "size"> &
  InputVariants &
  FieldProps & {
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    fieldProps?: ComponentPropsWithoutRef<"div">;
    wrapperProps?: ComponentPropsWithoutRef<"div">;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
    },
    ref,
  ) => {
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
          <input ref={ref} {...props} className={inputClasses({ className })} />
          {rightContent}
        </div>
      </Field>
    );
  },
);

Input.displayName = "Input";
