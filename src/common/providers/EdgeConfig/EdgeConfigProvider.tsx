import { getAll } from "@vercel/edge-config";
import { edgeConfigSchema } from "@/server/ecfg/config";

import { EdgeConfigContextProvider } from "./EdgeConfigContextProvider";

export async function EdgeConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // * FUTURE NOTE *
  // if edge requests count nears the threshold,
  // we should consider caching the edge config & revalidate every 24h
  const edgeConfigRaw = await getAll();
  const validateEcfg = edgeConfigSchema.safeParse(edgeConfigRaw);
  let edgeConfig;
  if (validateEcfg.success) {
    edgeConfig = validateEcfg.data;
  } else {
    console.warn(
      "Failed to parse edge config:\n",
      validateEcfg.error.message,
      "\n\n",
      "Received config:\n",
      edgeConfigRaw,
    );
    // used strictly as a fallback if edge config
    // somehow returns an unexpected format
    edgeConfig = (await import("@/server/ecfg/config.json")).default;
  }
  return (
    <EdgeConfigContextProvider edgeConfig={edgeConfig}>
      {children}
    </EdgeConfigContextProvider>
  );
}
