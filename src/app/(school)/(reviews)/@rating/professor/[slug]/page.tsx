import { RatingSection } from "@/modules/reviews/components/RatingSection";
import formatPercentage from "@/common/functions/formatPercentage";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function ProfessorRating({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: {
    course?: string | string[];
  };
}) {
  const session = await getServerAuthSession();

  const validProfessorReviewLabels = await api.labels.getAllByType({
    typeOf: "PROFESSOR",
  });

  if (!session) {
    return (
      <RatingSection
        headingRatingItem={{
          label: "Average Rating",
          rating: "-",
        }}
        ratingItems={validProfessorReviewLabels.map((label) => ({
          label: label.name.replaceAll("_", " ").toLowerCase(),
          rating: "-",
        }))}
        isLocked={!session}
      />
    );
  }

  let courseCodes: string[] = [];
  if (searchParams?.course) {
    courseCodes = Array.isArray(searchParams.course)
      ? searchParams.course
      : [searchParams.course];
  }

  const { items: reviewsOfThisProf } = await api.reviews.getByProfSlugProtected(
    {
      slug: params.slug,
      courseCodes: courseCodes.length > 0 ? courseCodes : undefined,
    },
  );

  if (reviewsOfThisProf.length === 0) {
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

  const averageRating =
    reviewsOfThisProf.reduce((total, next) => total + next.rating, 0) /
    reviewsOfThisProf.length;

  const ratingItems = validProfessorReviewLabels.map((label) => {
    const reviewsWithThisLabel = reviewsOfThisProf.filter((r) =>
      r.reviewLabels.map((rl) => rl.name).includes(label.name),
    );

    return {
      label: label.name.replaceAll("_", " ").toLowerCase(),
      rating: formatPercentage(
        reviewsWithThisLabel.length / reviewsOfThisProf.length,
      ),
    };
  });

  return (
    <RatingSection
      headingRatingItem={{
        label: "Average Rating",
        rating: averageRating.toFixed(2),
      }}
      ratingItems={ratingItems}
    />
  );
}
