import { SchoolTag } from "@/common/components/SchoolTag";
import { PageTitle } from "@/common/components/PageTitle";
import { ReviewForm } from "@/modules/submit/ReviewForm";
import { ReviewLabelType, type UniversityAbbreviation } from "@prisma/client";
import { api } from "@/common/tools/trpc/server";
import { ReviewFormSection } from "@/modules/submit/ReviewFormSection";
import { Button } from "@/common/components/Button";
import { toTitleCase } from "@/common/functions/toTitleCase";

export default async function SubmitReviewPage() {
  // TODO: get school from user field, to be populated automatically on successful signup based on user's email domain
  const school = "SMU" satisfies UniversityAbbreviation;

  const courses = await api.courses.getAllByUniAbbrv({
    universityAbbrv: school,
  });
  const professors = await api.professors.getAllByUniAbbrv({
    universityAbbrv: school,
  });
  const labels = await api.labels.getAll();

  return (
    <div className="flex w-full flex-col gap-8">
      <PageTitle contentRight={<SchoolTag school={school} />}>
        Write a Review
      </PageTitle>
      <ReviewForm>
        <ReviewFormSection
          comboboxItems={courses.map((course) => ({
            value: course.id,
            label: `${course.code} ${course.name}`,
          }))}
          reviewLabels={labels
            .filter((label) => label.typeOf === ReviewLabelType.COURSE)
            .map((label) => ({
              value: label.id.toString(),
              label: toTitleCase(label.name.replaceAll("_", " ")),
            }))}
          maxRating={5}
          type="course"
        />
        <ReviewFormSection
          comboboxItems={professors.map((prof) => ({
            value: prof.id,
            label: prof.name,
          }))}
          reviewLabels={labels
            .filter((label) => label.typeOf === ReviewLabelType.PROFESSOR)
            .map((label) => ({
              value: label.id.toString(),
              label: toTitleCase(label.name.replaceAll("_", " ")),
            }))}
          maxRating={5}
          type="professor"
          isOptional
        />
        <Button variant="primary" type="submit">
          Submit as Person
        </Button>
      </ReviewForm>
    </div>
  );
}
