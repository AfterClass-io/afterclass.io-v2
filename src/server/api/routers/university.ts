import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const universityRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        siteUrl: z.string(),
        abbrv: z.enum(["SMU", "NTU", "NUS"]),
      }),
    )
    .query(async ({ input, ctx }) => {
      const university = await ctx.db.universities.create({
        data: {
          name: input.name,
          siteUrl: input.siteUrl,
          abbrv: input.abbrv,
        },
      });
      return university;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const universities = await ctx.db.universities.findMany();
    return universities;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const university = await ctx.db.universities.findUnique({
        where: {
          id: input.id,
        },
      });
      return university;
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        siteUrl: z.string(),
        abbrv: z.enum(["SMU", "NTU", "NUS"]),
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
          abbrv: input.abbrv,
        },
      });
      return university;
    }),

  delete: publicProcedure
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
