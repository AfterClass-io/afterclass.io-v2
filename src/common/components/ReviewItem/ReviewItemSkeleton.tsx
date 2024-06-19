import { reviewItemTheme } from "./ReviewItem.theme";
import { Skeleton } from "@/common/components/Skeleton";

export const ReviewItemSkeleton = () => {
  const { wrapper, headingContainer, metadataContainer } = reviewItemTheme();
  return (
    <div className={wrapper({ className: "w-full items-stretch" })}>
      <div className={headingContainer()}>
        <Skeleton className="h-[24px] w-[100px]" />
        <div className={metadataContainer()}>
          <Skeleton className="h-[24px] w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-[60px]" />
    </div>
  );
};
