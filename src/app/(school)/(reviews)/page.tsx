import { LoadMoreReviews } from "@/common/components/LoadMoreReviews";
import { ReviewItem } from "@/common/components/ReviewItem";
import { ReviewSection } from "@/common/components/ReviewSection";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  const reviews = session
    ? await api.reviews.getAllProtected({})
    : await api.reviews.getAll({});

  return (
    <ReviewSection>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} isLocked={!session} />
      ))}
      <LoadMoreReviews/>
    </ReviewSection>
  );
}