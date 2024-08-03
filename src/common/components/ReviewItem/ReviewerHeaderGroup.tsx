import { Button } from "@/common/components/Button";
import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { type Review } from "@/common/types";
import { Profile } from "@/common/components/Profile";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { getHumanReadableTimestampDelta } from "@/common/functions";

export type ReviewerHeaderGroupProps = ReviewItemVariants & {
  review: Review;
};

export const ReviewerHeaderGroup = ({ review }: ReviewerHeaderGroupProps) => {
  const { timedelta } = reviewItemTheme();
  return (
    <div className="flex h-7 items-center justify-between gap-4 self-stretch">
      <Profile
        name={review.username}
        icon={<div className="h-4 w-4 rounded-full bg-cyan-800" />}
      />
      <div className="flex items-center gap-4">
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
