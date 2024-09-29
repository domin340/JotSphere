import { ExtensionList } from "./init";
import { ListedDevsEntries } from ".";
import type { Plugin, Dev, tags } from "../devs.types";

export function findByAuthor(username: string): Plugin[] {
  return ExtensionList.filter((extension) =>
    extension.authors.some((author) => author.username == username)
  );
}

export function findByTags(tags: tags): Plugin[] {
  return ExtensionList.filter((extension) =>
    extension.tags.some((tag) => tag && tags.includes(tag))
  );
}

export function findAuthor(username: string): Dev | undefined {
  return ListedDevsEntries.find((dev) => dev.username == username);
}

export function findPluginByName(name: string): Plugin | undefined {
  return ExtensionList.find((extension) => extension.name == name);
}
