import Link from "next/link";
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  useCallback,
  isValidElement,
  Children,
  type HTMLProps,
  cloneElement,
  type ReactElement,
} from "react";

import {
  buttonIconTheme,
  buttonTheme,
  type ButtonVariants,
} from "./Button.theme";

interface ButtonBaseProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isResponsive?: boolean;
}

export interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  as?: "a";
  external?: boolean;
  href: string;
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  as?: "button";
}

// Discriminated union based on "as" prop
export type ButtonOrLinkProps = (ButtonLinkProps | ButtonProps) &
  ButtonBaseProps &
  Omit<ButtonVariants, "hasIcon" | "iconOnly">;

export const Button = ({
  children,
  iconLeft,
  iconRight,
  isResponsive = false,
  ...props
}: ButtonOrLinkProps) => {
  // Conditionally render between <NextLink>, <a> or <button> depending on props
  // useCallback to prevent unnecessary re-rendering
  const Component = useCallback(
    ({ children: _children, ..._props }: ButtonOrLinkProps) => {
      // Accessing .as instead of destructuring to make use of discriminated unions
      // https://github.com/microsoft/TypeScript/issues/46318
      if (_props.as === "a") {
        // Has an unused `as` to remove it from baseLinkProps
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { external, href, as, ...baseLinkProps } = _props;

        // External link
        if (external) {
          const externalLinkProps = {
            target: "_blank",
            rel: "noopener",
            href,
            ...baseLinkProps,
          };
          return <a {...externalLinkProps}>{_children}</a>;
        }

        // Internal link
        return (
          <Link {...baseLinkProps} href={href}>
            {_children}
          </Link>
        );
      } else {
        const buttonProps = _props as ButtonProps;
        return <button {...buttonProps}>{_children}</button>;
      }
    },
    []
  );

  // Self invoking function to pick only props used in ButtonVariants
  const styleProps = (({
    variant = "primary",
    iconOnly,
    size = "md",
    as,
    fullWidth = false,
    disabled = false,
  }) => ({
    variant,
    iconOnly,
    size,
    as,
    fullWidth,
    disabled,
  }))({
    ...props,
    iconOnly: typeof children === "undefined",
    hasIcon: !!iconLeft || !!iconRight,
  });

  // throw error to pass aria-label if button is icon only
  if (typeof children === "undefined" && !props["aria-label"]) {
    throw new Error(
      "Button must have a label if it is icon only. Please add an aria-label prop."
    );
  }

  const StyledIcon = useCallback(
    ({ icon }: { icon: ReactNode }) => {
      if (isValidElement(icon)) {
        return Children.map(icon, (child) => {
          const originalClassName = (child.props as HTMLProps<HTMLOrSVGElement>)
            ?.className;
          return cloneElement(child as ReactElement, {
            className: buttonIconTheme({
              size: styleProps?.size,
              className: originalClassName, // overriding icon classNames
            }),
          });
        });
      }
      return <></>;
    },
    [styleProps?.size]
  );

  return (
    <Component
      {...props}
      className={buttonTheme({
        ...styleProps,
        ...(isResponsive && {
          size: { initial: "md", sm: "sm", md: "md" },
        }),
        className: props.className,
      })}
      data-disabled={props?.disabled ? "" : undefined}
    >
      <StyledIcon icon={iconLeft} />
      {children}
      <StyledIcon icon={iconRight} />
    </Component>
  );
};
