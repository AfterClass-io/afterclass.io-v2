import { Button } from "@/common/components/Button";
import { EditIcon, PlusIcon } from "@/common/components/CustomIcon";

import { type CtaCardVariants, ctaCardTheme } from "./CtaCard.theme";

export type CtaCardProps = CtaCardVariants & {
  ctaText: string;
};

export const CtaCard = ({
  ctaText,
  variant = "primary",
  ...props
}: CtaCardProps) => {
  const { button, ctaWrapper, cta, icon } = ctaCardTheme({ variant, ...props });
  return (
    <Button variant="ghost" className={button()}>
      <div className={ctaWrapper()}>
        <PlusIcon className={icon()} />
        <span className={cta()}>{ctaText}</span>
      </div>
      <EditIcon className={icon()} />
    </Button>
  );
};
