export default function calculateAverage(array: number[]) : string {
  const total = array.reduce((total: number, item: number) => total + item, 0);
  return (total / array.length).toFixed(2);
}