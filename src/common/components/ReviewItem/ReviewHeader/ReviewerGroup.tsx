import { type Review } from "@/common/types";
import { Profile } from "@/common/components/Profile";
import { getHumanReadableTimestampDelta } from "@/common/functions";

import { ReviewerGroupLikeButton } from "./ReviewerGroupLikeButton";
import { reviewItemTheme, type ReviewItemVariants } from "../ReviewItem.theme";

export type ReviewerGroupProps = ReviewItemVariants & {
  review: Review;
};

export const ReviewerGroup = ({ review }: ReviewerGroupProps) => {
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
        <ReviewerGroupLikeButton reviewId={review.id} />
        <div className={timedelta()}>
          {getHumanReadableTimestampDelta(review.createdAt / 1000)}
        </div>
      </div>
    </div>
  );
};
