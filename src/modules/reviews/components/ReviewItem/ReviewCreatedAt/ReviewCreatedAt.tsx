"use client";
import {
  getHumanReadableTimestampDelta,
  getHumanReadableTimestampString,
} from "@/common/functions";
import { Tooltip } from "@/common/components/Tooltip";
import { reviewItemTheme } from "../ReviewItem.theme";

export const ReviewCreatedAt = ({ createdAt }: { createdAt: number }) => {
  const { timedelta } = reviewItemTheme({ size: { initial: "sm", md: "md" } });
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <span className={timedelta()}>
          {getHumanReadableTimestampDelta(createdAt / 1000)}
        </span>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>{getHumanReadableTimestampString(createdAt)}</span>
      </Tooltip.Content>
    </Tooltip>
  );
};
