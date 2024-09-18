/**
 * Returns a human readable timestamp string like "31/12/2022 23:59:59AM"
 *
 * @param ts timestamp in seconds
 */
export function getHumanReadableTimestampString(ts: number) {
  const date = new Date(ts);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
