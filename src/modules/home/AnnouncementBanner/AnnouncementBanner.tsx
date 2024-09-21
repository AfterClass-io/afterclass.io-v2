"use client";
import { usePostHog } from "posthog-js/react";

import { XCloseIcon } from "@/common/components/CustomIcon";
import { Button } from "@/common/components/Button";
import { useEffect, useState } from "react";

export const AnnouncementsBanner = () => {
  const posthog = usePostHog();

  const isFirstTimePromptRevertUi = posthog.isFeatureEnabled(
    "onboarding_revert_old_ui",
  );

  const [isShown, setIsShown] = useState(false);

  useEffect(
    () => setIsShown(!!isFirstTimePromptRevertUi),
    [isFirstTimePromptRevertUi],
  );

  const handleClose = () => {
    setIsShown(false);
    posthog.capture("onboarding_revert_old_ui", {
      $set: { onboarding_revert_old_ui_closed: true },
    });
  };

  return (
    isShown && (
      <div className="relative flex w-full items-center justify-center gap-2 bg-primary-dark">
        <span>We have a new look!</span>
        <span>Missed the old AfterClass?</span>
        <Button
          as="a"
          variant="link"
          className="inline-flex pb-[1px] text-text-on-primary underline hover:text-secondary-default"
          href="https://old.afterclass.io"
          external
        >
          Bring me back
        </Button>
        <Button
          variant="ghost"
          className="absolute right-0 inline text-text-on-primary hover:bg-transparent hover:after:bg-transparent"
          iconLeft={<XCloseIcon className="h-4 w-4" />}
          aria-label="close"
          onClick={handleClose}
        />
      </div>
    )
  );
};
