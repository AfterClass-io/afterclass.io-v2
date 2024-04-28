import { type Review } from "@/common/components/ReviewItem/ReviewItem";
import { Button } from "@/common/components/Button";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { ProfileReviewer } from "@/common/components/ReviewItem/ProfileReviewer";
import { ProfileSchool } from "@/common/components/ReviewItem/ProfileSchool";
import { getHumanReadableTimestampDelta } from "@/common/functions";
import { reviewItemTheme } from "@/common/components/ReviewItem";

const ReviewHeader = ({
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
        <ProfileSchool
          courseCode={review.courseCode}
          reviewedUniversityId={review.reviewedUniversityId}
        />
      ) : (
        <ProfileReviewer name={review.username} />
      )}
      <div className={metadataContainer()}>
        {variant === "home" && <ProfileReviewer name={review.username} />}
        {variant === "professor" && (
          <ProfileSchool
            courseCode={review.courseCode}
            reviewedUniversityId={review.reviewedUniversityId}
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

export default ReviewHeader;
