import { ImageResponse } from "next/og";
import React from "react";

import { GraduationCapIcon } from "@/common/components/CustomIcon";
import { api } from "@/common/tools/trpc/server";
import { OgImage } from "@/modules/opengraph/components/OgImage";
import formatPercentage from "@/common/functions/formatPercentage";
import { toTitleCase } from "@/common/functions";

export const runtime = "nodejs";

export const alt = "AfterClass";
export const size = {
  width: 720,
  height: 400,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const prof = await api.professors.getBySlug({ slug });
  if (!prof) return null;

  const { averageRating, reviewCount, reviewLabels } =
    await api.reviews.getMetadataByProfSlug({
      slug,
    });
  const courseCount = await api.courses.countByProfSlug({ slug });

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
          rating={averageRating.toFixed(2)}
          reviewCount={reviewCount}
          courseCount={courseCount}
          statItems={reviewLabels.map((label) => ({
            label: toTitleCase(label.name),
            value: formatPercentage(label.count && label.count / reviewCount),
          }))}
        />
      </OgImage>
    ),
    {
      ...size,
    },
  );
}
