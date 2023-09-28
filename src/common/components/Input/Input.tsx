import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { type InputVariants, inputTheme } from "./Input.theme";

export type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> &
  InputVariants & {
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    wrapperProps?: ComponentPropsWithoutRef<"div">;
  };

export const Input = ({
  className,
  size = "md",
  leftContent,
  rightContent,
  wrapperProps,
  ...props
}: InputProps) => {
  const { input: inputClasses, wrapper } = inputTheme({ className, size });
  return (
    <div
      {...wrapperProps}
      className={wrapper({ className: wrapperProps?.className })}
    >
      {leftContent}
      <input {...props} className={inputClasses({ className })} />
      {rightContent}
    </div>
  );
};
