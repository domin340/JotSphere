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

/*
  @NOTE:
    * this function might be reworked in the future to be more sql fulltext like.
    * this function returns the index of the most correct input if found
*/
export function FullText(text: string, inputs: string[]): number | undefined {
  const splitted: string[] = text.split(" ");
  const requiredWords: string[] = [];
  const excludedWords: string[] = [];
  splitted.forEach((word) => {
    if (word.startsWith("+")) requiredWords.push(word.slice(1));
    else if (word.startsWith("-")) excludedWords.push(word.slice(1));
  });
  for (let i = 0; i < inputs.length; i++) {
    const containsRequired: boolean = requiredWords.some((word) =>
      inputs[i].includes(word)
    );
    const containsExcluded: boolean = excludedWords.some((word) =>
      inputs[i].includes(word)
    );
    if (containsRequired && !containsExcluded) return i;
  }
}
