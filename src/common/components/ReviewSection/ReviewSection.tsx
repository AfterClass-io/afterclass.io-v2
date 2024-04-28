import { ReviewItem } from "@/common/components/ReviewItem";
import { reviewSectionTheme } from "@/common/components/ReviewSection/ReviewSection.theme";
import { api } from "@/common/tools/trpc/react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const ReviewSection = ({ isLocked }: { isLocked: boolean }) => {
  const { data: reviews } = api.reviews.getAll.useQuery({
    // NOTE: inputs here are optional, depending on the type of reviews we want to show
    // universityId: 1,
    // courseId: "2a45bab1-5ec4-4d2e-b245-27a142a78890",
  });
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
