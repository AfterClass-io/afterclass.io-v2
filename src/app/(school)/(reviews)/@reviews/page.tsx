import { ReviewSection } from "@/modules/reviews/components/ReviewSection";
import { ReviewItemLoader } from "@/modules/reviews/components/ReviewItemLoader";

export default function Home() {
  return (
    <ReviewSection>
      <ReviewItemLoader variant="home" />
    </ReviewSection>
  );
}
