import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { statItemTheme, type StatItemVariants } from "./StatItem.theme";

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
