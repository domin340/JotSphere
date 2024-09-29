import { Dev, FixedString } from "./devs.types";

/* 
  While creating an extension you MUST include yourself here as a developer.
  IN THIS OBJECT.

  Even tho it might not make that much sense now I believe it's much easier to include yourself
  via this object rather than writing it down each time.

  Object will be checked. You shall not have inapropriate nickname or username

  example:
    nickname: Developer

  CLAIMS:
    FixedString<40> and FixedString<180> have a run time check in constructor.
    if the input is too big it will return the error
*/

export const Devs = Object.freeze({
  domin: {
    username: new FixedString<40>("domin340"),
    description: new FixedString<180>("The owner of the project"),
    socials: {
      github: new URL("https://github.com/domin340"),
    },
  },
}) satisfies Record<string, Dev>;
