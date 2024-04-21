import { filterToggleSectionTheme } from "../FilterToggleSection.theme";
import {
  GraduationCapColoredIcon,
  BooksColoredIcon,
} from "@/common/components/CustomIcon";

export const FilterToggleSectionHeader = ({
  type,
}: {
  type: "course" | "professor";
}) => {
  const { sectionHeader } = filterToggleSectionTheme();
  return (
    <div className={sectionHeader()}>
      {type === "course" ? (
        <>
          <BooksColoredIcon />
          <p>Courses</p>
        </>
      ) : (
        <>
          <GraduationCapColoredIcon />
          <p>Professors</p>
        </>
      )}
    </div>
  );
};
