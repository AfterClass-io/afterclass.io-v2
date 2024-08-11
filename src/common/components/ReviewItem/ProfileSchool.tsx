"use client";
import { type UniversityAbbreviation } from "@prisma/client";
import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { SchoolIcon } from "@/common/components/CustomIcon";
import { Tooltip } from "@/common/components/Tooltip";

export type ProfileSchoolProps = ReviewItemVariants & {
  courseCode: string;
  courseName: string;
  university: UniversityAbbreviation;
};

export const ProfileSchool = ({
  courseCode,
  courseName,
  university,
}: ProfileSchoolProps) => {
  const { schoolContainer, schoolCourseCode, schoolIcon } = reviewItemTheme();
  return (
    <div className={schoolContainer()}>
      <div className={schoolIcon()}>
        <SchoolIcon school={university} />
      </div>
      <Tooltip>
        <Tooltip.Content>{courseName}</Tooltip.Content>
        <Tooltip.Trigger>
          <div className={schoolCourseCode()}>{courseCode}</div>
        </Tooltip.Trigger>
      </Tooltip>
    </div>
  );
};
