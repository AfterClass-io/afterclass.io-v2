import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { statItemTheme, type StatItemVariants } from "./StatItem.theme";
import { Skeleton } from "@/common/components/Skeleton";

export type StatItemProps = StatItemVariants & {
  label: string;
  rating: number | string;
  isLocked?: boolean;
};

export const StatItem = ({
  label,
  rating,
  isLocked,
  layout,
}: StatItemProps) => {
  const {
    wrapper,
    label: labelClasses,
    rating: ratingClasses,
    icon,
  } = statItemTheme({ layout });

  return (
    <div className={wrapper()}>
      <div className={labelClasses()}>
        <span>{label}</span>
      </div>
      {isLocked ? (
        <LockIcon className={icon()} />
      ) : (
        <div className={ratingClasses()}>{rating}</div>
      )}
    </div>
  );
};

const StatItemSkeleton = ({
  layout,
  label,
}: StatItemVariants & { label?: string }) => {
  const { wrapper, label: labelClasses, rating } = statItemTheme({ layout });
  return (
    <div className={wrapper()}>
      <div className={labelClasses()}>
        <span>{label ?? <Skeleton className="h-[20px] w-[130px]" />}</span>
      </div>
      <div className={rating()}>
        {layout === "horizontal" ? (
          <Skeleton className="h-[32px] w-[54.4px]" />
        ) : (
          <Skeleton className="h-[28px] w-[130px]" />
        )}
      </div>
    </div>
  );
};
StatItem.Skeleton = StatItemSkeleton;
