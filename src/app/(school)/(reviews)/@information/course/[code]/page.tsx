import { api } from "@/common/tools/trpc/server";
import { notFound } from "next/navigation";
import { InformationCard } from "@/modules/reviews/InformationSection/InformationCard";
import { getServerAuthSession } from "@/server/auth";

export default async function CourseInfo({
  params,
}: {
  params: { code: string };
}) {
  const session = await getServerAuthSession();
  const course = await api.courses.getByCourseCode({ code: params.code });
  if (!course) {
    return notFound();
  }
  return (
    <InformationCard isLocked={!session}>{course.description}</InformationCard>
  );
}
