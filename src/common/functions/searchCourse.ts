import { type Courses } from "@prisma/client";
import { db } from "@/server/db";

export function searchCourse(
  query: string,
  limit: number = 5,
): Promise<Courses[]> {
  // safety of query is ensured by the Prisma client using prepared statements
  // https://github.com/prisma/prisma-client-js/issues/727#issuecomment-650096790
  return db.$queryRaw`
    SELECT
      *
    FROM
      courses c
    WHERE
      to_tsvector(c.code || ' ' || c.name)
      @@ to_tsquery(${query + ":*"})
    LIMIT ${limit};
  `;
}
