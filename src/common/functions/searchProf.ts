import { type Professors } from "@prisma/client";
import { db } from "@/server/db";

export function searchProf(
  query: string,
  limit: number = 5,
): Promise<Professors[]> {
  // safety of query is ensured by the Prisma client using prepared statements
  // https://github.com/prisma/prisma-client-js/issues/727#issuecomment-650096790
  return db.$queryRaw`
    SELECT
      *
    FROM
      professors p
    WHERE
      to_tsvector(p.name)
      @@ to_tsquery(${query + ":*"})
    LIMIT ${limit};
  `;
}
