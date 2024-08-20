import {
  type ReactNode,
  type ReactElement,
  isValidElement,
  cloneElement,
} from "react";

import {
  Button,
  type ButtonVariants,
  type ButtonLinkOrAnchorProps,
} from "@/common/components/Button";

import { type CtaCardVariants, ctaCardTheme } from "./CtaCard.theme";

export type CtaCardProps = CtaCardVariants &
  ButtonVariants &
  ButtonLinkOrAnchorProps & {
    ctaText: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

export const CtaCard = ({ ctaText, ...props }: CtaCardProps) => {
  const { button, ctaWrapper, cta, icon } = ctaCardTheme();
  const renderIcon = (iconElement: ReactNode) => {
    if (isValidElement(iconElement)) {
      return cloneElement(iconElement as ReactElement, { className: icon() });
    }
    return null;
  };

  return (
    <Button as="a" className={button()} asChild {...props}>
      <div className={ctaWrapper()}>
        {renderIcon(props.leftIcon)}
        <span className={cta()}>{ctaText}</span>
      </div>
      {renderIcon(props.rightIcon)}
    </Button>
  );
};
