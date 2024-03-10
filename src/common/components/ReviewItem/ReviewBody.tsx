import { Button } from "@/common/components/Button";
import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { type Review } from "./ReviewItem";

export type ReviewBodyProps = ReviewItemVariants & {
  review: Review;
  isDetailed: boolean;
  variant?: "home" | "subpage";
};

export const ReviewBody = ({ review, isDetailed }: ReviewBodyProps) => {
  const { body, labels } = reviewItemTheme();
  return (
    <div className="flex flex-col gap-1">
      {isDetailed && (
        <div className={labels()}>
          {review.labels
            .filter((label) => label.typeof === "professor")
            .map((label) => (
              <span key={label.name}>{label.name}</span>
            ))}
        </div>
      )}
      {isDetailed && (
        <div className={labels()}>
          {review.labels
            .filter((label) => label.typeof === "course")
            .map((label) => (
              <span key={label.name}>{label.name}</span>
            ))}
        </div>
      )}
      <div className={body()}>{review.body}</div>
      {isDetailed && <Button variant="link">Show more</Button>}
    </div>
  );
};
