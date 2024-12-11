import { GraduationCapIcon } from "@/common/components/CustomIcon";
import { api } from "@/common/tools/trpc/server";
import { OgImage } from "@/modules/opengraph/components/OgImage";
import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "nodejs";

export const alt = "";

export const size = {
  width: 720,
  height: 400,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const prof = await api.professors.getBySlug({ slug });
  if (!prof) return null;

  const validProfessorReviewLabels = await api.labels.getAllByType({
    typeOf: "PROFESSOR",
  });

  const { items: reviewsOfThisProf } = await api.reviews.getByProfSlugProtected(
    {
      slug,
    },
  );

  return new ImageResponse(
    (
      <OgImage>
        <OgImage.Header school="SMU" />
        <OgImage.Title
          icon={
            <GraduationCapIcon
              size="2.25rem"
              style={{
                color: "#7A7A85",
              }}
            />
          }
        >
          {prof.name}
        </OgImage.Title>
        <OgImage.Content
          rating="4.50"
          reviewCount="1,435"
          courseCount="15"
          statItems={[
            { label: "Interesting", value: "64%" },
            { label: "Practical", value: "64%" },
            { label: "Gained New Skills", value: "64%" },
          ]}
        />
      </OgImage>
    ),
    {
      ...size,
    },
  );
}
