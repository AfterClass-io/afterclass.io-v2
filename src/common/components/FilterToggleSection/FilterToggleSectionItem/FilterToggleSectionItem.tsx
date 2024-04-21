import type { ReactNode, ComponentPropsWithoutRef } from "react";
import {
  type FilterToggleSectionVariants,
  filterToggleSectionTheme,
} from "../FilterToggleSection.theme";
import { Checkbox } from "@/common/components/Checkbox";

export type FilterStat = {
  icon: ReactNode;
  value: number;
};

export type FilterItem = {
  header: string;
  subheader?: string;
  filterStats: FilterStat[];
};

export type FilterToggleSectionItemProps = ComponentPropsWithoutRef<"div"> &
  FilterToggleSectionVariants &
  FilterItem;

const FilterItemStats = ({ icon, value }: FilterStat) => {
  const { stat } = filterToggleSectionTheme();
  return (
    <div className={stat()}>
      {icon}
      <p>{value}</p>
    </div>
  );
};

const ContentWithoutSubheader = ({
  filterStats,
}: {
  filterStats: FilterStat[];
}) => {
  const { statWrapper } = filterToggleSectionTheme();
  return (
    <div className={statWrapper()}>
      {filterStats?.map((stat, index) => (
        <FilterItemStats key={index} {...stat} />
      ))}
    </div>
  );
};

const ContentWithSubheader = ({
  filterStats,
  subheader,
}: {
  filterStats: FilterStat[];
  subheader: string;
}) => {
  const { contentSubheaderWrapper } = filterToggleSectionTheme();
  return (
    <div className={contentSubheaderWrapper()}>
      <p>{subheader}</p>
      <ContentWithoutSubheader filterStats={filterStats} />
    </div>
  );
};

export const FilterToggleSectionItem = ({
  header,
  subheader,
  filterStats,
  ...props
}: FilterToggleSectionItemProps) => {
  const { item, content, itemHeader } = filterToggleSectionTheme();
  return (
    <div className={item()} {...props}>
      <Checkbox />
      <div className={content()}>
        <p className={itemHeader()}>{header}</p>
        {subheader ? (
          <ContentWithSubheader
            subheader={subheader}
            filterStats={filterStats}
          />
        ) : (
          <ContentWithoutSubheader filterStats={filterStats} />
        )}
      </div>
    </div>
  );
};
