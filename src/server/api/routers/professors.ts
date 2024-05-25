import { z } from "zod";
import { type Prisma, UniversityAbbreviation } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

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

  getAllByUniAbbrv: publicProcedure
    .input(
      z.object({
        universityAbbrv: z.nativeEnum(UniversityAbbreviation),
      }),
    )
    .query(async ({ ctx, input }) => {
      const professors = await ctx.db.professors.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
        } satisfies Prisma.ProfessorsSelect,
        where: {
          belongToUniversity: {
            abbrv: input.universityAbbrv,
          },
        },
      });
      return professors;
    }),
});
