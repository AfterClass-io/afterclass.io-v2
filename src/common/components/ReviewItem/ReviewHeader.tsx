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
  const { headingContainer, metadataContainer, timedelta } = reviewItemTheme();
  return (
    <div className="flex flex-col items-start gap-3 self-stretch md:flex-row-reverse md:justify-between">
      <ReviewerHeaderGroup review={review} />
      <RevieweeHeaderGroup review={review} />
    </div>
  );
};
