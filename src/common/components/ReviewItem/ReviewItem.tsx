import { ReviewHeader } from "./ReviewHeader";
import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import { ReviewModal } from "@/common/components/ReviewModal";
import { type Review } from "@/common/types";

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
  const { wrapper, body } = reviewItemTheme();

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
