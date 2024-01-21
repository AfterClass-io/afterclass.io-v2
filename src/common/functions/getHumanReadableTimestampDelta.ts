/**
 * Calculates the human-readable time delta between two Unix epoch timestamps.
 *
 * @param t0 - The Unix epoch timestamp to compare against (in seconds).
 * @param t1 - [optional] The Unix epoch timestamp to compare with (in seconds).
 *              If omitted, the current time is used.
 * @returns A human-readable representation of the time delta. eg `1d`, `2h`, `just now`.
 *
 * @example
 * const t0 = 1642694400; // Unix timestamp for 2022-01-21 00:00:00
 * const t1 = 1642780800; // Unix timestamp for 2022-01-22 00:00:00
 * const delta = getHumanReadableTimestampDelta(t0, t1);
 * console.log(delta); // Output: '1d'
 *
 * @example
 * const delta = getHumanReadableTimestampDelta(Date.now() / 1000);
 * console.log(delta); // Output: 'just now'
 */
export function getHumanReadableTimestampDelta(
  t0: number,
  t1: number = Date.now() / 1000,
) {
  const deltaSeconds = Math.abs(t1 - t0);
  const denominators = [
    { unit: "y", seconds: 365 * 24 * 60 * 60 },
    { unit: "mo", seconds: 30 * 24 * 60 * 60 },
    { unit: "w", seconds: 7 * 24 * 60 * 60 },
    { unit: "d", seconds: 24 * 60 * 60 },
    { unit: "h", seconds: 60 * 60 },
    { unit: "m", seconds: 60 },
    { unit: "s", seconds: 1 },
  ];
  for (const denominator of denominators) {
    const value = Math.floor(deltaSeconds / denominator.seconds);
    if (value > 0) return `${value}${denominator.unit}`;
  }
  return "just now"; // If the delta is less than a second
}
