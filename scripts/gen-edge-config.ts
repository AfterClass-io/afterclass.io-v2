import { compileFromFile } from "json-schema-to-typescript";
import fs from "fs";

compileFromFile("src/server/edge/config.schema.json").then((ts) =>
  fs.writeFileSync("src/server/edge/config.d.ts", ts),
);
