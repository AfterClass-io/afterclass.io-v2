import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";
import { SchoolIcon } from "@/common/components/CustomIcon";

export type ProfileSchoolProps = ReviewItemVariants & {
  courseCode: string;
  reviewedUniversityId: number;
};

export const ProfileSchool = ({
  courseCode,
  reviewedUniversityId,
}: ProfileSchoolProps) => {
  const { schoolContainer, schoolCourseCode, schoolIcon } = reviewItemTheme();
  const renderSchoolIcon = (reviewedUniversityId: number) => {
    switch (reviewedUniversityId) {
      case 1:
        return <SchoolIcon school="SMU" />;
      case 2:
        return <SchoolIcon school="NUS" />;
      case 3:
        return <SchoolIcon school="NTU" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-red-800"></div>;
    }
  };
  return (
    <div className={schoolContainer()}>
      <div className={schoolIcon()}>
        {renderSchoolIcon(reviewedUniversityId)}
      </div>
      <div className={schoolCourseCode()}>{courseCode}</div>
    </div>
  );
};
