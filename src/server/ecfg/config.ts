import { z } from "zod";

export const edgeConfigSchema = z.object({
  enableAnnouncementBanner: z.boolean(),
  enableCmdkTooltip: z.boolean(),
});

export type EdgeConfig = z.infer<typeof edgeConfigSchema>;
