"use client";

/**
 * intentionally commented out as somehow it is trying to access 'fs' module
 * which is not available in the browser
 */
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "@/../tailwind.config"

import { useMediaQuery } from "react-responsive";

import { toTitleCase } from "@/common/functions/toTitleCase";

const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

/**
 * !IMPORTANT:
 * Use this hook ONLY if you cant achieve the same with tailwind breakpoints.
 *
 * @desc The `useBreakpoint()` hook is used to get the current
 *       screen breakpoint based on the TailwindCSS config.
 *
 * @usage
 *    ```tsx
 *    import { useBreakpoint } from "@/hooks/useBreakpoint";
 *
 *    const { isAboveSm, isBelowSm, sm } = useBreakpoint("sm");
 *    console.log({ isAboveSm, isBelowSm, sm });
 *
 *    const { isAboveMd } = useBreakpoint("md");
 *    const { isAboveLg } = useBreakpoint("lg");
 *    const { isAbove2Xl } = useBreakpoint("2xl");
 *    console.log({ isAboveMd, isAboveLg, isAbove2Xl });
 *    ```
 *
 * @see https://stackoverflow.com/a/76630444/6543935
 */
export function useBreakpoint<K extends keyof typeof breakpoints>(
  breakpointKey: K,
) {
  const breakpointValue = breakpoints[breakpointKey];
  const bool = useMediaQuery({ query: `(max-width: ${breakpointValue})` });
  const capitalizedKey = toTitleCase(breakpointKey);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, "")),
    [`isAbove${capitalizedKey}`]: !bool,
    [`isBelow${capitalizedKey}`]: bool,
  } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>;
}
