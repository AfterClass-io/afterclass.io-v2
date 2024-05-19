import { api } from "@/common/tools/trpc/server";
import { RatingSection } from "@/common/components/RatingSection";
import { ReviewLabelType } from "@prisma/client";
import calculateAverage from "@/common/functions/calculateAverage";
import calculateRatingItems from "@/modules/reviews/functions/calculateRatingItems";
import { getServerAuthSession } from "@/server/auth";

export default async function CourseRating({
  params,
}: {
  params: { code: string };
}) {
  const session = await getServerAuthSession();
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
  const reviewsOfCourse = await api.reviews.getByCourseCodeProtected({
    code: params.code,
  });
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
        ),
      }}
      ratingItems={calculateRatingItems(
        reviewsOfCourse,
        validCourseReviewLabels,
      )}
    />
  );
}
