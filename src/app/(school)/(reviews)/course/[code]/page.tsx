import { ReviewItemLoaderCourse } from "@/common/components/ReviewItemLoader";
import { ReviewSection } from "@/common/components/ReviewSection";

export default async function Course({
  params,
  searchParams,
}: {
  params: { code: string };
  searchParams?: { professor?: string | string[] };
}) {
  const professorSlugs = searchParams?.professor
    ? Array.isArray(searchParams.professor)
      ? searchParams.professor
      : [searchParams.professor]
    : [];

  return (
    <ReviewSection>
      <ReviewItemLoaderCourse
        code={params.code}
        slugs={professorSlugs.length > 0 ? professorSlugs : undefined}
      />
    </ReviewSection>
  );
}
