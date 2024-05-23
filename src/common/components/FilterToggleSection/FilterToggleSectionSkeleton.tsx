import { Skeleton } from "@/common/components/Skeleton";
import { filterToggleSectionTheme } from "./FilterToggleSection.theme";

export const FilterToggleSectionItemSkeleton = () => {
  const { item, content, itemHeader, contentSubheaderWrapper, statWrapper } =
    filterToggleSectionTheme();
  return (
    <div className={item({ class: "hover:bg-inherit" })}>
      <div className={content()}>
        <p className={itemHeader()}>
          <Skeleton className="h-[24px] w-[229px]" />
        </p>
        <div className={contentSubheaderWrapper()}>
          <Skeleton className="h-6 w-12" />
          <div className={statWrapper()}>
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FilterToggleSectionItemsSkeleton = () => {
  const { container } = filterToggleSectionTheme();
  return (
    <div className={container()}>
      <FilterToggleSectionItemSkeleton />
      <FilterToggleSectionItemSkeleton />
      <FilterToggleSectionItemSkeleton />
    </div>
  );
};
