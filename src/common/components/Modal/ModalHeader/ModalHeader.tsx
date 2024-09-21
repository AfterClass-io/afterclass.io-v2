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
import { cn } from "@/common/functions";
import { modalTheme } from "../Modal.theme";

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
  const { header, headerDescription } = modalTheme({
    size: { initial: "sm", md: "md" },
  });

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
