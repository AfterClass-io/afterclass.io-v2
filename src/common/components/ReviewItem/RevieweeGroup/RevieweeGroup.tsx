import { type Review } from "@/common/types";
import { profileTheme } from "@/common/components/Profile";
import { SchoolIcon } from "@/common/components/CustomIcon";

import { RevieweeCourse } from "./RevieweeCourse";
import { reviewItemTheme, type ReviewItemVariants } from "../ReviewItem.theme";
import { Button } from "@/common/components/Button";

export type RevieweeGroupProps = ReviewItemVariants & {
  review: Review;
  variant: "home" | "professor" | "course";
};

export const RevieweeGroup = ({ review, variant }: RevieweeGroupProps) => {
  const { revieweeGroup } = reviewItemTheme({
    size: { initial: "sm", md: "md" },
  });
  const { wrapper: profileWrapperClass, name: profileNameClass } =
    profileTheme();

  const isAdditionallyDisplayCourseCode =
    variant === "home" && review.professorName;

  return (
    <div className={revieweeGroup()}>
      <div className={profileWrapperClass()}>
        <SchoolIcon school={review.university} />
        {!review.professorName ? (
          <RevieweeCourse
            courseCode={review.courseCode}
            courseName={review.courseName}
          />
        ) : (
          <Button
            variant="link"
            as="a"
            href={`/professor/${review.username}`}
            className={profileNameClass({
              class: "hover:text-primary-default hover:no-underline",
            })}
            aria-label="professor"
          >
            {review.professorName}
          </Button>
        )}
      </div>
      {isAdditionallyDisplayCourseCode && (
        <RevieweeCourse
          courseCode={review.courseCode}
          courseName={review.courseName}
        />
      )}
    </div>
  );
};
