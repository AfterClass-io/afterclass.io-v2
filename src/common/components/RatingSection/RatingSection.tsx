import {
  ratingSectionTheme,
  type RatingSectionVariants,
} from "./RatingSection.theme";
import { HeartIcon } from "@/common/components/CustomIcon";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay/LockCtaOverlay";
import { StatItem } from "@/common/components/StatItem";
import { formatPercentage } from "@/common/functions/format";

export type RatingItem = {
  label: string;
  rating: number;
};

export type RatingSectionProps = RatingSectionVariants & {
  headingRatingItem: RatingItem;
  ratingItems: RatingItem[];
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
            label={headingRatingItem.label}
            rating={headingRatingItem.rating}
            layout="horizontal"
          />
        </div>
      </div>
      <div className={statItemWrapper()}>
        {ratingItems.map((item) => (
          <StatItem
            rating={formatPercentage(item.rating)}
            label={item.label}
            isLocked={isLocked}
          />
        ))}
      </div>
    </div>
  );
};
