import { type ReactNode } from "react";
import { SearchResultTitle } from "./SearchResultTitle";
import { SearchResultItem } from "./SearchResultItem";
import { SearchResultFilter } from "./SearchResultFilter";
import { searchResultTheme } from "./SearchResult.theme";

const SearchResultContent = ({ children }: { children: ReactNode }) => {
  const { content } = searchResultTheme();
  return <div className={content()}>{children}</div>;
};

const SearchResultList = ({ children }: { children: ReactNode }) => {
  const { list } = searchResultTheme();
  return <div className={list()}>{children}</div>;
};

const SearchResultDivider = () => {
  const { divider } = searchResultTheme();
  return <div className={divider()} />;
};

export const SearchResult = ({ children }: { children: ReactNode }) => {
  const { root } = searchResultTheme();
  return <div className={root()}>{children}</div>;
};

SearchResult.Title = SearchResultTitle;
SearchResult.Content = SearchResultContent;
SearchResult.List = SearchResultList;
SearchResult.Item = SearchResultItem;
SearchResult.Divider = SearchResultDivider;
SearchResult.Filter = SearchResultFilter;
