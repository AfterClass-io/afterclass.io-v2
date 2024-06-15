"use client";
import { SearchResult } from "@/common/components/SearchResult";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  return (
    <SearchResult>
      <SearchResult.Title searchTerm={query!} />
      <SearchResult.Content searchedCourse={[]} searchedProf={[]} />
    </SearchResult>
  );
}
