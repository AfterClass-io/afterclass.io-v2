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
  title,
  as,
  onSubmit,
  ...rest
}: TitleProps<T>) => {
  const Title = as || defaultElement;
  return (
    <div className="flex max-w-screen-sm flex-[1_0_0] flex-col items-start gap-6 rounded-2xl bg-bg-base p-12">
      <Title className="text-3xl font-semibold text-text-em-high" {...rest}>
        {title}
      </Title>
      <form className="flex w-full flex-col gap-6" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

AuthCard.displayName = "AuthCard";
