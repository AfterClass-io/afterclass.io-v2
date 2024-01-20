import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

import { modalTheme } from "@/common/components/Modal/Modal.theme";

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
  });

  return (
    <footer className={footer({ className })} {...props}>
      {children}
    </footer>
  );
};
