import { searchResultTheme } from "../SearchResult.theme";

export const SearchResultDivider = () => {
  const { divider } = searchResultTheme({ size: { initial: "sm", md: "md" } });
  return <div className={divider()} />;
};
