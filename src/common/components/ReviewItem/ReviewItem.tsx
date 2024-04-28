import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import ReviewHeader from "@/common/components/ReviewItem/ReviewHeader";
import ReviewModal from "@/common/components/ReviewModal/ReviewModal";
// TODO: to replace with prisma generated types
export type ReviewLabel = {
  name: string;
};

export type Review = {
  id: string;
  body: string;
  courseCode: string;
  username: string;
  likeCount: number;
  labels: ReviewLabel[];
  createdAt: number;
  reviewedUniversityId: number;
  reviewFor: "professor" | "course";
  professorName?: string;
};

export type ReviewItemProps = ReviewItemVariants & {
  review: Review;
  isLocked?: boolean;
  variant?: "home" | "professor" | "course";
};

export const ReviewItem = ({
  review,
  isLocked,
  variant = "home",
}: ReviewItemProps) => {
  const { wrapper, body } = reviewItemTheme();

  return (
    <div>
      {isLocked ? (
        <div className={wrapper()}>
          <ReviewHeader review={review} variant={variant} />
          <div className={body()}>
            <LockCtaOverlay size="sm" ctaType="review" variant="border" />
          </div>
        </div>
      ) : (
        <ReviewModal review={review} variant={variant} seeMore={true} />
      )}
    </div>
  );
};
