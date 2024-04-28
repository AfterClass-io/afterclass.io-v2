import { type Review, ReviewItem } from "@/common/components/ReviewItem";
import { reviewSectionTheme } from "@/common/components/ReviewSection/ReviewSection.theme";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const ReviewSection = ({
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
            <Icon icon="twemoji:pencil" className={icon()} />
            <span className={reviewsHeader()}>Reviews</span>
          </div>
          {/* TODO: implement filtering */}
          {/* <div className="flex gap-x-8">
            <div>Top</div>
            <div>Trending</div>
            <div>Latest</div>
          </div> */}
        </div>

        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} isLocked={isLocked} />
        ))}
      </div>
    )
  );
};

export default ReviewSection;
