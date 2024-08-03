import { reviewItemTheme } from "./ReviewItem.theme";
import { type Review } from "@/common/types";
import { ReviewerHeaderGroup } from "./ReviewerHeaderGroup";
import { RevieweeHeaderGroup } from "@/common/components/ReviewItem/RevieweeHeaderGroup";

export const ReviewHeader = ({
  review,
  variant,
}: {
  review: Review;
  variant: "home" | "professor" | "course";
}) => {
  const { headingContainer } = reviewItemTheme();
  return (
    <div className={headingContainer()}>
      <ReviewerHeaderGroup review={review} />
      <RevieweeHeaderGroup review={review} variant={variant} />
    </div>
  );
};
