import { LinkIconProps } from "../../lib/@me/LinkIcon/component";

export type TagsEnum = ([
  "FUN", // memes, or other
  "NEW_ELEMENTS",
  "KEY_INPUTS",
  "SHORTCUTS",
  "PAGES",
  "CALENDAR",
  "NOTEBOOK",
  "EXPLORER",
  "WIDGETS",    // for additional modular UI components
  "TASK_MANAGEMENT", // managing tasks in apps
  "SEARCH", // search functionality
  "USER_PROFILES", // user-related features
  "NOTIFICATIONS", // for alerts or updates
  "THEMES", // visual themes customization
  "DASHBOARD", // central hub for accessing tools/pages
  "NAVIGATION", // navigational improvements or shortcuts
])[number]

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
