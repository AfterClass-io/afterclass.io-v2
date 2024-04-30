import { Button } from "@/common/components/Button";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import {
  lockCtaOverlayTheme,
  type LockCtaOverlayVariants,
} from "./LockCtaOverlay.theme";

const ctaTextMap = {
  rating: "to see rating",
  review: "to see review",
} as const;

export type LockCtaOverlayProps = LockCtaOverlayVariants & {
  ctaType?: keyof typeof ctaTextMap;
};

export const LockCtaOverlay = ({
  variant,
  size = "md",
  ctaType = "rating",
}: LockCtaOverlayProps) => {
  const { wrapper, overlay, ctaTextContainer, icon } = lockCtaOverlayTheme({
    variant,
    size,
  });
  return (
    <>
      <div className={overlay()}></div>
      <div className={wrapper()}>
        <LockIcon className={icon()} />
        <div className={ctaTextContainer()}>
          <Button variant="link" as="a" href="/account/auth/login">
            Login
          </Button>
          <span>{ctaTextMap[ctaType]}</span>
        </div>
      </div>
    </>
  );
};
