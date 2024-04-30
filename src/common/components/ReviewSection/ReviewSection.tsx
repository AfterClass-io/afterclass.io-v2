import { PenIcon } from "@/common/components/CustomIcon";
import { ReviewItem } from "@/common/components/ReviewItem";
import { reviewSectionTheme } from "./index";
import { type Review } from "@/common/types";

export const ReviewSection = ({
  isLocked,
  reviews,
}: {
  isLocked: boolean;
  reviews: Review[];
}) => {
  const { wrapper, header, title, icon, reviewsHeader } = reviewSectionTheme();

  return (
    reviews && (
      <div className={wrapper()}>
        <div className={header()}>
          <div className={title()}>
            <PenIcon className={icon()} size={24} />
            <div className={reviewsHeader()}>Reviews</div>
          </div>
        </div>

        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} isLocked={isLocked} />
        ))}
      </div>
    )
  );
};
