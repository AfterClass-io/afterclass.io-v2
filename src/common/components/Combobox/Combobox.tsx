import { Combobox as PrimitiveCombobox } from "@headlessui/react";
import { comboboxTheme, type ComboboxVariants } from "./Combobox.theme";
import { CheckIcon, ChevronDownIcon } from "@/common/components/CustomIcon";

export type ComboboxProps = ComboboxVariants & {
  filtered: string[];
  selectedValue: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const Combobox = ({
  filtered,
  selectedValue,
  setSelected,
  query,
  setQuery,
  size = "md",
}: ComboboxProps) => {
  const {
    input: inputClasses,
    inputContainer,
    option,
    optionContainer,
    optionLabel,
    selectedIcon,
    showMoreIcon,
    showMoreButton,
    nothingFound,
  } = comboboxTheme({ size });
  return (
    <PrimitiveCombobox value={selectedValue} onChange={setSelected}>
      <div className={inputContainer()}>
        <PrimitiveCombobox.Button className={showMoreButton()}>
          <ChevronDownIcon className={showMoreIcon()} />
        </PrimitiveCombobox.Button>
        <PrimitiveCombobox.Input
          onChange={(ev) => setQuery(ev.target.value)}
          className={inputClasses()}
        />
      </div>
      <PrimitiveCombobox.Options className={optionContainer()}>
        {filtered.length === 0 && query !== "" ? (
          <div className={nothingFound()}>Nothing found.</div>
        ) : (
          filtered.map((el) => (
            <PrimitiveCombobox.Option
              key={el}
              className={({ active }) => option({ active })}
              value={el}
            >
              {({ selected, active }) => (
                <>
                  <span className={optionLabel({ selected })}>{el}</span>
                  <CheckIcon className={selectedIcon({ selected, active })} />
                </>
              )}
            </PrimitiveCombobox.Option>
          ))
        )}
      </PrimitiveCombobox.Options>
    </PrimitiveCombobox>
  );
};
