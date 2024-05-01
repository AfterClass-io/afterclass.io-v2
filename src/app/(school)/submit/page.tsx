import { ReviewLabelType, type UniversityAbbreviation } from "@prisma/client";

import { SchoolTag } from "@/common/components/SchoolTag";
import { PageTitle } from "@/common/components/PageTitle";
import { api } from "@/common/tools/trpc/server";
import { Button } from "@/common/components/Button";
import { toTitleCase } from "@/common/functions/toTitleCase";
import { ReviewForm, ReviewFormSection } from "@/modules/submit/ReviewForm";

export default async function SubmitReviewPage() {
  // TODO: get school from user field, to be populated automatically on successful signup based on user's email domain
  const school = "SMU" satisfies UniversityAbbreviation;

  const [courses, professors, labels] = await Promise.all([
    api.courses.getAllByUniAbbrv({ universityAbbrv: school }),
    api.professors.getAllByUniAbbrv({ universityAbbrv: school }),
    api.labels.getAll(),
  ]);

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
