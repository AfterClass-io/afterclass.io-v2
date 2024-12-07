"use client";

import { type EdgeConfig } from "@/server/ecfg/config";
import { createContext, type ReactNode } from "react";

export const EdgeConfigContext = createContext<EdgeConfig>({} as EdgeConfig);

type Props = {
  readonly edgeConfig: EdgeConfig;
  readonly children: ReactNode;
};

export function EdgeConfigContextProvider({ edgeConfig, children }: Props) {
  return (
    <EdgeConfigContext.Provider value={edgeConfig}>
      {children}
    </EdgeConfigContext.Provider>
  );
}
