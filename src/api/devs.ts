import { Dev } from "./devs.types";

/* 
  While creating an extension you MUST include yourself here as a developer.
  IN THIS OBJECT.

  Even tho it might not make that much sense now i believe it's much easier to include yourself
  via developers rathered than writing it down each time.

  Object will be checked you shall not have inapropriate name or nickname

  example:
    nickname/username: Developer
*/

export const Devs = Object.freeze({
  domin: {
    username: "domin340",
    description: "the owner of the project",
    socials: [new URL("https://github.com/domin340")],
  },
}) satisfies Record<string, Dev>;
