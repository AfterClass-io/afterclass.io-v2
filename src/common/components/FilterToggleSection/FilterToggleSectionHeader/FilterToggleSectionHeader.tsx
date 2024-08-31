import Heading from "@/common/components/Heading";
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
  const { sectionHeader, headerIcon } = filterToggleSectionTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={sectionHeader()}>
      {type === "course" ? (
        <>
          <BooksColoredIcon className={headerIcon()} />
          <Heading as="h2">Courses</Heading>
        </>
      ) : (
        <>
          <GraduationCapColoredIcon className={headerIcon()} />
          <Heading as="h2">Professors</Heading>
        </>
      )}
    </div>
  );
};
