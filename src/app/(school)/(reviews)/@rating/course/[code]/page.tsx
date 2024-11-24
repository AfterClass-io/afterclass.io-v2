import { api } from "@/common/tools/trpc/server";
import { RatingSection } from "@/modules/reviews/components/RatingSection";
import { ReviewLabelType } from "@prisma/client";
import calculateAverage from "@/common/functions/calculateAverage";
import calculateRatingItems from "@/modules/reviews/functions/calculateRatingItems";
import { auth } from "@/server/auth";

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
        headingRatingItem={{
          label: "Average Rating",
          rating: "-",
        }}
        ratingItems={validCourseReviewLabels.map((label) => ({
          label: label.name.replaceAll("_", " ").toLowerCase(),
          rating: "-",
        }))}
        isLocked={!session}
      />
    );
  }
  const professorSlugs = searchParams?.professor
    ? Array.isArray(searchParams.professor)
      ? searchParams.professor
      : [searchParams.professor]
    : [];
  const apiParams = {
    code: params.code,
    ...(professorSlugs.length > 0 && { slugs: professorSlugs }),
  };
  const { items: reviewsOfCourse } =
    await api.reviews.getByCourseCodeProtected(apiParams);
  if (reviewsOfCourse.length === 0) {
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
        rating: calculateAverage(
          reviewsOfCourse.map((review) => review.rating),
        ).toFixed(2),
      }}
      ratingItems={calculateRatingItems(
        reviewsOfCourse,
        validCourseReviewLabels,
      )}
    />
  );
}
