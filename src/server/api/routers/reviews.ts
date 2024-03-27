import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const DEFAULT_PAGE_SIZE = 10;

export const reviewsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        universityId: z.number(),
        courseId: z.string(),
        profId: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const reviews = await ctx.db.reviews.findMany({
        skip: DEFAULT_PAGE_SIZE * (input.page - 1),
        take: DEFAULT_PAGE_SIZE,
        where: {
          reviewedUniversityId: input.universityId,
          reviewedCourseId: input.courseId,
          reviewedProfessorId: input.profId,
        },
      });
      return reviews;
    }),
});
