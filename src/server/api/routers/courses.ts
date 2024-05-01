import { z } from "zod";
import { Prisma, UniversityAbbreviation } from "@prisma/client";
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
  getByUni: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        universityId: z.number(),
      }),
    )
    .query(
      async ({ ctx, input }) =>
        await ctx.db.courses.findMany({
          skip: DEFAULT_PAGE_SIZE * (input.page - 1),
          take: DEFAULT_PAGE_SIZE,
          select: PUBLIC_COURSE_FIELDS,
          where: {
            belongToUniversityId: input.universityId,
          },
        }),
    ),

  getByFaculty: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        facultyId: z.number(),
      }),
    )
    .query(
      async ({ ctx, input }) =>
        await ctx.db.courses.findMany({
          skip: DEFAULT_PAGE_SIZE * (input.page - 1),
          take: DEFAULT_PAGE_SIZE,
          select: PUBLIC_COURSE_FIELDS,
          where: {
            belongToFacultyId: input.facultyId,
          },
        }),
    ),
  getByProfSlug: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        slug: z.string(),
      }),
    )
    .query(
      async ({ ctx, input }) =>
        await ctx.db.courses.findMany({
          skip: DEFAULT_PAGE_SIZE * (input.page - 1),
          take: DEFAULT_PAGE_SIZE,
          select: PUBLIC_COURSE_FIELDS,
          // see https://www.prisma.io/docs/orm/reference/prisma-client-reference#relation-filters
          // this query can be read as:
          // "get all course where some classes have professor with the given slug"
          where: {
            classes: {
              some: {
                professor: {
                  slug: input.slug,
                },
              },
            },
          },
        }),
    ),

  getByUniProtected: protectedProcedure
    .input(
      z.object({
        page: z.number().default(1),
        universityId: z.number(),
      }),
    )
    .query(
      async ({ ctx, input }) =>
        await ctx.db.courses.findMany({
          skip: DEFAULT_PAGE_SIZE * (input.page - 1),
          take: DEFAULT_PAGE_SIZE,
          where: {
            belongToUniversityId: input.universityId,
          },
        }),
    ),

  getByFacultyProtected: protectedProcedure
    .input(
      z.object({
        page: z.number().default(1),
        facultyId: z.number(),
      }),
    )
    .query(
      async ({ ctx, input }) =>
        await ctx.db.courses.findMany({
          skip: DEFAULT_PAGE_SIZE * (input.page - 1),
          take: DEFAULT_PAGE_SIZE,
          where: {
            belongToFacultyId: input.facultyId,
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
      const courses = await ctx.db.courses.findMany({
        select: {
          id: true,
          name: true,
          code: true,
        } satisfies Prisma.CoursesSelect,
        where: {
          belongToUniversity: {
            abbrv: input.universityAbbrv,
          },
        },
      });
      return courses;
    }),
});
