"use client";

import { Field } from "@/common/components/Field";
import { ToggleGroup } from "@/common/components/ToggleGroup";
import { toTitleCase } from "@/common/functions/toTitleCase";
import { searchResultTheme } from "../SearchResult.theme";

export type FilterOption = {
  label: string;
  value: string;
  isDefault?: boolean;
};

export type Filter = {
  [key: string]: FilterOption[];
};
export const SearchResultFilter = ({
  filters,
  onValueChange,
}: {
  filters: Filter;
  onValueChange: (key: string, value: FilterOption["value"]) => void;
}) => {
  const { filter, filterField, filterToggleGroup } = searchResultTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={filter()}>
      {Object.entries(filters).map(([filterFor, filterOptions], i) => (
        <Field key={i} label={toTitleCase(filterFor)} className={filterField()}>
          <ToggleGroup
            type="single"
            defaultValue={filterOptions.find((item) => item.isDefault)?.value}
            className={filterToggleGroup()}
            onValueChange={(v) => onValueChange(filterFor, v)}
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
    </div>
  );
};
