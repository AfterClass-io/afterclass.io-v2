import { Icon } from "@iconify-icon/react";
import {
  Portal,
  Content,
  type DialogContentProps,
  Close,
  Overlay,
} from "@radix-ui/react-dialog";
import { type PropsWithChildren } from "react";
import { Button } from "@/common/components/Button";

import { modalTheme } from "@/common/components/Modal/Modal.theme";
import { useModal } from "@/common/components/Modal/ModalProvider";

type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent;
}>;

export interface ModalContentProps extends DialogContentProps {
  className?: string;
}

export const ModalContent = ({
  children,
  className,
  ...props
}: PropsWithChildren<ModalContentProps>) => {
  const { hasCloseButton, preventClickOutsideToClose, variant, overflow } =
    useModal();

  const { content, close, overlay } = modalTheme({ variant, overflow });

  const preventClickOutsideToCloseProps = preventClickOutsideToClose && {
    onPointerDownOutside: (e: PointerDownOutsideEvent) => e.preventDefault(),
    onEscapeKeyDown: (e: KeyboardEvent) => e.preventDefault(),
  };

  return (
    <Portal>
      <Overlay className={overlay()}>
        <Content
          className={content({ className })}
          {...preventClickOutsideToCloseProps}
          {...props}
        >
          {children}
          {hasCloseButton && (
            <Close asChild>
              <Button
                className={close()}
                variant="ghost"
                iconLeft={
                  <Icon
                    icon="ph:x-bold"
                    className="stroke-current"
                    height="none"
                  />
                }
                aria-label="close"
                size="sm"
              />
            </Close>
          )}
        </Content>
      </Overlay>
    </Portal>
  );
};
