import { ReviewItem } from "@/common/components/ReviewItem";
import { ReviewSection } from "@/common/components/ReviewSection";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function Professor({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerAuthSession();

  const reviews = session
    ? await api.reviews.getByProfSlugProtected({ slug: params.slug })
    : await api.reviews.getByProfSlug({ slug: params.slug });

  return (
    <ReviewSection>
      {reviews.map((review) => (
        <ReviewItem
          review={review}
          key={review.id}
          isLocked={!session}
          variant="professor"
        />
      ))}
    </ReviewSection>
  );
}
