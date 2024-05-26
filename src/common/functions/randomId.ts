import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("cdefhjkmnprtvwxy2345689", 12);

export default function randomId() {
  return nanoid(); // returns something like 'cy5p69dym4tx'
}
