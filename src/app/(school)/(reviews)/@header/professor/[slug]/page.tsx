import { api } from "@/common/tools/trpc/server";
import { GraduationCapIcon, SchoolIcon } from "@/common/components/CustomIcon";
import { PageTitle } from "@/common/components/PageTitle";
import { Tag } from "@/common/components/Tag";
import { notFound } from "next/navigation";

export default async function ProfessorHeader({
  params,
}: {
  params: { slug: string };
}) {
  const professor = await api.professors.getBySlug({ slug: params.slug });
  if (!professor) {
    return notFound();
  }

  return (
    <div className="w-full">
      <PageTitle
        contentLeft={<GraduationCapIcon className="h-9 w-9" />}
        contentRight={
          <Tag
            contentLeft={
              <SchoolIcon
                school={professor.belongToUniversity.abbrv}
                className="h-6 w-6"
              />
            }
          >
            {professor.belongToUniversity.abbrv}
          </Tag>
        }
      >
        {professor.name}
      </PageTitle>
    </div>
  );
}
