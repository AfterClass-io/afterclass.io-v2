import { ReviewItem } from "@/common/components/ReviewItem";
import { ReviewSection } from "@/common/components/ReviewSection";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function Course({
  params,
  searchParams,
}: {
  params: { code: string };
  searchParams?: { professor?: string | string[] };
}) {
  const session = await getServerAuthSession();
  const professorSlugs: string[] = searchParams?.professor
    ? Array.isArray(searchParams.professor)
      ? searchParams.professor
      : [searchParams.professor]
    : [];

  const apiParams = {
    code: params.code,
    ...(professorSlugs.length > 0 && { slugs: professorSlugs }),
  };

  const reviews = session
    ? await api.reviews.getByCourseCodeProtected(apiParams)
    : await api.reviews.getByCourseCode(apiParams);

  return (
    <ReviewSection>
      {reviews.map((review) => {
        return (
          <ReviewItem
            review={review}
            key={review.id}
            isLocked={!session}
            variant="course"
          />
        );
      })}
    </ReviewSection>
  );
}
