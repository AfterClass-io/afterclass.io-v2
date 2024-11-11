import { detailCardTheme } from "./DetailCard.theme";
import { DetailCardSkeleton } from "./DetailCardSkeleton";

export const DetailCard = ({
  courseCode,
  courseCU,
}: {
  courseCode: string;
  courseCU: number;
}) => {
  const { wrapper, header, body, content, field, value } = detailCardTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <p>Details</p>
      </div>
      <div className={body()}>
        <div className={content()}>
          <p className={field()}>Course code:</p>
          <p className={value()} data-test="course-code">
            {courseCode}
          </p>
        </div>
        <div className={content()}>
          <p className={field()}>Credit unit:</p>
          <p className={value()} data-test="course-credit">
            {courseCU}
          </p>
        </div>
      </div>
    </div>
  );
};

DetailCard.Skeleton = DetailCardSkeleton;
