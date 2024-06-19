import { searchResultTheme } from "../SearchResult.theme";

export const SearchResultEmpty = ({ show = false }: { show: boolean }) => {
  const { empty } = searchResultTheme({ show });
  return <div className={empty()}>No results found</div>;
};
