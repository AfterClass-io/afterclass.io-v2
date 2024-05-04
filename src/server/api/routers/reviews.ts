import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { Prisma, type ReviewLabelName } from "@prisma/client";
import { Review } from "@/common/types";

const DEFAULT_PAGE_SIZE = 10;

const PUBLIC_REVIEW_FIELDS = {
  id: true,
  rating: true,
  createdAt: true,
  reviewedUniversityId: true,
  reviewedProfessorId: true,
  reviewedCourseId: true,
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
  reviewedProfessor: {
    select: {
      name: true,
    },
  },
  reviewedUniversity: {
    select: {
      abbrv: true,
    },
  },
} satisfies Prisma.ReviewsSelect;

const PRIVATE_REVIEW_FIELDS = {
  ...PUBLIC_REVIEW_FIELDS,
  body: true,
  tips: true,
};

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
        universityId: z.number().optional(),
        courseId: z.string().optional(),
        profId: z.string().optional(),
        latest: z.boolean().optional().default(true),
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
        orderBy: input.latest ? { createdAt: "desc" } : undefined,
        select: PRIVATE_REVIEW_FIELDS,
      });
      return reviews.map((review) => ({
        id: review.id,
        body: review.body,
        tips: review.tips ?? "",
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
        reviewFor:
          review.reviewedCourseId && review.reviewedProfessorId
            ? ("professor" as "professor" | "course")
            : ("course" as "professor" | "course"),
        professorName: review.reviewedProfessor?.name,
        university: review.reviewedUniversity.abbrv,
      }));
    }),
  getAllPublic: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        universityId: z.number().optional(),
        courseId: z.string().optional(),
        profId: z.string().optional(),
        latest: z.boolean().optional().default(true),
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
        orderBy: input.latest ? { createdAt: "desc" } : undefined,
        select: PUBLIC_REVIEW_FIELDS,
      });
      return reviews.map((review) => ({
        id: review.id,
        body: "",
        tips: "",
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
        reviewFor:
          review.reviewedCourseId && review.reviewedProfessorId
            ? ("professor" as "professor" | "course")
            : ("course" as "professor" | "course"),
        professorName: review.reviewedProfessor?.name,
        university: review.reviewedUniversity.abbrv,
      }));
    }),
});
