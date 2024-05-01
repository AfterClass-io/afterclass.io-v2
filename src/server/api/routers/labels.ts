import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { ReviewLabelType, type Prisma } from "@prisma/client";

export const labelsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const labels = await ctx.db.labels.findMany({
      select: {
        id: true,
        name: true,
        typeOf: true,
      } satisfies Prisma.LabelsSelect,
    });
    return labels;
  }),
  getAllByType: publicProcedure
    .input(z.object({ typeOf: z.nativeEnum(ReviewLabelType) }))
    .query(
      async ({ input, ctx }) =>
        await ctx.db.labels.findMany({
          where: {
            typeOf: input.typeOf,
          },
        }),
    ),
});
