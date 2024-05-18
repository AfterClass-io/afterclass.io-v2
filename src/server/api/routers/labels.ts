import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { ReviewLabelType } from "@prisma/client";

export const labelsRouter = createTRPCRouter({
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
