import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { Prisma, type ReviewLabelName } from "@prisma/client";

const DEFAULT_PAGE_SIZE = 10;

export const reviewsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        body: z.string(),
        tips: z.string().optional(),
        rating: z.number(),
        reviewedUniversityId: z.number(),
        reviewedCourseId: z.string(),
        reviewedProfessorId: z.string().optional(),
        reviewerId: z.string(),
        reviewLabelIds: z.array(z.number()).optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const course = await ctx.db.courses.findFirst({
        where: {
          id: input.reviewedCourseId,
        },
      });
      if (!course) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Course not found",
        });
      }
      try {
        const review = await ctx.db.reviews.create({
          data: {
            body: input.body,
            tips: input.tips,
            rating: input.rating,
            reviewedUniversityId: input.reviewedUniversityId,
            reviewedCourseId: course.id,
            reviewedProfessorId: input.reviewedProfessorId,
            reviewerId: input.reviewerId,
            reviewedFacultyId: course.belongToFacultyId,
          },
        });
        return review;
      } catch (error) {
        console.error(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid input data",
            cause: error,
          });
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create review",
        });
      }
    }),
  getAll: protectedProcedure
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
        select: {
          id: true,
          body: true,
          rating: true,
          createdAt: true,
          reviewedCourse: {
            select: {
              code: true,
            },
          },
          reviewer: {
            select: {
              username: true,
            },
          },
          reviewLabels: {
            include: {
              label: {
                select: {
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
              votes: true,
            },
          },
        },
      });
      return reviews.map((review) => ({
        id: review.id,
        body: review.body,
        createdAt: review.createdAt.getTime(),
        courseCode: review.reviewedCourse.code,
        username: review.reviewer.username ?? "Anonymous",
        labels: review.reviewLabels.map((rl) => {
          const labelName = rl.label.name.split("_").join(" ").toLowerCase();
          return {
            name: labelName as ReviewLabelName,
          };
        }),
        likeCount: review._count.votes,
      }));
    }),
});
