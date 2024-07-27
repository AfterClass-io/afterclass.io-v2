'use client';

import React from 'react';
import { type ComponentPropsWithoutRef } from "react";
import { ErrorNoticeCardTheme } from "./ErrorNoticeCardTheme";
import { AfterclassIcon } from "@/common/components/CustomIcon";



export type ErrorNoticeCardProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  subtitle: string;
  wrapperProps?: ComponentPropsWithoutRef<"div">;
};
export const ErrorNoticeCard: React.FC<ErrorNoticeCardProps> = ({
  title,
  subtitle,
  wrapperProps,
  className,
  ...props
}) => {
  const theme = ErrorNoticeCardTheme();
  
  const iconStyle = { color: '#DC2626' };
  const wrapper = theme.wrapper({ className: wrapperProps?.className });
  const icon = theme.icons();
  const smallIconClass = ErrorNoticeCardTheme.variants.size.small.join(' ');
  const mediumIconClass = ErrorNoticeCardTheme.variants.size.medium.join(' ');
  const largeIconClass = ErrorNoticeCardTheme.variants.size.large.join(' ');
  const titleClass = theme.title();
  const subtitleClass = theme.subtitle();
  const textClass = theme.textBox();
  const mainText = " Otherwise, you can get help from us ";
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
          <a 
          href="#" 
          onClick={(e) => {
                e.preventDefault();
                window.location.reload();
          }} 
          className="underline text-blue-600 hover:text-blue-800"
          >
              {subtitle.split('.')[0]}!
            </a>
            {mainText}
            <a
              href="https://t.me/afterclass"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
             @afterclass
            </a>
            {' '}on Telegram.
          </div>
        </div>
      </div>
    </div>
  
  );
};
export default ErrorNoticeCard;