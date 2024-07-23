import { GraduationCapIcon, PencilIcon } from "@/common/components/CustomIcon";
import { FilterToggleSection } from "@/modules/reviews/FilterToggleSection";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function ProfessorFilter({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerAuthSession();
  if (!session) {
    return <FilterToggleSection filterType="course" isLocked />;
  }

  const coursesTaughtByThisProf = await api.courses.getByProfSlug({
    slug: params.slug,
  });

  const coursesWithMetadata = await Promise.all(
    coursesTaughtByThisProf.map(async (course) => {
      const [professorCount, reviewCount] = await Promise.all([
        api.professors.countByCourseCode({
          courseCode: course.code,
        }),
        api.reviews.count({
          courseCode: course.code,
          profSlug: params.slug,
        }),
      ]);
      return {
        ...course,
        professorCount,
        reviewCount,
      };
    }),
  );

  return (
    <FilterToggleSection
      filterType="course"
      searchParamsName="course"
      dataToFilter={coursesWithMetadata.map((course) => ({
        label: course.name,
        sublabel: course.code,
        value: course.code,
        filterStats: [
          { icon: <PencilIcon />, stat: course.reviewCount },
          { icon: <GraduationCapIcon />, stat: course.professorCount },
        ],
      }))}
    />
  );
}
