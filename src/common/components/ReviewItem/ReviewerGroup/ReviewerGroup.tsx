import { type Review } from "@/common/types";
import { Profile } from "@/common/components/Profile";
import { getHumanReadableTimestampDelta } from "@/common/functions";

import { MockedReviewLikeButton, ReviewLikeButton } from "../ReviewLikeButton";
import { reviewItemTheme, type ReviewItemVariants } from "../ReviewItem.theme";

export type ReviewerGroupProps = ReviewItemVariants & {
  review: Review;
  isMocked?: boolean;
};

export const ReviewerGroup = ({
  review,
  isMocked = false,
}: ReviewerGroupProps) => {
  const { reviewerGroup, metadataContainer, timedelta } = reviewItemTheme({
    size: { initial: "sm", md: "md" },
  });

  return (
    <div className={reviewerGroup()}>
      <Profile
        name={review.username}
        icon={<div className="h-4 w-4 rounded-full bg-cyan-800" />}
      />
      <div className={metadataContainer()}>
        {isMocked ? (
          <MockedReviewLikeButton
            reviewLikeCount={review.likeCount}
            size="sm"
          />
        ) : (
          <ReviewLikeButton reviewId={review.id} size="sm" />
        )}
        <div className={timedelta()}>
          {getHumanReadableTimestampDelta(review.createdAt / 1000)}
        </div>
      </div>
    </div>
  );
};
