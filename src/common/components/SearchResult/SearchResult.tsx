import { type ReactNode } from "react";
import { SearchResultTitle } from "./SearchResultTitle";
import { SearchResultContent } from "./SearchResultContent";
import { SearchResultList } from "./SearchResultList";
import { SearchResultEmpty } from "./SearchResultEmpty";
import { SearchResultItem } from "./SearchResultItem";
import { SearchResultDivider } from "./SearchResultDivider";
import { SearchResultFilter } from "./SearchResultFilter";
import { searchResultTheme } from "./SearchResult.theme";

export const SearchResult = ({ children }: { children: ReactNode }) => {
  const { root } = searchResultTheme();
  return <div className={root()}>{children}</div>;
};

SearchResult.Title = SearchResultTitle;
SearchResult.Content = SearchResultContent;
SearchResult.List = SearchResultList;
SearchResult.Item = SearchResultItem;
SearchResult.Empty = SearchResultEmpty;
SearchResult.Divider = SearchResultDivider;
SearchResult.Filter = SearchResultFilter;
