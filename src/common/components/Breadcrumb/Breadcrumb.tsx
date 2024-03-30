// ref: https://ui.shadcn.com/docs/components/breadcrumb
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { SlashIcon, DotsHorizontalIcon } from "@/common/components/CustomIcon";
import { breadcrumbTheme } from "./Breadcrumb.theme";

type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav"> & {
  separator?: React.ReactNode;
};
const BreadcrumbRoot = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />,
);
BreadcrumbRoot.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => {
  const { list } = breadcrumbTheme();
  return <ol ref={ref} className={list({ className })} {...props} />;
});
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => {
  const { item } = breadcrumbTheme();
  return <li ref={ref} className={item({ className })} {...props} />;
});
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  const { link } = breadcrumbTheme();
  return <Comp ref={ref} className={link({ className })} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => {
  const { page } = breadcrumbTheme();
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={page({ className })}
      {...props}
    />
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => {
  const { separator } = breadcrumbTheme();
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={separator({ className })}
      {...props}
    >
      {children ?? <SlashIcon />}
    </li>
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  const { ellipsisWrapper, ellipsisIcon } = breadcrumbTheme();
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={ellipsisWrapper({ className })}
      {...props}
    >
      <DotsHorizontalIcon className={ellipsisIcon()} />
      <span className="sr-only">More</span>
    </span>
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

interface IBreadcrumb
  extends React.ForwardRefExoticComponent<
    BreadcrumbProps & React.RefAttributes<HTMLElement>
  > {
  List: typeof BreadcrumbList;
  Item: typeof BreadcrumbItem;
  Link: typeof BreadcrumbLink;
  Page: typeof BreadcrumbPage;
  Separator: typeof BreadcrumbSeparator;
  Ellipsis: typeof BreadcrumbEllipsis;
}

export const Breadcrumb = {
  ...BreadcrumbRoot,
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
} as IBreadcrumb;
