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

  return (
    <FilterToggleSection
      filterType="course"
      searchParamsName="course"
      dataToFilter={coursesTaughtByThisProf.map((course) => ({
        label: course.name,
        sublabel: course.code,
        value: course.code,
        filterStats: [
          { icon: <PencilIcon />, stat: course._count.reviews },
          { icon: <GraduationCapIcon />, stat: course._count.classes },
        ],
      }))}
    />
  );
}
