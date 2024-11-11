import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { ReviewLabelType } from "@prisma/client";

export const reviewLabelsRouter = createTRPCRouter({
  getAllByType: publicProcedure
    .input(z.object({ typeOf: z.nativeEnum(ReviewLabelType) }))
    .query(
      async ({ input, ctx }) =>
        await ctx.db.reviewLabels.findMany({
          include: {
            review: true,
            label: true,
          },
          where: {
            label: {
              typeOf: input.typeOf,
            },
          },
        }),
    ),
  getByProfSlug: publicProcedure.input(z.object({ slug: z.string() })).query(
    async ({ input, ctx }) =>
      await ctx.db.reviewLabels.findMany({
        include: {
          review: true,
          label: true,
        },
        where: {
          review: {
            reviewedProfessor: {
              slug: input.slug,
            },
          },
        },
      }),
  ),
  countByCourseCode: publicProcedure
    .input(z.object({ courseCode: z.string() }))
    .query(
      async ({ input, ctx }) =>
        await ctx.db.reviewLabels.findMany({
          where: {
            review: {
              reviewedCourse: {
                code: input.courseCode,
              },
            },
          },
        }),
    ),
});
