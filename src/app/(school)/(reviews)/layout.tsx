import { type ReactNode } from "react";

import { CtaCard } from "@/common/components/CtaCard";

export default function ReviewLayout({
  children,
  header,
  filter,
  rating,
  information,
}: {
  children: ReactNode;
  header: ReactNode;
  filter: ReactNode;
  rating: ReactNode;
  information: ReactNode;
}) {
  return (
    <section className="flex flex-col items-center space-y-6">
      {header}
      {rating}
      {information}
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
