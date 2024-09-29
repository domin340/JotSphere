import { LinkIconProps } from "../../lib/@me/LinkIcon/component";

export class GithubUser extends URL {
  constructor(username: string) {
    if (username.search("/")) throw new Error("invalid github account");
    super(`https://github.com/${username}`);
  }
}

export class StackOverFlowUser extends URL {
  constructor(user_id: number) {
    super(`https://stackoverflow.com/users/${user_id}`);
  }
}

export class KoFiUser extends URL {
  constructor(username: string) {
    if (username.search("/")) throw new Error("invalid github account");
    super(`https://ko-fi.com/${username}`);
  }
}

export class FixedString<N extends number> extends String {
  constructor(text: string, private readonly cap: N) {
    super(text);
    if (text.length > (this.cap as number))
      throw new Error("text provided is too large");
  }
  getCap(): number {
    return this.cap;
  }
}

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

export type socialsType = Readonly<
  Partial<{
    github: GithubUser;
    stackOverflow: StackOverFlowUser;
    koFi: KoFiUser;
  }>
>;

export interface Dev {
  /*
    Unique developer nickname name sure it has not been used yet
  */
  username: FixedString<40>;
  /*
    small description of yourself
  */
  description?: FixedString<180>;
  socials?: socialsType;
}

// !import EVERY PLUGIN MUST RETURN THIS OBJECT INTERFACE
export interface Plugin {
  name: FixedString<60>;
  description: FixedString<200>;
  // max 3
  tags: tags;
  // please access these by ./src/api/devs/devs.ts Devs object if you are not assigned add yourself
  authors: Dev[];
  newElements?: {
    Navigation?: LinkIconProps[];
  };
}
