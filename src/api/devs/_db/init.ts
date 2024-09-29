/*
 * all of these functions are being used for extension search
 * please do not modify variables
 * if bug found notice the owner
 */
import type { Plugin } from "../devs.types";

// must use init in ./src/main.tsx function before accessing ANY OF THESE
export const ExtensionList: Plugin[] = [];

export async function ResolveExtensions() {
  /*
   ** source set in directory: ./src/api/devs/_db, on any change ensure to change it
   */
  const modules = import.meta.glob("../../../extensions/*/index.tsx");
  for (const key in modules) {
    const module = (await modules[key]()) as { default: Plugin };
    ExtensionList.push(module.default);
  }
}
