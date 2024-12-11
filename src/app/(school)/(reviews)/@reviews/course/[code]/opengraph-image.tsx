import {
  AfterclassIcon,
  BooksIcon,
  CustomIcon,
  GraduationCapIcon,
  HeartIcon,
  PencilIcon,
} from "@/common/components/CustomIcon";
import { SMUIcon } from "@/common/components/CustomIcon/SchoolIcon/SMUIcon";
import { OgImage } from "@/modules/opengraph/components/OgImage";
import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";

export const alt = "";

export const size = {
  width: 720,
  height: 400,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { code: string } }) {
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
          Introduction to Business Research: Philosophy of Science and
          Behavioural Approaches to Organizing
        </OgImage.Title>
        <OgImage.Content
          rating="4.50"
          reviewCount="1,435"
          profCount="15"
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
