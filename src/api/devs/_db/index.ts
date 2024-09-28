import { ResolveExtensions, EnumerateDevs } from "./init";

// main initialization function
export async function Init() {
  await ResolveExtensions();
  EnumerateDevs();
}