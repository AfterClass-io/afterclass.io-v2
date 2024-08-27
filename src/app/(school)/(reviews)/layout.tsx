import { type ReactNode } from "react";

import { CtaCard } from "@/common/components/CtaCard";
import { EditIcon, GithubIcon, PlusIcon } from "@/common/components/CustomIcon";

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
        <div className="hidden h-fit w-96 flex-col items-start gap-6 text-nowrap min-[1200px]:flex">
          <CtaCard
            variant="secondary"
            ctaText="Write a review"
            href="/submit"
            leftIcon={<PlusIcon />}
            rightIcon={<EditIcon opacity={0.1} />}
          />
          <CtaCard
            variant="tertiary"
            ctaText="Contribute to AfterClass OSS"
            href="https://github.com/AfterClass-io/afterclass.io-v2"
            external
            leftIcon={<GithubIcon />}
          />
        </div>
      </div>
    </section>
  );
}
