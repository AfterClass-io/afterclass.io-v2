import { z } from "zod";
import { type Prisma } from "@prisma/client";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

const DEFAULT_PAGE_SIZE = 10;

const PUBLIC_COURSE_FIELDS = {
  id: true,
  name: true,
  code: true,
  belongToFacultyId: true,
  belongToFaculty: {
    select: {
      id: true,
      name: true,
      acronym: true,
      siteUrl: true,
    },
  },
  belongToUniversityId: true,
  belongToUniversity: {
    select: {
      id: true,
      name: true,
      abbrv: true,
      siteUrl: true,
    },
  },
} satisfies Prisma.CoursesSelect;

export const coursesRouter = createTRPCRouter({
  listByUni: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        universityId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const courses = await ctx.db.courses.findMany({
        skip: DEFAULT_PAGE_SIZE * (input.page - 1),
        take: DEFAULT_PAGE_SIZE,
        select: PUBLIC_COURSE_FIELDS,
        where: {
          belongToUniversityId: input.universityId,
        },
      });
      return courses;
    }),

  listByFaculty: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        facultyId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const courses = await ctx.db.courses.findMany({
        skip: DEFAULT_PAGE_SIZE * (input.page - 1),
        take: DEFAULT_PAGE_SIZE,
        select: PUBLIC_COURSE_FIELDS,
        where: {
          belongToFacultyId: input.facultyId,
        },
      });
      return courses;
    }),

  listByUniProtected: protectedProcedure
    .input(
      z.object({
        page: z.number().default(1),
        universityId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const courses = await ctx.db.courses.findMany({
        skip: DEFAULT_PAGE_SIZE * (input.page - 1),
        take: DEFAULT_PAGE_SIZE,
        where: {
          belongToUniversityId: input.universityId,
        },
      });
      return courses;
    }),

  listByFacultyProtected: protectedProcedure
    .input(
      z.object({
        page: z.number().default(1),
        facultyId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const courses = await ctx.db.courses.findMany({
        skip: DEFAULT_PAGE_SIZE * (input.page - 1),
        take: DEFAULT_PAGE_SIZE,
        where: {
          belongToFacultyId: input.facultyId,
        },
      });
      return courses;
    }),
});
