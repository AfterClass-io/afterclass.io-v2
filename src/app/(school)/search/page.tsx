import { SearchResult } from "@/common/components/SearchResult";
import { searchCourse } from "@/common/functions/searchCourse";
import { searchProf } from "@/common/functions/searchProf";

export default async function Search({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const [searchedCourse, searchedProf] = await Promise.all([
    searchCourse(searchParams.q),
    searchProf(searchParams.q),
  ]);

  return (
    <SearchResult>
      <SearchResult.Title searchTerm={searchParams.q} />
      <SearchResult.Content
        searchedCourse={searchedCourse}
        searchedProf={searchedProf}
      />
    </SearchResult>
  );
}
