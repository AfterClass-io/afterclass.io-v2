"use client";

import { useSearchParams } from "next/navigation";
import { SearchIcon } from "@/common/components/CustomIcon";
import { PageTitle } from "@/common/components/PageTitle";
import { searchResultTheme } from "../SearchResult.theme";

export const SearchResultTitle = () => {
  const searchParams = useSearchParams();
  const { titleIcon } = searchResultTheme();
  return (
    <PageTitle contentLeft={<SearchIcon size={36} className={titleIcon()} />}>
      Search results for “{searchParams.get("q")}”
    </PageTitle>
  );
};
