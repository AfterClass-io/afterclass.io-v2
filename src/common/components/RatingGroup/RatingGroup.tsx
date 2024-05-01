"use client";

import {
  type ComponentPropsWithoutRef,
  Fragment,
  forwardRef,
  useState,
} from "react";
import { cn } from "@/common/functions";
import { HeartIcon, HeartUnfilledIcon } from "@/common/components/CustomIcon";
import { ratingGroupTheme } from "./RatingGroup.theme";

const randomHash = (Math.random() + 1).toString(36).substring(7);
const DEFAULT_MAX_RATING = 5;

export type RatingGroupProps = ComponentPropsWithoutRef<"input"> & {
  maxRating?: number;
};

export const RatingGroup = forwardRef<HTMLInputElement, RatingGroupProps>(
  ({ maxRating = DEFAULT_MAX_RATING, ...props }, ref) => {
    const [rating, setRating] = useState(0);
    const [active, setActive] = useState(0);

    const { wrapper, label, input, icon } = ratingGroupTheme();

    return (
      <div className={wrapper()}>
        {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
        {[...Array(maxRating)].map((_, i) => {
          const key = `${randomHash}_rating-${i + 1}`;
          return (
            <Fragment key={key}>
              <label
                className={label()}
                onClick={() => setRating(i + 1)}
                onMouseEnter={() => setActive(i + 1)}
                onMouseLeave={() => setActive(rating)}
              >
                <input
                  className={input()}
                  type="radio"
                  name="rating"
                  value={i + 1}
                  ref={ref}
                  {...props}
                />
                <HeartUnfilledIcon
                  className={cn(icon(), active > i && "hidden")}
                />
                <HeartIcon className={cn(icon(), active <= i && "hidden")} />
              </label>
            </Fragment>
          );
        })}
      </div>
    );
  },
);
RatingGroup.displayName = "RatingGroup";
