import { ResolveExtensions } from "./init";
import { Devs as $Devs } from "../devs";
import * as $QUERIES from "./query";
import type { Dev } from "../devs.types";

// main initialization function
export async function Init() {
  await ResolveExtensions();
}

export const ListedDevsEntries: Dev[] = Object.entries($Devs).map(
  ([, value]) => value
);

export const Devs = $Devs;
export const Queries = $QUERIES;
