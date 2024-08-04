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
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    fieldProps?: ComponentPropsWithoutRef<"div">;
    wrapperProps?: ComponentPropsWithoutRef<"div">;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      contentLeft,
      contentRight,
      wrapperProps,
      fieldProps,
      label,
      labelRight,
      helperText,
      isError = false,
      ...props
    },
    ref,
  ) => {
    const { input: inputClasses, wrapper } = inputTheme({
      className,
      size: size || { initial: "sm", md: "md" },
    });
    return (
      <Field
        {...fieldProps}
        label={label}
        labelRight={labelRight}
        isError={isError}
        helperText={helperText}
        size={size}
      >
        <div
          {...wrapperProps}
          className={wrapper({ className: wrapperProps?.className })}
        >
          {contentLeft}
          <input ref={ref} {...props} className={inputClasses({ className })} />
          {contentRight}
        </div>
      </Field>
    );
  },
);

Input.displayName = "Input";
