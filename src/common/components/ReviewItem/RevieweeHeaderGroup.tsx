import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { type Review } from "@/common/types";
import { Profile } from "@/common/components/Profile";
import { SchoolIcon } from "@/common/components/CustomIcon";

export type RevieweeHeaderGroupProps = ReviewItemVariants & {
  review: Review;
};

export const RevieweeHeaderGroup = ({ review }: RevieweeHeaderGroupProps) => {
  const { timedelta } = reviewItemTheme();
  return (
    <div className="flex w-full items-center justify-between gap-2 md:w-fit md:justify-normal">
      <Profile
        name={review.professorName ?? review.courseCode}
        icon={<SchoolIcon school={review.university} />}
      />
      {review.professorName && (
        <p className="text-ellipsis text-sm text-text-em-mid">
          {review.courseCode}
        </p>
      )}
    </div>
  );
};
