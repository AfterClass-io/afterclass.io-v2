import { Button } from "@/common/components/Button";
import { reviewItemTheme, type ReviewItemVariants } from "../ReviewItem.theme";
import { type Review } from "@/modules/reviews/types";

export type ReviewBodyProps = ReviewItemVariants & {
  review: Review;
  isDetailed?: boolean;
  variant?: "home" | "subpage";
};

export const ReviewBody = ({ review, isDetailed }: ReviewBodyProps) => {
  const { body, labels } = reviewItemTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className="flex flex-col gap-1">
      {isDetailed && (
        <div className={labels()}>
          {review.reviewLabels.map((label) => (
            <span key={label.name}>
              {label.name.replaceAll("_", " ").toLowerCase()}
            </span>
          ))}
        </div>
      )}
      <div className={body()}>{review.body}</div>
      {isDetailed && <Button variant="link">Show more</Button>}
    </div>
  );
};
