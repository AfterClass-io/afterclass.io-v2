import { ReviewItemLoader } from "@/common/components/ReviewItemLoader";
import { ReviewSection } from "@/common/components/ReviewSection";

export default function Professor({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: {
    course?: string | string[];
  };
}) {
  let courseCodes: string[] = [];
  if (searchParams?.course) {
    courseCodes = Array.isArray(searchParams.course)
      ? searchParams.course
      : [searchParams.course];
  }

  return (
    <ReviewSection>
      <ReviewItemLoader
        variant="professor"
        slug={params.slug}
        courseCodes={courseCodes.length > 0 ? courseCodes : undefined}
      />
    </ReviewSection>
  );
}
