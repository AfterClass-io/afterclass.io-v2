import { ReviewSection } from "@/common/components/ReviewSection";
import { ReviewItemLoader } from "@/common/components/ReviewItemLoader";

export default function Home() {
  return (
    <ReviewSection>
      <ReviewItemLoader variant="home" />
    </ReviewSection>
  );
}
