import { ResolveExtensions } from "./init";
import { Devs as $Devs } from "../devs";
import type { Dev } from "../devs.types";

export const ListedDevsEntries: Dev[] = Object.entries($Devs).map(
  ([, value]) => value
);

export const Devs = $Devs;

// main initialization function
export async function Init() {
  await ResolveExtensions();
}
