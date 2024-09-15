import { detailCardTheme } from "./DetailCard.theme";
import { Skeleton } from "@/common/components/Skeleton";

export const DetailCardSkeleton = () => {
  const { wrapper, header, body } = detailCardTheme();
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <p>Details</p>
      </div>
      <div className={body()}>
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
      </div>
    </div>
  );
};
