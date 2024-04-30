import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  useCallback,
  Children,
  cloneElement,
  type ReactElement,
  isValidElement,
  type HTMLProps,
} from "react";
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
  const { label, wrapper, icon } = labelTheme({ className, size });

  const StyledIcon = useCallback(
    () =>
      Children.map(leftContent, (child) => {
        if (isValidElement(child)) {
          // Casting type as HTMLDiv to prevent typing error
          const originalClassName = (child.props as HTMLProps<HTMLDivElement>)
            ?.className;
          return cloneElement(child as ReactElement, {
            className: icon({
              className: originalClassName, // overriding icon classNames
            }),
          });
        }
      }),
    [leftContent, icon],
  );

  return (
    <div
      {...wrapperProps}
      className={wrapper({
        className: wrapperProps?.className,
        error: isError,
      })}
    >
      <StyledIcon />
      <div {...props} className={label({ className })}>
        {text}
      </div>
    </div>
  );
};
