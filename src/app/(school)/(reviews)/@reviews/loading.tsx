import { ReviewItemSkeleton } from "@/modules/reviews/components/ReviewItem";
import { ReviewSection } from "@/modules/reviews/components/ReviewSection";

export default function Loading() {
  return (
    <ReviewSection>
      <ReviewItemSkeleton />
      <ReviewItemSkeleton />
      <ReviewItemSkeleton />
      <ReviewItemSkeleton />
      <ReviewItemSkeleton />
      <ReviewItemSkeleton />
    </ReviewSection>
  );
}
