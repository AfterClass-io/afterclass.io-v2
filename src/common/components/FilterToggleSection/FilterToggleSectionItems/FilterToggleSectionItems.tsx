import { filterToggleSectionTheme } from "../FilterToggleSection.theme";
import {
  FilterToggleSectionItem,
  type FilterItem,
} from "../FilterToggleSectionItem";

export const FilterToggleSectionItems = ({
  data,
  selectedItems,
  setSelectedItems,
}: {
  data: FilterItem[];
  selectedItems: FilterItem["value"][];
  setSelectedItems: (values: FilterItem["value"][]) => void;
}) => {
  const { container } = filterToggleSectionTheme();
  return (
    <div className={container()}>
      {data.map((item, index) => (
        <FilterToggleSectionItem
          key={index}
          {...item}
          onClick={() => {
            selectedItems.includes(item.value)
              ? setSelectedItems(selectedItems.filter((v) => v !== item.value))
              : setSelectedItems([...selectedItems, item.value]);
          }}
          selected={selectedItems.includes(item.value)}
        />
      ))}
    </div>
  );
};
