import Heading from "@/common/components/Heading";
import { pageTitleTheme } from "./PageTitle.theme";

export type PageTitleProps = {
  children: React.ReactNode;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
};

export const PageTitle = ({
  children,
  contentLeft,
  contentRight,
}: PageTitleProps) => {
  const { wrapper, heading } = pageTitleTheme();
  return (
    <div className={wrapper()}>
      {contentLeft}
      <Heading className={heading()} as="h1">
        {children}
      </Heading>
      {contentRight}
    </div>
  );
};
