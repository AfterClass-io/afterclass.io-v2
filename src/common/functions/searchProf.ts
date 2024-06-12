import type { Universities, Professors } from "@prisma/client";
import { db } from "@/server/db";

export type SearchProfResult = {
  uniAbbrv: Universities["abbrv"];
  profName: Professors["name"];
  profSlug: Professors["slug"];
};

// this is a band-aid solution
// TODO: replace with better search algorithm
export function searchProf(
  query: string,
  limit: number = 5,
): Promise<SearchProfResult[]> {
  // safety of query is ensured by the Prisma client using prepared statements
  // https://github.com/prisma/prisma-client-js/issues/727#issuecomment-650096790
  return db.$queryRaw`
    SELECT
      u.abbrv as "uniAbbrv",
      p.name as "profName",
      p.slug as "profSlug"
    FROM
      professors p
    JOIN
      universities u
    ON
      p.belong_to_university = u.id
    WHERE
      to_tsvector(p.name)
      @@ to_tsquery(${query + ":*"})
    LIMIT ${limit};
  `;
}
