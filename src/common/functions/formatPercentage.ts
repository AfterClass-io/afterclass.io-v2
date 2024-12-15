export function formatPercentage(
  amount: number,
  options: Intl.NumberFormatOptions | undefined = undefined,
) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  }).format(amount);
}
