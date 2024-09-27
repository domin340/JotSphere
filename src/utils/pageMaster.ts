import { create } from "zustand";

export interface ReactPage {
  current: React.JSX.Element | null;
  changeScene: (element: React.JSX.Element) => void;
}

export const Page = create<ReactPage>((set) => ({
  current: null,
  changeScene: (element: React.JSX.Element) => set({ current: element }),
}));

export default Page((state) => state.changeScene);
