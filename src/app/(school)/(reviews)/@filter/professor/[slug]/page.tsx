import { GraduationCapIcon, PencilIcon } from "@/common/components/CustomIcon";
import { FilterToggleSection } from "@/modules/professor/FilterToggleSection";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";

export default async function ProfessorFilter({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerAuthSession();
  if (!session) {
    return <FilterToggleSection isLocked />;
  }

  const coursesTaughtByThisProf = await api.courses.getByProfSlug({
    slug: params.slug,
  });

  if (coursesTaughtByThisProf.length === 0) {
    return <FilterToggleSection dataToFilter={[]} />;
  }

  const coursesWithMetadata = await Promise.all(
    coursesTaughtByThisProf.map(async (course) => {
      const [professorCount, reviewCount] = await Promise.all([
        api.professors.countByCourseCode({
          courseCode: course.code,
        }),
        api.reviews.countByCourseCode({
          courseCode: course.code,
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
