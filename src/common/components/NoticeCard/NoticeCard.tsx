import { AfterclassIcon } from "@/common/components/CustomIcon";
import { noticeCardTheme, type NoticeCardVariants } from "./NoticeCard.theme";
import { type ReactNode } from "react";

export type NoticeCardProps = NoticeCardVariants & {
  title: string;
  children: ReactNode;
};

export const NoticeCard = ({ title, children, isError }: NoticeCardProps) => {
  const {
    wrapper,
    floatingIcons,
    icon,
    textContainer,
    title: titleClassNames,
    children: childrenClassNames,
  } = noticeCardTheme({
    isError,
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={wrapper()}>
      <div className={floatingIcons()}>
        <AfterclassIcon className={icon({ iconSize: "xl" })} />
        <AfterclassIcon className={icon({ iconSize: "lg" })} />
        <AfterclassIcon className={icon({ iconSize: "md" })} />
        <AfterclassIcon className={icon({ iconSize: "sm" })} />
      </div>

      <div className={textContainer()}>
        <div className={titleClassNames()}>{title}</div>
        <div className={childrenClassNames()}>{children}</div>
      </div>
    </div>
  );
};
