// "use client"; // Remove this when we remove api calls directly in page
import { AnnouncementBanner } from "@/modules/home/AnnouncementBanner";
import { CtaCard } from "@/common/components/CtaCard";
import { ReviewSection } from "@/common/components/ReviewSection";

export default function Home() {
  return (
    <>
      <section className="flex h-full flex-col items-center space-y-6 overflow-y-auto overflow-x-hidden">
        <AnnouncementBanner />
        <div className="flex w-full gap-10">
          <ReviewSection className="w-full" />
          <div className="flex w-96 flex-none flex-col items-start gap-6">
            <CtaCard ctaText="Write a review" href="/submit" />
            <CtaCard
              variant="secondary"
              ctaText="Contribute to AfterClass OSS"
              href="https://github.com/AfterClass-io/afterclass.io-v2"
              external
            />
          </div>
        </div>
      </section>
    </>
  );
}
