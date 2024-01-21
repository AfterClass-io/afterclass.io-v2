import { Button } from "@/common/components/Button";
import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import { Tag } from "@/common/components/Tag";
import { getHumanReadableTimestampDelta } from "@/common/functions";

// TODO: to replace with prisma generated types
export type Label = {
  name: string;
  typeof: "professor" | "course";
};

export type Review = {
  body: string;
  courseCode: string;
  username: string;
  likeCount: number;
  labels: Label[];
  createdAt: number;
};

export type ReviewItemProps = ReviewItemVariants & {
  review: Review;
  isLocked?: boolean;
  variant?: "home" | "subpage";
};

export const ReviewItem = ({
  review,
  isLocked,
  variant = "home",
}: ReviewItemProps) => {
  const {
    wrapper,
    headingContainer,
    schoolContainer,
    schoolIcon,
    schoolCourseCode,
    metadataContainer,
    profileContainer,
    profileName,
    profileIcon,
    likeIcon,
    timedelta,
    body,
    labels,
  } = reviewItemTheme({ variant });

  const HeaderCourse = () => (
    <div className={schoolContainer()}>
      <div className={schoolIcon()}>
        <div className="h-4 w-4 rounded-full bg-red-800"></div>
      </div>
      <div className={schoolCourseCode()}>{review.courseCode}</div>
    </div>
  );

  const HeaderReviewer = () => (
    <div className={profileContainer()}>
      <div className={profileIcon()}>
        <div className="h-4 w-4 rounded-full bg-cyan-800"></div>
      </div>
      <div className={profileName()}>{review.username}</div>
    </div>
  );

  const ReviewContent = ({ isDetailed }: { isDetailed: boolean }) => {
    return (
      <div className="flex flex-col gap-1">
        {isDetailed && (
          <div className={labels()}>
            {review.labels
              .filter((label) => label.typeof === "professor")
              .map((label) => (
                <span key={label.name}>{label.name}</span>
              ))}
          </div>
        )}
        {isDetailed && (
          <div className={labels()}>
            {review.labels
              .filter((label) => label.typeof === "course")
              .map((label) => (
                <span key={label.name}>{label.name}</span>
              ))}
          </div>
        )}
        <div className={body()}>{review.body}</div>
        {isDetailed && (
          <Button variant="link" as="button">
            Show more
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className={wrapper()}>
      <div className={headingContainer()}>
        {variant === "home" ? <HeaderCourse /> : <HeaderReviewer />}
        <div className={metadataContainer()}>
          {variant === "home" ? <HeaderReviewer /> : <HeaderCourse />}
          <Tag
            variant="secondary"
            contentRight={<ThumbUpFilledIcon className={likeIcon()} />}
          >
            {review.likeCount}
          </Tag>
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
        <ReviewContent isDetailed={variant === "subpage"} />
      )}
    </div>
  );
};
