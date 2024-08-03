import { reviewItemTheme } from "./ReviewItem.theme";
import { Button } from "@/common/components/Button";
import { SchoolIcon, ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { getHumanReadableTimestampDelta } from "@/common/functions";
import { type Review } from "@/common/types";
import { Profile } from "@/common/components/Profile";

export const ReviewHeader = ({
  review,
  variant,
}: {
  review: Review;
  variant: "home" | "professor" | "course";
}) => {
  const { headingContainer, metadataContainer, timedelta } = reviewItemTheme();
  return (
    <div className={headingContainer()}>
      {variant === "home" ? (
        <Profile
          name={review.courseCode}
          icon={<SchoolIcon school={review.university} />}
        />
      ) : (
        <Profile
          name={review.username}
          icon={<div className="h-4 w-4 rounded-full bg-cyan-800" />}
        />
      )}
      <div className={metadataContainer()}>
        {variant === "home" && (
          <Profile
            name={review.username}
            icon={<div className="h-4 w-4 rounded-full bg-cyan-800" />}
          />
        )}
        {variant === "professor" && (
          <Profile
            name={review.courseCode}
            icon={<SchoolIcon school={review.university} />}
          />
        )}
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
