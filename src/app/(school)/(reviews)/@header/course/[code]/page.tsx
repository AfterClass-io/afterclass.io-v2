import { api } from "@/common/tools/trpc/server";
import { notFound } from "next/navigation";
import { PageTitle } from "@/common/components/PageTitle";
import { BooksIcon, SchoolIcon } from "@/common/components/CustomIcon";
import { Tag } from "@/common/components/Tag";

export default async function CourseHeader({
  params,
}: {
  params: { code: string };
}) {
  const course = await api.courses.getByCourseCode({
    code: params.code.toUpperCase(),
  });
  if (!course) {
    return notFound();
  }
  return (
    <div className="w-full">
      <PageTitle
        contentLeft={<BooksIcon className="h-9 w-9 text-text-em-low" />}
        contentRight={
          <Tag
            contentLeft={
              <SchoolIcon
                school={course.belongToUniversity.abbrv}
                className="h-6 w-6"
              />
            }
          >
            {course.belongToUniversity.abbrv}
          </Tag>
        }
      >
        {course.name}
      </PageTitle>
    </div>
  );
}
