export function processSearchQuery(query: string): string {
  const cleanedQuery = query.trim();

  return cleanedQuery.includes(" ")
    ? cleanedQuery.split(" ").join(" & ")
    : cleanedQuery;
}
