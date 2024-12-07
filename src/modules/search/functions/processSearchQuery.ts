export function processSearchQuery(query: string): string {
  return query.trim().includes(" ") ? query.split(" ").join(" & ") : query;
}
