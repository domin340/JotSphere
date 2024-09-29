import { LinkIconProps } from "../../lib/@me/LinkIcon/component";

// tags that can be applied to Plugins.tags interface
export type TagsEnum = [
  "FUN",
  "NEW_ELEMENTS",
  "KEY_INPUTS",
  "SHORTCUTS",
  "PAGES",
  "CALENDAR",
  "NOTEBOOK",
  "EXPLORER",
  "WIDGETS", // for additional modular UI components
  "TASK_MANAGEMENT", // managing tasks in apps
  "SEARCH", // search functionality
  "USER_PROFILES", // user-related features
  "NOTIFICATIONS", // for alerts or updates
  "THEMES", // visual themes customization
  "DASHBOARD", // central hub for accessing tools/pages
  "NAVIGATION", // navigational improvements or shortcuts
  "MUSIC"
][number];

// type that has to have at least 1 element but can not have more than 3
export type tags = Readonly<[TagsEnum, TagsEnum?, TagsEnum?]>;

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

// !import EVERY PLUGIN MUST RETURN THIS OBJECT INTERFACE
export interface Plugin {
  name: string;
  description: string;
  // max 3
  tags: tags;
  // please access these by ./src/api/devs/devs.ts Devs object if you are not assigned add yourself
  authors: Dev[];
  newElements?: {
    Navigation?: LinkIconProps[];
  };
}
