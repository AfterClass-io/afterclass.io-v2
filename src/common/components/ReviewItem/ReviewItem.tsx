import {
  ReviewHeader,
  reviewItemTheme,
  type ReviewItemVariants,
} from "./index";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import ReviewModal from "@/common/components/ReviewModal/ReviewModal";
import { type Review } from "@/common/types";
// TODO: to replace with prisma generated types
export type ReviewLabel = {
  name: string;
};

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
    <div>
      {isLocked ? (
        <div className={wrapper()}>
          <ReviewHeader review={review} variant={variant} />
          <div className={body()}>
            <LockCtaOverlay size="sm" ctaType="review" variant="border" />
          </div>
        </div>
      ) : (
        <ReviewModal review={review} variant={variant} seeMore={true} />
      )}
    </div>
  );
};
