"use client";
import { z } from "zod";
import { useState } from "react";
import type { Courses, Professors, Universities } from "@prisma/client";
import { GraduationCapIcon, PencilIcon } from "@/common/components/CustomIcon";
import { SearchResultList } from "../SearchResultList";
import { SearchResultItem } from "../SearchResultItem";
import { SearchResultDivider } from "../SearchResultDivider";
import { SearchResultFilter } from "../SearchResultFilter";
import { SearchResultEmpty } from "../SearchResultEmpty";
import { searchResultTheme } from "../SearchResult.theme";

const filterOptions = z.object({
  school: z.enum(["all", "SMU", "NUS", "NTU"]),
  type: z.enum(["all", "professor", "course"]),
});
type FilterOptions = z.infer<typeof filterOptions>;

export const SearchResultContent = ({
  universities,
  searchedCourse,
  searchedProf,
}: {
  universities: Universities[];
  searchedCourse: Courses[];
  searchedProf: Professors[];
}) => {
  const { content } = searchResultTheme();
  const [filter, setFilter] = useState<FilterOptions>({
    school: "all",
    type: "all",
  });

  const isEmpty = () => {
    switch (filter.type) {
      case "all":
        return searchedCourse.length + searchedProf.length === 0;
      case "course":
        return searchedCourse.length === 0;
      case "professor":
        return searchedProf.length === 0;
    }
  };

  return (
    <div className={content()}>
      <SearchResultList>
        <SearchResultEmpty show={isEmpty()} />
        {(filter.type === "all" || filter.type === "course") &&
          searchedCourse.map((course) => (
            <SearchResultItem
              key={course.id}
              school={
                universities.find((u) => u.id === course.belongToUniversityId)
                  ?.abbrv!
              }
              href={`/course/${course.id}`}
              title={course.name}
              subtitle={course.code}
              filterStats={[
                { icon: <PencilIcon />, stat: 12 },
                { icon: <GraduationCapIcon />, stat: 32 },
              ]}
            />
          ))}
        {(filter.type === "all" || filter.type === "professor") &&
          searchedProf.map((prof) => (
            <SearchResultItem
              key={prof.id}
              school={
                universities.find((u) => u.id === prof.belongToUniversityId)
                  ?.abbrv!
              }
              href={`/professor/${prof.id}`}
              title={prof.name}
              filterStats={[
                { icon: <PencilIcon />, stat: 11 },
                { icon: <GraduationCapIcon />, stat: 31 },
              ]}
            />
          ))}
      </SearchResultList>
      <SearchResultDivider />
      <SearchResultFilter
        onValueChange={(key, value) => {
          setFilter((prev) => ({ ...prev, [key]: value }));
        }}
        filters={{
          school: [
            { label: "All", value: "all", isDefault: true },
            { label: "SMU", value: "SMU" },
            { label: "NUS", value: "NUS" },
            { label: "NTU", value: "NTU" },
          ],
          type: [
            { label: "All", value: "all", isDefault: true },
            { label: "Professor", value: "professor" },
            { label: "Course", value: "course" },
          ],
        }}
      />
    </div>
  );
};
