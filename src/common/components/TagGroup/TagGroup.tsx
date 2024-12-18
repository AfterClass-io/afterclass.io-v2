import { forwardRef, type ComponentPropsWithoutRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { FieldValues, ControllerRenderProps } from "react-hook-form";

import { Tag } from "@/common/components/Tag";
import { tagGroupTheme } from "./TagGroup.theme";

type OptionalControllerProps = {
  [K in keyof ControllerRenderProps<
    FieldValues,
    string
  >]?: ControllerRenderProps<FieldValues, string>[K];
};

export type TagGroupProps = ComponentPropsWithoutRef<"button"> &
  OptionalControllerProps & {
    items: { label: string; value: string }[];
  };

export const TagGroup = forwardRef<HTMLButtonElement, TagGroupProps>(
  ({ items, value: propValue, ...props }, ref) => {
    const fieldValue = propValue as string[];
    const { wrapper, input, tag } = tagGroupTheme();
    return (
      <div className={wrapper()}>
        {items.map(({ label, value }, i) => (
          <label key={i}>
            <CheckboxPrimitive.Root
              className={input()}
              value={value}
              checked={fieldValue?.includes(value)}
              onCheckedChange={(checked) => {
                if (checked) {
                  props.onChange?.([...fieldValue, value]);
                } else {
                  props.onChange?.(fieldValue.filter((v) => v !== value));
                }
              }}
              {...props}
              ref={ref}
            />
            <Tag clickable={true} className={tag()}>
              {label}
            </Tag>
          </label>
        ))}
      </div>
    );
  },
);
TagGroup.displayName = "TagGroup";
