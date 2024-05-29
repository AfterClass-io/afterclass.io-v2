import { FilterToggleSection } from "@/common/components/FilterToggleSection";

export default function Loading() {
  return (
    <FilterToggleSection>
      <FilterToggleSection.Header type="professor" />
      <FilterToggleSection.Items.Skeleton />
    </FilterToggleSection>
  );
}
