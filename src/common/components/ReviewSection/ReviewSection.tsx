import { ReviewItem } from "@/common/components/ReviewItem";
import { api } from "@/common/tools/trpc/react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const ReviewSection = ({ isLocked }: { isLocked: boolean }) => {
  const { data: reviews } = api.reviews.getAll.useQuery({
    // NOTE: inputs here are optional, depending on the type of reviews we want to show
    // universityId: 1,
    // courseId: "2a45bab1-5ec4-4d2e-b245-27a142a78890",
  });
  return (
    reviews && (
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon
              icon="twemoji:pencil"
              className="flex h-6 w-6 rotate-90 items-center justify-center"
            />
            <span className="text-2xl font-semibold">Reviews</span>
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
