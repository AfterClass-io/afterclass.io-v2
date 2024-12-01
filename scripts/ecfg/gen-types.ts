import { compileFromFile } from "json-schema-to-typescript";
import fs from "fs";

/**
 * Generates TypeScript definitions from a JSON schema.
 * @param schemaPath Path to the JSON schema file.
 * @param outputPath Path to save the generated TypeScript definitions.
 */
async function generateTypeScriptDefinitions(
  schemaPath: string,
  outputPath: string,
): Promise<void> {
  try {
    const ts = await compileFromFile(schemaPath);
    fs.writeFileSync(outputPath, ts);
    console.log(`TypeScript definitions generated and saved to ${outputPath}`);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
}

// Get input arguments
const [schemaPath, outputPath] = process.argv.slice(2);

if (!schemaPath || !outputPath) {
  console.error(
    "Usage: generate-typescript-definitions.ts <schemaPath> <outputPath>",
  );
  process.exit(1);
}

// Generate TypeScript definitions
generateTypeScriptDefinitions(schemaPath, outputPath);
