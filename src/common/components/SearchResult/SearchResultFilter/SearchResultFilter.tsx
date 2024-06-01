"use client";

import { Field } from "@/common/components/Field";
import { ToggleGroup } from "@/common/components/ToggleGroup";
import { searchResultTheme } from "../SearchResult.theme";

export type FilterOption = {
  label: string;
  value: string;
  isDefault?: boolean;
};

export type Filter = {
  [key: string]: FilterOption[];
};

export const SearchResultFilter = ({ filters }: { filters: Filter }) => {
  const { filter, filterField, filterToggleGroup } = searchResultTheme();
  return (
    <form className={filter()}>
      {Object.entries(filters).map(([filterFor, filterOptions], i) => (
        <Field key={i} label={filterFor} className={filterField()}>
          <ToggleGroup
            type="single"
            defaultValue={filterOptions.find((item) => item.isDefault)?.value}
            className={filterToggleGroup()}
          >
            {filterOptions.map((item, j) => (
              <ToggleGroup.Item
                key={j}
                value={item.value}
                aria-label={`Toggle ${item.label}`}
              >
                {item.label}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Field>
      ))}
    </form>
  );
};
