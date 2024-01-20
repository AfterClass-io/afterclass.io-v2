import {
  Title,
  Description,
  type DialogDescriptionProps,
} from "@radix-ui/react-dialog";
import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

import {
  Heading,
  type HeadingProps,
} from "@/common/components/Heading/Heading";
import { modalTheme } from "@/common/components/Modal/Modal.theme";
import { cn } from "@/common/functions/cn";

export interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  description?: string | React.ReactNode;
  descriptionProps?: DialogDescriptionProps;
  headingProps?: HeadingProps<"h2">;
}

export const ModalHeader = ({
  children,
  description,
  className,
  descriptionProps,
  headingProps,
  ...props
}: PropsWithChildren<ModalHeaderProps>) => {
  const { header, headerDescription } = modalTheme();

  return (
    <div
      className={header({
        className,
      })}
      {...props}
    >
      <Title asChild className={cn(headingProps?.className)} {...headingProps}>
        <Heading as="h2">{children}</Heading>
      </Title>
      {description && (
        <Description
          className={headerDescription({
            className: descriptionProps?.className,
          })}
          {...descriptionProps}
        >
          {description}
        </Description>
      )}
    </div>
  );
};
