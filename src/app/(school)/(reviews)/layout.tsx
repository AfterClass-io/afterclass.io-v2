import { type ReactNode } from "react";

import { CtaCard } from "@/common/components/CtaCard";

export default function ReviewLayout({
  children,
  header,
  filter,
  rating,
}: {
  children: ReactNode;
  header: ReactNode;
  filter: ReactNode;
  rating: ReactNode;
}) {
  return (
    <section className="relative flex h-full flex-col items-center space-y-6 overflow-y-auto overflow-x-hidden">
      {header}
      {rating}
      {filter}
      <div className="flex w-full gap-10">
        {children}
        <div className="flex w-96 flex-none flex-col items-start gap-6">
          <CtaCard
            variant="secondary"
            ctaText="Write a review"
            href="/submit"
          />
          <CtaCard
            variant="tertiary"
            ctaText="Contribute to AfterClass OSS"
            href="https://github.com/AfterClass-io/afterclass.io-v2"
            external
          />
        </div>
      </div>
    </section>
  );
}
