import readJson from "./utils/readJson";
import Ajv from "ajv/dist/2020";

const ajv = new Ajv();

/**
 * Validate the JSON file against the JSON Schema
 * @param schemaFilePath Path to the JSON Schema file
 * @param jsonFilePath Path to the JSON file
 */
function validateJson(schemaFilePath: string, jsonFilePath: string): void {
  try {
    const schema = readJson(schemaFilePath);
    const json = readJson(jsonFilePath);

    const validate = ajv.compile(schema);
    const isValid = validate(json);

    if (isValid) {
      console.log("JSON is valid!");
    } else {
      console.error("JSON validation failed:");
      console.error(validate.errors);
      process.exit(1);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
}

// Get input arguments
const [schemaFilePath, jsonFilePath] = process.argv.slice(2);

if (!schemaFilePath || !jsonFilePath) {
  console.error("Usage: validate-json.ts <schema-file-path> <json-file-path>");
  process.exit(1);
}

// Validate the JSON file against the schema
validateJson(schemaFilePath, jsonFilePath);
