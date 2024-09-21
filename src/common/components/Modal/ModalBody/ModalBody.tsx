import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

import { modalTheme } from "../Modal.theme";
import { useModal } from "../ModalProvider";

interface ModalBodyProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export const ModalBody = ({
  children,
  className,
  ...props
}: PropsWithChildren<ModalBodyProps>) => {
  const { body } = modalTheme({ size: { initial: "sm", md: "md" } });
  const { overflow } = useModal();

  return (
    <div
      className={body({
        className,
        overflow,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
