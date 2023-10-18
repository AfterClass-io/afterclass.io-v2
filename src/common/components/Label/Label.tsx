import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { type LabelVariants, labelTheme } from "./Label.theme";

export type LabelProps = ComponentPropsWithoutRef<"div"> &
  LabelVariants & {
    text: string;
    isError?: boolean;
    leftContent?: ReactNode;
    wrapperProps?: ComponentPropsWithoutRef<"div">;
  };

export const Label = ({
  className,
  size = "md",
  isError = false,
  text,
  leftContent,
  wrapperProps,
  ...props
}: LabelProps) => {
  const { label, wrapper } = labelTheme({ className, size });
  return (
    <div
      {...wrapperProps}
      className={wrapper({
        className: wrapperProps?.className,
        error: isError,
      })}
    >
      {leftContent}
      <div {...props} className={label({ className })}>
        {text}
      </div>
    </div>
  );
};
