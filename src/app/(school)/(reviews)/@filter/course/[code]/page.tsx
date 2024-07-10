import { getServerAuthSession } from "@/server/auth";
import { FilterToggleSection } from "@/modules/reviews/FilterToggleSection";
import { api } from "@/common/tools/trpc/server";
import { BooksIcon, PencilIcon } from "@/common/components/CustomIcon";

export default async function CourseFilter({
  params,
}: {
  params: { code: string };
}) {
  const session = await getServerAuthSession();
  if (!session) {
    return <FilterToggleSection filterType="professor" isLocked />;
  }
  const professorForThisCourse = await api.professors.getByCourseCode({
    code: params.code,
  });
  const professorWithMetadata = await Promise.all(
    professorForThisCourse.map(async (professor) => {
      const [courseCount, reviewCount] = await Promise.all([
        api.courses.countByProfSlug({ slug: professor.slug }),
        api.reviews.count({ profSlug: professor.slug }),
      ]);
      return {
        ...professor,
        courseCount,
        reviewCount,
      };
    }),
  );
  return (
    <FilterToggleSection
      filterType="professor"
      searchParamsName="professor"
      dataToFilter={professorWithMetadata.map((professor) => ({
        label: professor.name,
        value: professor.slug,
        filterStats: [
          { icon: <PencilIcon />, stat: professor.reviewCount },
          { icon: <BooksIcon />, stat: professor.courseCount },
        ],
      }))}
    />
  );
}
