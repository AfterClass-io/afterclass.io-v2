import fs from "fs";
import path from "path";

export default function readJson(filePath: string) {
  const data = fs.readFileSync(path.resolve(filePath), "utf-8");
  return JSON.parse(data);
}
