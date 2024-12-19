import { type ReactNode } from "react";

import { CtaCard } from "@/common/components/CtaCard";
import { EditIcon, GithubIcon, PlusIcon } from "@/common/components/CustomIcon";
import { env } from "@/env";

export default function ReviewLayout({
  header,
  filter,
  rating,
  information,
  reviews,
}: {
  reviews: ReactNode;
  header: ReactNode;
  filter: ReactNode;
  rating: ReactNode;
  information: ReactNode;
}) {
  return (
    <section className="flex flex-col items-center space-y-4 md:space-y-6">
      {header}
      {rating}
      {information}
      {filter}
      <div className="relative flex w-fit gap-10">
        {reviews}
        <div className="sticky top-0 hidden h-fit max-w-min flex-col items-start gap-6 text-nowrap lg:flex">
          <CtaCard
            variant="secondary"
            ctaText="Write a review"
            href="/submit"
            iconLeft={<PlusIcon />}
            iconRight={<EditIcon opacity={0.1} />}
            data-test="cta-write-review"
            data-umami-event="write-review-cta-btn"
          />
          <CtaCard
            variant="tertiary"
            ctaText="Contribute to AfterClass OSS"
            href={env.NEXT_PUBLIC_AC_GITHUB_LINK}
            external
            iconLeft={<GithubIcon />}
            data-test="cta-contribute-oss"
            data-umami-event="contribute-oss-cta-btn"
          />
        </div>
      </div>
    </section>
  );
}
