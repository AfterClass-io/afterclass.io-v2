import { z } from "zod";
import { type Prisma, UniversityAbbreviation } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const DEFAULT_PAGE_SIZE = 10;

const PROFESSOR_FIELDS = {
  id: true,
  name: true,
  email: true,
  slug: true,
  photoUrl: true,
  profileUrl: true,
  belongToUniversityId: true,
  belongToUniversity: {
    select: {
      id: true,
      name: true,
      abbrv: true,
      siteUrl: true,
    },
  },
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.ProfessorsSelect;

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
    .query(async ({ ctx, input }) => {
      const professors = await ctx.db.professors.findMany({
        skip: DEFAULT_PAGE_SIZE * (input.page - 1),
        take: DEFAULT_PAGE_SIZE,
        select: {
          ...PROFESSOR_FIELDS,
          _count: {
            select: {
              /**
               * unfortunately, we can't rely `classes: true` here and have to
               * count manually with a Set.
               * prisma doesn't support count distinct natively.
               * see prisma issue 4228
               */
              classes: true,
              reviews: {
                where: {
                  reviewedCourse: {
                    code: input.code,
                  },
                },
              },
            },
          },
          classes: {
            select: {
              course: {
                select: {
                  id: true, // Get course ID to count distinct courses later
                },
              },
            },
          },
        },
        where: {
          classes: {
            some: {
              course: {
                code: input.code,
              },
            },
          },
        },
      });
      const coursesWithDistinctProfessorCount = professors.map((professor) => {
        const uniqueCourses = new Set(
          professor.classes.map((cls) => cls.course.id),
        );
        professor._count.classes = uniqueCourses.size;
        return professor;
      });
      return coursesWithDistinctProfessorCount;
    }),

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
    .query(
      async ({ ctx, input }) =>
        await ctx.db.professors.findMany({
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
        }),
    ),
});
