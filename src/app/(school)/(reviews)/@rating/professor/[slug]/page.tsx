import { RatingSection } from "@/common/components/RatingSection";
import formatPercentage from "@/common/functions/formatPercentage";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function ProfessorRating({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerAuthSession();

  const getProfReviewsBySlugApi = session
    ? api.reviews.getByProfSlugProtected
    : api.reviews.getByProfSlug;

  const [reviewsOfThisProf, validProfessorReviewLabels] = await Promise.all([
    getProfReviewsBySlugApi({
      slug: params.slug,
    }),
    api.labels.getAllByType({
      typeOf: "PROFESSOR",
    }),
  ]);

  if (reviewsOfThisProf.length === 0) {
    return (
      <RatingSection
        headingRatingItem={{
          label: "Average Rating",
          rating: "-",
        }}
        ratingItems={[]}
        isLocked={!session}
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
      isLocked={!session}
    />
  );
}
