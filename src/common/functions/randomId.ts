import { customAlphabet } from "nanoid";

const nonAmbiguous = "cdefhjkmnprtvwxy2345689";
const nanoid = customAlphabet(nonAmbiguous, 12);

export default function randomId() {
  return nanoid(); // returns something like 'cy5p69dym4tx'
}
