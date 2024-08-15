import { type Review } from "@/common/types";

import { reviewItemTheme } from "../ReviewItem.theme";
import { ReviewerGroup } from "./ReviewerGroup";
import { RevieweeGroup } from "./RevieweeGroup";

export const ReviewHeader = ({
  review,
  variant,
}: {
  review: Review;
  variant: "home" | "professor" | "course";
}) => {
  const { headingContainer } = reviewItemTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={headingContainer()}>
      <ReviewerGroup review={review} />
      <RevieweeGroup review={review} variant={variant} />
    </div>
  );
};
