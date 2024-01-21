import { tagTheme, type TagVariants } from "./Tag.theme";
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  type ComponentPropsWithoutRef,
  type HTMLProps,
  type ReactElement,
  type ReactNode,
} from "react";

export type TagProps = ComponentPropsWithoutRef<"div"> &
  TagVariants & {
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
  };

export const Tag = ({
  contentLeft,
  contentRight,
  children,
  active = false,
  size = "md",
}: TagProps) => {
  const { tag, icon: iconTheme } = tagTheme({
    active,
    size,
  });
  const StyledIcon = useCallback(
    ({ icon }: { icon: ReactNode }) => {
      if (isValidElement(icon)) {
        return Children.map(icon, (child) => {
          const originalClassName = (child.props as HTMLProps<HTMLOrSVGElement>)
            ?.className;
          return cloneElement(child as ReactElement, {
            className: iconTheme({
              size,
              className: originalClassName, // overriding icon classNames
            }),
          });
        });
      }
      return <></>;
    },
    [size, iconTheme],
  );
  return (
    <div className={tag()}>
      <StyledIcon icon={contentLeft} />
      {children && <span>{children}</span>}
      <StyledIcon icon={contentRight} />
    </div>
  );
};
