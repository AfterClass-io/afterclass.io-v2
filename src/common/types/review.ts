import { type Labels, type UniversityAbbreviation } from "@prisma/client";

export type Review = {
  id: string;
  body: string;
  tips: string;
  rating: number;
  courseCode: string;
  username: string;
  likeCount: number;
  createdAt: number;
  reviewLabels: Pick<Labels, "name">[];
  university: UniversityAbbreviation;
  reviewFor: "professor" | "course";
  professorName?: string;
  professorSlug?: string;
};
