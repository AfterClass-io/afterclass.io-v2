import {
  ratingSectionTheme,
  type RatingSectionVariants,
} from "./RatingSection.theme";
import { HeartIcon } from "@/common/components/CustomIcon";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import { Skeleton } from "@/common/components/Skeleton";
import { StatItem, type StatItemProps } from "@/common/components/StatItem";

export type RatingSectionProps = RatingSectionVariants & {
  headingRatingItem: StatItemProps;
  ratingItems: StatItemProps[];
  isLocked?: boolean;
};

export const RatingSection = ({
  headingRatingItem,
  ratingItems,
  isLocked,
}: RatingSectionProps) => {
  const { wrapper, headingContainer, headingRating, statItemWrapper, icon } =
    ratingSectionTheme();
  return (
    <div className={wrapper()}>
      {isLocked && <LockCtaOverlay />}
      <div className={headingContainer()}>
        <div className={headingRating()}>
          <HeartIcon className={icon()} />
          <StatItem
            {...headingRatingItem}
            layout="horizontal"
            isLocked={isLocked}
          />
        </div>
      </div>
      <div className={statItemWrapper()}>
        {ratingItems.map((item, i) => (
          <StatItem {...item} key={i} isLocked={isLocked} />
        ))}
      </div>
    </div>
  );
};

RatingSection.Skeleton = () => {
  const { wrapper, headingContainer, headingRating, statItemWrapper, icon } =
    ratingSectionTheme();
  return (
    <div className={wrapper()}>
      <div className={headingContainer()}>
        <div className={headingRating()}>
          <HeartIcon className={icon()} />
          <StatItem.Skeleton layout="horizontal" label="Average Rating" />
        </div>
      </div>
      <div className={statItemWrapper()}>
        <StatItem.Skeleton />
        <StatItem.Skeleton />
        <StatItem.Skeleton />
      </div>
    </div>
  );
};
