/*
 * all of these functions are being used for extension search
 * please do not modify variables
 * if bug found notice the owner
 */
import { Devs } from "../devs";
import { Dev, Plugin } from "../devs.types";

// must use init in ./src/main.tsx function before accessing ANY OF THESE
export const EnumeratedDevs: (Dev & { id: number })[] = [];
export const ExtensionList: Plugin[] = [];

// parses every Dev with unique ID so nobody has to write it down by himself
export function EnumerateDevs() {
  const keys = Object.keys(Devs);
  for (let i = 0; i < keys.length; i++) {
    EnumeratedDevs.push({ id: i, ...Devs[keys[i] as keyof typeof Devs] });
  }
}

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
