import { api } from "@/common/tools/trpc/server";
import { RatingSection } from "@/modules/reviews/components/RatingSection";
import { ReviewLabelType } from "@prisma/client";
import { auth } from "@/server/auth";
import { toTitleCase, formatPercentage } from "@/common/functions";

export default async function CourseRating({
  params,
  searchParams,
}: {
  params: { code: string };
  searchParams?: { professor?: string | string[] };
}) {
  const session = await auth();
  const validCourseReviewLabels = await api.labels.getAllByType({
    typeOf: ReviewLabelType.COURSE,
  });
  if (!session) {
    return (
      <RatingSection
        isLocked
        headingRatingItem={{
          label: "Average Rating",
          rating: "-",
        }}
        ratingItems={validCourseReviewLabels.map((label) => ({
          label: label.name.replaceAll("_", " ").toLowerCase(),
          rating: "-",
        }))}
      />
    );
  }

  const professorSlugs = searchParams?.professor
    ? Array.isArray(searchParams.professor)
      ? searchParams.professor
      : [searchParams.professor]
    : [];

  const { averageRating, reviewCount, reviewLabels } =
    await api.reviews.getMetadataForCourse({
      code: params.code,
      withProfSlugs: professorSlugs.length > 0 ? professorSlugs : undefined,
    });

  if (reviewCount === 0) {
    return (
      <RatingSection
        headingRatingItem={{
          label: "Average Rating",
          rating: "-",
        }}
        ratingItems={[]}
      />
    );
  }

  return (
    <RatingSection
      headingRatingItem={{
        label: "Average Rating",
        rating: averageRating.toFixed(2),
      }}
      ratingItems={reviewLabels.map((label) => ({
        label: toTitleCase(label.name),
        rating: formatPercentage(label.count && label.count / reviewCount),
      }))}
    />
  );
}
