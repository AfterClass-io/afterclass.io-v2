import { Button } from "@/common/components/Button";
import { ChevronRightIcon, SchoolIcon } from "@/common/components/CustomIcon";
import {
  type FilterStat,
  FilterItemStats,
} from "@/common/components/FilterToggleSection/FilterToggleSectionItem";
import Heading from "@/common/components/Heading";
import { searchResultTheme } from "../SearchResult.theme";
import { type UniversityAbbreviation } from "@prisma/client";

export const SearchResultItem = ({
  href,
  school,
  title,
  subtitle,
  filterStats,
}: {
  href: string;
  school: UniversityAbbreviation;
  title: string;
  subtitle?: string;
  filterStats: FilterStat[];
}) => {
  const {
    item,
    itemContent,
    itemHeadWrapper,
    itemSchoolIcon,
    itemTitle,
    itemSubtitle,
    itemStatsWrapper,
    itemArrow,
  } = searchResultTheme();
  return (
    <Button as="a" className={item()} href={href} asChild>
      <div className={itemContent()}>
        <div className={itemHeadWrapper()}>
          <SchoolIcon size={24} className={itemSchoolIcon()} school={school} />
          <Heading as="h1" className={itemTitle()}>
            {title}
          </Heading>
          {subtitle && (
            <Heading as="h2" className={itemSubtitle()}>
              {subtitle}
            </Heading>
          )}
        </div>
        <div className={itemStatsWrapper()}>
          {filterStats?.map((stat, index) => (
            <FilterItemStats key={index} {...stat} />
          ))}
        </div>
      </div>
      <ChevronRightIcon size={24} className={itemArrow()} />
    </Button>
  );
};
