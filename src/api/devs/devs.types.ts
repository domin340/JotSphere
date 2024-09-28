import { LinkIconProps } from "../../lib/@me/LinkIcon/component";

export interface Dev {
  // proferable github
  username: string;
  /*
    SHOULD NOT INCLUDE:
      - slurs,
      - links,
      - promo

    DESCRIPTION MUST BE RELATED TO EXTENSION
  */
  description?: string;
  /*
    PUTING INAPROPRIATE SOCIALS IS PROHIBITED AND WILL RESULT IN IMMEDIATE DEVELOPER BAN!
    example:
      - onlyfans
      - porn
      - gambling sites
      - etc..
  */
  socials?: URL[];
}

// !import THE INTERFACE THAT EVERY EXTENSION MUST RETURN IN AN OBJECT
export interface Plugin {
  name: string;
  description: string;
  authors: Dev[];
  newElements?: {
    Navigation?: LinkIconProps[];
  };
}
