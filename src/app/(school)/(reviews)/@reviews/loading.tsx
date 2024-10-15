import { ReviewItemSkeleton } from "@/common/components/ReviewItem";
import { ReviewSection } from "@/common/components/ReviewSection";

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
