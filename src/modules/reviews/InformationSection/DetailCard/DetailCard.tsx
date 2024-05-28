import { type Courses } from "@prisma/client";
import { DetailCardTheme } from "./DetailCard.theme";
import { DetailCardSkeleton } from "./DetailCardSkeleton";

export const DetailCard = ({ course }: { course: Courses }) => {
  const { wrapper, header, body, content, field, value } = DetailCardTheme();
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <p>Details</p>
      </div>
      <div className={body()}>
        <div className={content()}>
          <p className={field()}>Course code</p>
          <p className={value()}>{course.code}</p>
        </div>
        <div className={content()}>
          <p className={field()}>Credit unit</p>
          <p className={value()}>{course.creditUnits}</p>
        </div>
      </div>
    </div>
  );
};

DetailCard.Skeleton = DetailCardSkeleton;