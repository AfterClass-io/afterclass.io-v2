// ref: https://ui.shadcn.com/docs/components/breadcrumb
import * as React from "react";

import { BreadcrumbItem } from "./BreadcrumbItem";
import { BreadcrumbLink } from "./BreadcrumbLink";
import { BreadcrumbList } from "./BreadcrumbList";
import { BreadcrumbPage } from "./BreadcrumbPage";
import { BreadcrumbSeparator } from "./BreadcrumbSeparator";
import { BreadcrumbEllipsis } from "./BreadcrumbEllipsis";

export type BreadcrumbRootProps = React.ComponentPropsWithoutRef<"nav"> & {
  separator?: React.ReactNode;
};

const BreadcrumbRoot = React.forwardRef<HTMLElement, BreadcrumbRootProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />,
);
BreadcrumbRoot.displayName = "Breadcrumb";

export const Breadcrumb = Object.assign({}, BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
});
