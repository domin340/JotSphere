import { ResolveExtensions, ExtensionList as $Extensions } from "./init";
import { Devs as $Devs } from "../devs";
import * as $QUERIES from "./query";
import type { Dev } from "../devs.types";

/*
  main initialization function, in case of change just add it here to initialize whole
  developers companionship
*/
export async function Init() {
  await ResolveExtensions();
}

export const ListedDevsEntries: Dev[] = Object.entries($Devs).map(
  ([, value]) => value
);

export const ExtensionList = $Extensions;
export const Devs = $Devs;
export const Queries = $QUERIES;
