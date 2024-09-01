import { ReviewSection } from "@/common/components/ReviewSection";
import { ReviewItemLoaderHome } from "@/common/components/ReviewItemLoader";

export default async function Home() {
  return (
    <ReviewSection>
      <ReviewItemLoaderHome />
    </ReviewSection>
  );
}
