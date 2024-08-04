import { Button } from "@/common/components/Button";
import { type Review } from "@/common/types";
import { Profile } from "@/common/components/Profile";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { getHumanReadableTimestampDelta } from "@/common/functions";

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
        <Button
          rounded
          variant="secondary"
          size="sm"
          iconRight={<ThumbUpFilledIcon />}
        >
          {review.likeCount}
        </Button>
        <div className={timedelta()}>
          {getHumanReadableTimestampDelta(review.createdAt / 1000)}
        </div>
      </div>
    </div>
  );
};
