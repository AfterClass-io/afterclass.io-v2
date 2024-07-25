import React from 'react';
import { type ComponentPropsWithoutRef } from "react";
import { NoticeCardTheme } from "./NoticeCardTheme";
import { AfterclassIcon } from "@/common/components/CustomIcon";


export type NoticeCardProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  subtitle: string;
  wrapperProps?: ComponentPropsWithoutRef<"div">;
};
export const NoticeCard: React.FC<NoticeCardProps> = ({
  title,
  subtitle,
  wrapperProps,
  className,
  ...props
}) => {
  const theme = NoticeCardTheme();
  
  const iconStyle = { color: '#5139D4' };
  const wrapper = theme.wrapper({ className: wrapperProps?.className });
  const icon = theme.icons();
  const smallIconClass = NoticeCardTheme.variants.size.small.join(' ');
  const mediumIconClass = NoticeCardTheme.variants.size.medium.join(' ');
  const largeIconClass = NoticeCardTheme.variants.size.large.join(' ');
  const titleClass = theme.title();
  const subtitleClass = theme.subtitle();
  const textClass = theme.textBox();
  return (
    <div className={wrapper}>
      <div className={icon}>
        <AfterclassIcon className={smallIconClass} style ={iconStyle} />
        <AfterclassIcon className={mediumIconClass} style ={iconStyle} />
        <AfterclassIcon className={largeIconClass} style ={iconStyle} />
        <div className={textClass}>
          <div className={titleClass}>
            {title}
          </div>
          <div className={subtitleClass}>
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  
  );
};
export default NoticeCard;