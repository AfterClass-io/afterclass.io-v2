import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { ReviewBody } from "./ReviewBody";
import { ProfileSchool } from "./ProfileSchool";
import { ProfileReviewer } from "./ProfileReviewer";
import { getHumanReadableTimestampDelta } from "@/common/functions";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import { Button } from "@/common/components/Button";

// TODO: to replace with prisma generated types
export type ReviewLabel = {
  name: string;
  typeof: "professor" | "course";
};

export type Review = {
  body: string;
  courseCode: string;
  username: string;
  likeCount: number;
  labels: ReviewLabel[];
  createdAt: number;
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
  const { wrapper, headingContainer, metadataContainer, timedelta, body } =
    reviewItemTheme();

  return (
    <div className={wrapper()}>
      <div className={headingContainer()}>
        {variant === "home" ? (
          <ProfileSchool courseCode={review.courseCode} />
        ) : (
          <ProfileReviewer name={review.username} />
        )}
        <div className={metadataContainer()}>
          {variant === "home" && <ProfileReviewer name={review.username} />}
          {variant === "professor" && (
            <ProfileSchool courseCode={review.courseCode} />
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
            {getHumanReadableTimestampDelta(review.createdAt)}
          </div>
        </div>
      </div>
      {isLocked ? (
        <div className={body()}>
          <LockCtaOverlay size="sm" ctaType="review" variant="border" />
        </div>
      ) : (
        <ReviewBody isDetailed={variant !== "home"} review={review} />
      )}
    </div>
  );
};
