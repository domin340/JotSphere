import { LinkIconProps } from "../../lib/@me/LinkIcon/component";
import { TagsEnum } from "./tags"

export interface Dev {
  /*
    Your ID thats located in settings
  */
  id: bigint;
  /*
    Your nickname, preferable github username
  */
  username: string;
  /*
    Your developer description
    PUTING INAPROPRIATE SOCIALS IS PROHIBITED AND WILL RESULT IN IMMEDIATE DEVELOPER BAN!
    example:
      - onlyfans
      - porn
      - gambling sites
      - etc..
    also applies to socials
  */
  description?: string;
  socials?: URL[];
}

// type that has to have at least 1 element but can not have more than 3
export type tags = Readonly<[TagsEnum, TagsEnum?, TagsEnum?]>;

// !import THE INTERFACE THAT EVERY EXTENSION MUST RETURN IN AN OBJECT
export interface Plugin {
  name: string;
  description: string;
  tags: tags;
  authors: Dev[];
  newElements?: {
    Navigation?: LinkIconProps[];
  };
}
