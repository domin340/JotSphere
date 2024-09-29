import { Dev } from "./devs.types";

/* 
  While creating an extension you MUST include yourself here as a developer.
  IN THIS OBJECT.

  Even tho it might not make that much sense now I believe it's much easier to include yourself
  via this object rather than writing it down each time.

  Object will be checked. You shall not have inapropriate nickname or username

  example:
    nickname: Developer
*/

export const Devs = Object.freeze({
  domin: {
    id: 0n,
    username: "domin340",
    description: "the owner of the project",
    socials: [new URL("https://github.com/domin340")],
  },
}) satisfies Record<string, Dev>;