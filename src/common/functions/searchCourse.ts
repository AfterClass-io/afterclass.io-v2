import type { Universities, Courses } from "@prisma/client";
import { db } from "@/server/db";

export type SearchCourseResult = {
  uniAbbrv: Universities["abbrv"];
  courseCode: Courses["code"];
  courseName: Courses["name"];
};

export function searchCourse(
  query: string,
  limit: number = 5,
): Promise<SearchCourseResult[]> {
  // safety of query is ensured by the Prisma client using prepared statements
  // https://github.com/prisma/prisma-client-js/issues/727#issuecomment-650096790
  return db.$queryRaw`
    SELECT
      u.abbrv as "uniAbbrv",
      c.code as "courseCode",
      c.name as "courseName"
    FROM
      courses c
    JOIN
      universities u
    ON
      c.belong_to_university = u.id
    WHERE
      to_tsvector(c.code || ' ' || c.name)
      @@ to_tsquery(${query + ":*"})
    LIMIT ${limit};
  `;
}
