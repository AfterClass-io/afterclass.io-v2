import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

import { modalTheme } from "../Modal.theme";

interface ModalFooterProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export const ModalFooter = ({
  children,
  className,
  ...props
}: PropsWithChildren<ModalFooterProps>) => {
  const { footer } = modalTheme({
    className,
    size: { initial: "sm", md: "md" },
  });

  return (
    <footer className={footer({ className })} {...props}>
      {children}
    </footer>
  );
};
