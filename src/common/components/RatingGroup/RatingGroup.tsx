"use client";

import { type ComponentPropsWithoutRef, forwardRef, useState } from "react";
import type { FieldValues, ControllerRenderProps } from "react-hook-form";

import { cn } from "@/common/functions";
import { HeartIcon, HeartUnfilledIcon } from "@/common/components/CustomIcon";
import { ratingGroupTheme } from "./RatingGroup.theme";

const DEFAULT_MAX_RATING = 5;

type OptionalControllerProps = {
  [K in keyof ControllerRenderProps<
    FieldValues,
    string
  >]?: ControllerRenderProps<FieldValues, string>[K];
};

export type RatingGroupProps = ComponentPropsWithoutRef<"input"> &
  OptionalControllerProps & {
    maxRating?: number;
  };

export const RatingGroup = forwardRef<HTMLInputElement, RatingGroupProps>(
  ({ maxRating = DEFAULT_MAX_RATING, ...props }, ref) => {
    const [rating, setRating] = useState(0);
    const [active, setActive] = useState(0);

    const handleRatingChange = (value: number) => {
      setRating(value);
      props.onChange?.(value);
    };

    const { wrapper, label, input, icon } = ratingGroupTheme();

    return (
      <div className={wrapper()}>
        {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
        {[...Array(maxRating)].map((_, i) => {
          const value = i + 1;
          return (
            <label
              key={i}
              className={label()}
              onClick={() => handleRatingChange(value)}
              onMouseEnter={() => setActive(value)}
              onMouseLeave={() => setActive(rating)}
            >
              <input
                className={input()}
                type="radio"
                name="rating"
                value={value}
                ref={ref}
                {...props}
              />
              <HeartUnfilledIcon
                className={cn(icon(), active > i && "hidden")}
              />
              <HeartIcon className={cn(icon(), active <= i && "hidden")} />
            </label>
          );
        })}
      </div>
    );
  },
);
RatingGroup.displayName = "RatingGroup";
