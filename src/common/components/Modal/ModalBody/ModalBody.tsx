import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

import { modalTheme } from "@/common/components/Modal/Modal.theme";
import { useModal } from "@/common/components/Modal/ModalProvider";

interface ModalBodyProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export const ModalBody = ({
  children,
  className,
  ...props
}: PropsWithChildren<ModalBodyProps>) => {
  const { body } = modalTheme();
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
