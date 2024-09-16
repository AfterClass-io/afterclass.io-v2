import { type Review } from "@/common/types";
import { Profile, profileTheme } from "@/common/components/Profile";
import { SchoolIcon } from "@/common/components/CustomIcon";

import { reviewItemTheme, type ReviewItemVariants } from "../ReviewItem.theme";

export type RevieweeGroupProps = ReviewItemVariants & {
  review: Review;
  variant: "home" | "professor" | "course";
};

export const RevieweeGroup = ({ review, variant }: RevieweeGroupProps) => {
  const { revieweeGroup } = reviewItemTheme({
    size: { initial: "sm", md: "md" },
  });
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
