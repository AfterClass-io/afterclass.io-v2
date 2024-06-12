import { GraduationCapIcon, PencilIcon } from "@/common/components/CustomIcon";
import { SearchResult } from "@/common/components/SearchResult";

export default function Search() {
  return (
    <SearchResult>
      <SearchResult.Title />
      <SearchResult.Content>
        <SearchResult.List>
          <SearchResult.Item
            school="SMU"
            href="/professor/ouh-eng-lieh"
            title="Ouh Eng Lieh"
            filterStats={[
              { icon: <PencilIcon />, stat: 10 },
              { icon: <GraduationCapIcon />, stat: 10 },
            ]}
          />
          <SearchResult.Item
            school="SMU"
            href="/course/IS215"
            title="Introduction to Business Research: Philosophy of Science and Behavioural Approaches to Organizing"
            subtitle="BSRM704"
            filterStats={[
              { icon: <PencilIcon />, stat: 10 },
              { icon: <GraduationCapIcon />, stat: 10 },
            ]}
          />
          <SearchResult.Item
            school="SMU"
            href="/professor/ouh-eng-lieh"
            title="Ouh Eng Lieh"
            filterStats={[
              { icon: <PencilIcon />, stat: 10 },
              { icon: <GraduationCapIcon />, stat: 10 },
            ]}
          />
        </SearchResult.List>
        <SearchResult.Divider />
        <SearchResult.Filter
          filters={{
            School: [
              { label: "All", value: "all", isDefault: true },
              { label: "SMU", value: "SMU" },
              { label: "NUS", value: "NUS" },
              { label: "NTU", value: "NTU" },
            ],
            Type: [
              { label: "All", value: "all", isDefault: true },
              { label: "Professor", value: "professor" },
              { label: "Course", value: "course" },
            ],
          }}
        />
      </SearchResult.Content>
    </SearchResult>
  );
}
