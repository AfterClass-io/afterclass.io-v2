import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import { type Review } from "@/common/types";

import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { ReviewHeader } from "./ReviewHeader";
import { ReviewModal } from "./ReviewModal";

export type ReviewItemProps = ReviewItemVariants & {
  review: Review;
  isLocked?: boolean;
  variant?: "home" | "professor" | "course";
};

export const ReviewItem = ({
  review,
  isLocked,
  variant = "home",
}: ReviewItemProps) => {
  const { wrapper, body } = reviewItemTheme({
    size: { initial: "sm", md: "md" },
  });

  return (
    <>
      {isLocked ? (
        <div className={wrapper()}>
          <ReviewHeader review={review} variant={variant} />
          <div className={body({ isLocked })}>
            <LockCtaOverlay size="sm" ctaType="review" variant="border" />
          </div>
        </div>
      ) : (
        <ReviewModal
          review={review}
          variant={variant}
          seeMore={variant === "home"}
        />
      )}
    </>
  );
};
