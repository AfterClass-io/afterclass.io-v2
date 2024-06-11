import { SearchResult } from "@/common/components/SearchResult";
import { searchCourse } from "@/common/functions/searchCourse";
import { searchProf } from "@/common/functions/searchProf";
import { api } from "@/common/tools/trpc/server";

export default async function Search({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const [universities, searchedCourse, searchedProf] = await Promise.all([
    api.university.getAll(),
    searchCourse(searchParams.q),
    searchProf(searchParams.q),
  ]);

  return (
    <SearchResult>
      <SearchResult.Title searchTerm={searchParams.q} />
      <SearchResult.Content
        universities={universities}
        searchedCourse={searchedCourse}
        searchedProf={searchedProf}
      />
    </SearchResult>
  );
}
