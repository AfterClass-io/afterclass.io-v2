import { Button } from "@/common/components/Button";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { lockCtaOverlayTheme } from "./LockCtaOverlay.theme";

export const LockCtaOverlay = () => {
  const { wrapper, overlay, ctaTextContainer, icon } = lockCtaOverlayTheme();
  return (
    <div className={overlay()}>
      <div className={wrapper()}>
        <LockIcon className={icon()} />
        <div className={ctaTextContainer()}>
          <Button variant="link" as="a" href="/account/auth/login">
            Login
          </Button>
          <span>to see rating</span>
        </div>
      </div>
    </div>
  );
};
