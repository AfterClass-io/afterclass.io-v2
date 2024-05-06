import {
  Button,
  type ButtonVariants,
  type ButtonLinkOrAnchorProps,
} from "@/common/components/Button";
import { EditIcon, PlusIcon } from "@/common/components/CustomIcon";

import { type CtaCardVariants, ctaCardTheme } from "./CtaCard.theme";

export type CtaCardProps = CtaCardVariants &
  ButtonVariants &
  ButtonLinkOrAnchorProps & {
    ctaText: string;
  };

export const CtaCard = ({ ctaText, variant, ...props }: CtaCardProps) => {
  const { button, ctaWrapper, cta, icon } = ctaCardTheme({ variant });
  return (
    <Button variant={variant} as="a" className={button()} asChild {...props}>
      <div className={ctaWrapper()}>
        <PlusIcon className={icon()} />
        <span className={cta()}>{ctaText}</span>
      </div>
      <EditIcon className={icon()} />
    </Button>
  );
};
