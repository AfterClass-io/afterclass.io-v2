import { getAll } from "@vercel/edge-config";
import { edgeConfigSchema } from "@/server/ecfg/config";
import { EdgeConfigContextProvider } from "./EdgeConfigContextProvider";

async function fetchAndValidateEdgeConfig() {
  try {
    const rawConfig = await getAll();
    const result = edgeConfigSchema.safeParse(rawConfig);

    if (!result.success) {
      console.warn(
        "Failed to parse edge config:\n",
        result.error.message,
        "\nReceived config:\n",
        rawConfig,
      );
      return null;
    }

    return result.data;
  } catch (error) {
    console.warn(
      "Failed to fetch edge config:\n",
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}

async function getFallbackConfig() {
  return (await import("@/server/ecfg/config.json")).default;
}

export async function EdgeConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const edgeConfig =
    (await fetchAndValidateEdgeConfig()) ?? (await getFallbackConfig());

  return (
    <EdgeConfigContextProvider edgeConfig={edgeConfig}>
      {children}
    </EdgeConfigContextProvider>
  );
}
