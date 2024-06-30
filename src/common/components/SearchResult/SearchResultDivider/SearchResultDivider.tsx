import { searchResultTheme } from "../SearchResult.theme";

export const SearchResultDivider = () => {
  const { divider } = searchResultTheme();
  return <div className={divider()} />;
};
