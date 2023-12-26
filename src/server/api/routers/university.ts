import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const universityRouter = createTRPCRouter({
  createUniversity: publicProcedure
    .input(
      z.object({ name: z.enum(["SMU", "NTU", "NUS"]), siteUrl: z.string() }),
    )
    .query(async ({ input, ctx }) => {
      const university = await ctx.db.universities.create({
        data: {
          name: input.name,
          siteUrl: input.siteUrl,
        },
      });
      return university;
    }),

  getAllUniversities: publicProcedure.query(async ({ ctx }) => {
    const universities = await ctx.db.universities.findMany();
    return universities;
  }),

  getUniversityById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const university = await ctx.db.universities.findUnique({
        where: {
          id: input.id,
        },
      });
      return university;
    }),

  updateUniversityById: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.enum(["SMU", "NTU", "NUS"]),
        siteUrl: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const university = await ctx.db.universities.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          siteUrl: input.siteUrl,
        },
      });
      return university;
    }),

  deleteUniversityById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const university = await ctx.db.universities.delete({
        where: {
          id: input.id,
        },
      });
      return university;
    }),
});
