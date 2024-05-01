import { type UniversityAbbreviation } from "@prisma/client";
import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { SchoolIcon } from "@/common/components/CustomIcon";

export type ProfileSchoolProps = ReviewItemVariants & {
  courseCode: string;
  university: UniversityAbbreviation;
};

export const ProfileSchool = ({
  courseCode,
  university,
}: ProfileSchoolProps) => {
  const { schoolContainer, schoolCourseCode, schoolIcon } = reviewItemTheme();
  return (
    <div className={schoolContainer()}>
      <div className={schoolIcon()}>
        <SchoolIcon school={university} />
      </div>
      <div className={schoolCourseCode()}>{courseCode}</div>
    </div>
  );
};
