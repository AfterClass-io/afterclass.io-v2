import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

import { modalTheme } from "@/common/components/Modal/Modal.theme";

interface ModalBodyProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export const ModalBody = ({
  children,
  className,
  ...props
}: PropsWithChildren<ModalBodyProps>) => {
  const { body } = modalTheme();

  return (
    <div
      className={body({
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
