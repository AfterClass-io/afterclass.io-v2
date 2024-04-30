import {
  ratingSectionTheme,
  type RatingSectionVariants,
} from "./RatingSection.theme";
import { HeartIcon } from "@/common/components/CustomIcon";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
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
