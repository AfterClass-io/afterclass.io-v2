import { type UniversityAbbreviation } from "@prisma/client";

export type Review = {
  id: string;
  body: string;
  courseCode: string;
  username: string;
  likeCount: number;
  labels: { name: string }[];
  createdAt: number;
  university: UniversityAbbreviation;
  reviewFor: "professor" | "course";
  professorName?: string;
};
