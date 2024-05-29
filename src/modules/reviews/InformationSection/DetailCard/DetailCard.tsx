import { DetailCardTheme } from "./DetailCard.theme";
import { DetailCardSkeleton } from "./DetailCardSkeleton";

export const DetailCard = ({
  courseCode,
  courseCU,
}: {
  courseCode: string;
  courseCU: number;
}) => {
  const { wrapper, header, body, content, field, value } = DetailCardTheme();
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <p>Details</p>
      </div>
      <div className={body()}>
        <div className={content()}>
          <p className={field()}>Course code</p>
          <p className={value()}>{courseCode}</p>
        </div>
        <div className={content()}>
          <p className={field()}>Credit unit</p>
          <p className={value()}>{courseCU}</p>
        </div>
      </div>
    </div>
  );
};

DetailCard.Skeleton = DetailCardSkeleton;
