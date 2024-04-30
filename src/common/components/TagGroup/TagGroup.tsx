import { Fragment, forwardRef, type ComponentPropsWithoutRef } from "react";

import { Tag } from "@/common/components/Tag";
import { tagGroupTheme } from "./TagGroup.theme";

const randomHash = (Math.random() + 1).toString(36).substring(7);

export type TagGroupProps = ComponentPropsWithoutRef<"input"> & {
  items: { label: string; value: string }[];
};

export const TagGroup = forwardRef<HTMLInputElement, TagGroupProps>(
  ({ items, ...props }, ref) => {
    const { wrapper, input, tag } = tagGroupTheme();
    return (
      <div className={wrapper()}>
        {items.map(({ label, value }, i) => {
          const key = `${randomHash}_tag-${i}`;
          return (
            <Fragment key={key}>
              <label>
                <input
                  className={input()}
                  type="checkbox"
                  value={value}
                  ref={ref}
                  {...props}
                />
                <Tag clickable={true} className={tag()}>
                  {label}
                </Tag>
              </label>
            </Fragment>
          );
        })}
      </div>
    );
  },
);
TagGroup.displayName = "TagGroup";
