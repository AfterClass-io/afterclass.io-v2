import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { type Review } from "@/common/types";
import { Profile, profileTheme } from "@/common/components/Profile";
import { SchoolIcon } from "@/common/components/CustomIcon";

export type RevieweeHeaderGroupProps = ReviewItemVariants & {
  review: Review;
  variant: "home" | "professor" | "course";
};

export const RevieweeHeaderGroup = ({
  review,
  variant,
}: RevieweeHeaderGroupProps) => {
  const { revieweeGroup } = reviewItemTheme();
  const { name } = profileTheme();

  const profileNameToDisplay =
    variant === "professor" ? review.courseCode : review.professorName;

  const isAdditionallyDisplayCourseCode =
    variant === "home" && review.professorName;

  return (
    <div className={revieweeGroup()}>
      <Profile
        name={profileNameToDisplay ?? review.courseCode}
        icon={<SchoolIcon school={review.university} />}
      />
      {isAdditionallyDisplayCourseCode && (
        <p className={name()}>{review.courseCode}</p>
      )}
    </div>
  );
};
