"use client";

import { Suspense } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { SearchIcon } from "@/common/components/CustomIcon";
import { PageTitle } from "@/common/components/PageTitle";
import { searchResultTheme } from "../SearchResult.theme";

const Skeleton = ({ searchTerm = "..." }: { searchTerm?: string }) => {
  const { title, titleIcon } = searchResultTheme();
  return (
    <PageTitle
      className={title()}
      contentLeft={<SearchIcon size={36} className={titleIcon()} />}
    >
      Search results for “{searchTerm}”
    </PageTitle>
  );
};

const Title = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("q");
  if (!searchTerm) return notFound();

  return <Skeleton searchTerm={searchTerm} />;
};

export const SearchResultTitle = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Title />
    </Suspense>
  );
};
