import { create } from "zustand";
import { LinkIconProps } from "../LinkIcon/component";
import { Page } from "../../../utils/pageMaster";
import About from "../../../pages/About";

export interface NavStore {
  elements: LinkIconProps[];
  isShown: boolean;
  setShown: (val: boolean) => void;
  max_icons_pn: number;
  add: (element: LinkIconProps) => void;
}

export const NavElementsStore = create<NavStore>((set) => ({
  elements: [],
  isShown: false,
  setShown: (value: boolean) => set({ isShown: value }),
  max_icons_pn: 6,
  add: (element: LinkIconProps) =>
    set((state) => ({
      elements: [...state.elements, element],
    })),
}));

(
  [
    {
      iconPath: "/menu.svg",
      cb: () => {
        Page.getState().changeScene(<About />);
      },
    },
    {
      iconPath: "/search.svg",
    },
    {
      iconPath: "/doc.svg",
    },
    {
      iconPath: "/calendar.svg",
    },
    {
      iconPath: "/settings.svg",
    },
    {
      iconPath: "/close.svg",
    },
  ] as LinkIconProps[]
).forEach((element) => NavElementsStore.getState().add(element));
