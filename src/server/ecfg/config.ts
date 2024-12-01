import { z } from "zod";

export const edgeConfigSchema = z.object({
  test: z.boolean(),
});

export type EdgeConfig = z.infer<typeof edgeConfigSchema>;
