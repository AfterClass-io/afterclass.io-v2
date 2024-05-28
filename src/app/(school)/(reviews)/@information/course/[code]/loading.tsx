import { InformationCard } from "@/modules/reviews/InformationSection/InformationCard";

export default function Loading() {
  return (
    <div className="flex w-full gap-6">
      <div className="w-2/3">
        <InformationCard.Skeleton />
      </div>
      <div className="w-1/3">TODO: course detail</div>
    </div>
  );
}
