import { ReviewItem } from "@/common/components/ReviewItem";
import { ReviewSection } from "@/common/components/ReviewSection";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function Professor({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: {
    course?: string | string[];
  };
}) {
  const session = await getServerAuthSession();
  let courseCodes: string[] = [];
  if (searchParams?.course) {
    courseCodes = Array.isArray(searchParams.course)
      ? searchParams.course
      : [searchParams.course];
  }

  const reviews = session
    ? await api.reviews.getByProfSlugProtected({ slug: params.slug })
    : await api.reviews.getByProfSlug({ slug: params.slug });

  return (
    <ReviewSection>
      {reviews
        .filter(
          (v) =>
            courseCodes.length === 0 ||
            courseCodes.includes(v.reviewedCourse.code),
        )
        .map((review) => (
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
