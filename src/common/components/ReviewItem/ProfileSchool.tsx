import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";

export type ProfileSchoolProps = ReviewItemVariants & {
  courseCode: string;
};

export const ProfileSchool = ({ courseCode }: ProfileSchoolProps) => {
  const { schoolContainer, schoolCourseCode, schoolIcon } = reviewItemTheme();
  return (
    <div className={schoolContainer()}>
      <div className={schoolIcon()}>
        <div className="h-4 w-4 rounded-full bg-red-800"></div>
      </div>
      <div className={schoolCourseCode()}>{courseCode}</div>
    </div>
  );
};
