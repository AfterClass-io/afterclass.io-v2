import * as React from "react";

import { inputTheme, type InputVariants } from "./Input.theme";

export type InputProps = Omit<React.ComponentPropsWithRef<"input">, "size"> &
  InputVariants & {
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    wrapperProps?: React.ComponentPropsWithoutRef<"div">;
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size,
      contentLeft,
      contentRight,
      wrapperProps,
      ...props
    },
    ref,
  ) => {
    const { input: inputClasses, wrapper } = inputTheme({
      size: size ?? { initial: "sm", md: "md" },
    });
    return (
      <div
        {...wrapperProps}
        className={wrapper({ className: wrapperProps?.className })}
      >
        {contentLeft}
        <input
          type={type}
          ref={ref}
          {...props}
          className={inputClasses({ className })}
        />
        {contentRight}
      </div>
    );
  },
);
Input.displayName = "Input";
