import { type ComponentProps, type ElementType, type ReactNode } from "react";

type AuthCardProps<T extends ElementType = ElementType> = {
  as?: T;
  title?: string;
  children?: ReactNode;
};

const defaultElement = "h1";

type TitleProps<T extends ElementType> = AuthCardProps<T> &
  Omit<ComponentProps<T>, keyof AuthCardProps<T>>;

export const AuthCard = <T extends ElementType = typeof defaultElement>({
  children,
  title = "Login",
  as,
  ...rest
}: TitleProps<T>) => {
  const Title = as || defaultElement;
  return (
    <div className="mt-10 flex w-96 min-w-fit flex-col gap-y-5 rounded-lg bg-bg-alt px-4 py-5">
      <Title className="text-lg font-bold text-text-em-high" {...rest}>
        {title}
      </Title>
      <div>{children}</div>
    </div>
  );
};

AuthCard.displayName = "AuthCard";
