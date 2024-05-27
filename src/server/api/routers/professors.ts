import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const DEFAULT_PAGE_SIZE = 10;

export const professorsRouter = createTRPCRouter({
  getAll: publicProcedure.query(
    async ({ ctx }) => await ctx.db.professors.findMany(),
  ),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(
    async ({ input, ctx }) =>
      await ctx.db.professors.findUnique({
        where: {
          id: input.id,
        },
      }),
  ),

  getBySlug: publicProcedure.input(z.object({ slug: z.string() })).query(
    async ({ input, ctx }) =>
      await ctx.db.professors.findUnique({
        include: {
          belongToUniversity: true,
        },
        where: {
          slug: input.slug,
        },
      }),
  ),

  getByCourseCode: publicProcedure
    .input(
      z.object({
        code: z.string(),
        page: z.number().default(1),
      }),
    )
    .query(
      async ({ ctx, input }) =>
        await ctx.db.professors.findMany({
          skip: DEFAULT_PAGE_SIZE * (input.page - 1),
          take: DEFAULT_PAGE_SIZE,
          where: {
            classes: {
              some: {
                course: {
                  code: input.code,
                },
              },
            },
          },
        }),
    ),

  countByCourseCode: publicProcedure
    .input(z.object({ courseCode: z.string() }))
    .query(
      async ({ input, ctx }) =>
        await ctx.db.professors.count({
          where: {
            classes: {
              some: {
                course: {
                  code: input.courseCode,
                },
              },
            },
          },
        }),
    ),
});
