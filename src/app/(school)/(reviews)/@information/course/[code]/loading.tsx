import { InformationCard } from "@/modules/reviews/InformationSection/InformationCard";
import { DetailCard } from "@/modules/reviews/InformationSection/DetailCard";

export default function Loading() {
  return (
    <div className="flex w-full flex-wrap gap-6 md:flex-nowrap">
      <div className="w-full md:w-2/3">
        <InformationCard.Skeleton />
      </div>
      <div className="w-full md:w-1/3">
        <DetailCard.Skeleton />
      </div>
    </div>
  );
}
