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
  const { sectionHeader, headerIcon } = filterToggleSectionTheme();
  return (
    <div className={sectionHeader()}>
      {type === "course" ? (
        <>
          <BooksColoredIcon className={headerIcon()} />
          <p>Courses</p>
        </>
      ) : (
        <>
          <GraduationCapColoredIcon className={headerIcon()} />
          <p>Professors</p>
        </>
      )}
    </div>
  );
};
