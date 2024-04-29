export type Review = {
  id: string;
  body: string;
  courseCode: string;
  username: string;
  likeCount: number;
  labels: { name: string }[];
  createdAt: number;
  reviewedUniversityId: number;
  reviewFor: "professor" | "course";
  professorName?: string;
};
