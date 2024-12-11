import { ImageResponse } from "next/og";
import React from "react";

import { BooksIcon } from "@/common/components/CustomIcon";
import { OgImage } from "@/modules/opengraph/components/OgImage";
import { api } from "@/common/tools/trpc/server";
import { toTitleCase } from "@/common/functions";
import formatPercentage from "@/common/functions/formatPercentage";

export const runtime = "nodejs";

export const alt = "AfterClass";
export const size = {
  width: 720,
  height: 400,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { code: string } }) {
  const courseCode = params.code;

  const course = await api.courses.getByCourseCode({ code: courseCode });
  if (!course) return null;

  const { averageRating, reviewCount, reviewLabels } =
    await api.reviews.getMetadataByCourseCode({
      code: courseCode,
    });

  const profCount = await api.professors.countByCourseCode({ courseCode });

  return new ImageResponse(
    (
      <OgImage>
        <OgImage.Header school="SMU" code={params.code} />
        <OgImage.Title
          icon={
            <BooksIcon
              size="2.25rem"
              style={{
                color: "#7A7A85",
              }}
            />
          }
        >
          {course?.name}
        </OgImage.Title>
        <OgImage.Content
          rating={averageRating.toFixed(2)}
          reviewCount={reviewCount}
          profCount={profCount}
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
