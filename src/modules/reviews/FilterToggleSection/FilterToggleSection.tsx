"use client";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FilterToggleSection as Filter } from "@/common/components/FilterToggleSection";
import { type FilterItem } from "@/common/components/FilterToggleSection/FilterToggleSectionItem";
import { useBreakpoint } from "@/common/hooks/useBreakpoint";
import { Button } from "@/common/components/Button";

export type FilterToggleSectionProps =
  | {
      dataToFilter: FilterItem[];
      filterType: "course" | "professor";
      searchParamsName: string;
      onSelectChange?: (selectedValue: string) => void;
      isLocked?: false;
    }
  | {
      isLocked: true;
      filterType: "course" | "professor";
      searchParamsName?: string;
    };

export const FilterToggleSection = (props: FilterToggleSectionProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isBelowMd } = useBreakpoint("md");

  const params = new URLSearchParams(searchParams);
  const selected = params.getAll(props.searchParamsName ?? "");
  const [selectedItems, setSelectedItems] =
    useState<FilterItem["value"][]>(selected);
  const [isMobileFilterExpanded, setIsMobileFilterExpanded] = useState(false);

  if (props.isLocked)
    return (
      <Filter isLocked={props.isLocked}>
        <Filter.Header type={props.filterType} />
      </Filter>
    );

  const { dataToFilter, filterType, searchParamsName, onSelectChange } = props;

  const getNewSelectedItems = (selectedValue: string) =>
    selectedItems.includes(selectedValue)
      ? selectedItems.filter((v) => v !== selectedValue)
      : [...selectedItems, selectedValue];

  const updateSearchParams = (newSelectedItems: string[]) => {
    params.delete(searchParamsName);
    newSelectedItems.forEach((v) => params.append(searchParamsName, v));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  dataToFilter.sort((a, b) => {
    const aStat = a.filterStats[0]?.stat ?? 0;
    const bStat = b.filterStats[0]?.stat ?? 0;
    return bStat - aStat;
  });

  const visibleDataToFilter =
    isBelowMd && !isMobileFilterExpanded
      ? dataToFilter.slice(0, 3)
      : dataToFilter;

  return (
    <Filter>
      <Filter.Header type={filterType} />
      <Filter.Items>
        {visibleDataToFilter.map((item, index) => (
          <Filter.Item
            key={index}
            {...item}
            onClick={() => {
              const newSelectedItems = getNewSelectedItems(item.value);
              setSelectedItems(newSelectedItems);
              onSelectChange?.(item.value);
              updateSearchParams(newSelectedItems);
            }}
            selected={selectedItems.includes(item.value)}
          />
        ))}
      </Filter.Items>
      {isBelowMd && (
        <Button
          variant="link"
          className="px-1"
          onClick={() => setIsMobileFilterExpanded(!isMobileFilterExpanded)}
          isResponsive
        >
          {isMobileFilterExpanded ? "Show less" : "Show more"}
        </Button>
      )}
    </Filter>
  );
};
