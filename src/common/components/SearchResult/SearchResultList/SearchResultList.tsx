import { type ReactNode } from "react";
import { searchResultTheme } from "../SearchResult.theme";

export const SearchResultList = ({ children }: { children: ReactNode }) => {
  const { list } = searchResultTheme({ size: { initial: "sm", md: "md" } });
  return <div className={list()}>{children}</div>;
};
