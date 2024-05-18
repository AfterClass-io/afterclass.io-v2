"use client";

import { useState } from "react";

import { FilterToggleSection as Filter } from "@/common/components/FilterToggleSection";
import { type FilterItem } from "@/common/components/FilterToggleSection/FilterToggleSectionItem";

export type FilterToggleSectionProps =
  | {
      dataToFilter: FilterItem[];
      isLocked?: false;
    }
  | {
      isLocked: true;
    };

export const FilterToggleSection = (props: FilterToggleSectionProps) => {
  if (props.isLocked)
    return (
      <Filter isLocked={props.isLocked}>
        <Filter.Header type="course" />
      </Filter>
    );

  const [selectedItems, setSelectedItems] = useState<FilterItem["value"][]>([]);

  return (
    <Filter>
      <Filter.Header type="course" />
      <Filter.Items
        data={props.dataToFilter}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </Filter>
  );
};
