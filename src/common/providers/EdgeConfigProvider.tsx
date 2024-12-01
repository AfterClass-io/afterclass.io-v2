"use client";

import { type EdgeConfig } from "@/server/ecfg/config";
import { createContext, type ReactNode, useContext } from "react";

const EdgeConfigContext = createContext<EdgeConfig>({} as EdgeConfig);
export const useEdgeConfigs = () => useContext(EdgeConfigContext);

type Props = {
  readonly edgeConfig: EdgeConfig;
  readonly children: ReactNode;
};

export default function EdgeConfigProvider({ edgeConfig, children }: Props) {
  return (
    <EdgeConfigContext.Provider value={edgeConfig}>
      {children}
    </EdgeConfigContext.Provider>
  );
}
