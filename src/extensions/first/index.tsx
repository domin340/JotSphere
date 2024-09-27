import { type Plugin } from "../../api/devs.types";
import { Devs } from "../../api/devs";
import Transform from "../../utils/pageMaster";
import KeyTest from "../../pages/KeyTest";

// define config function
export default {
  name: "new-nav-element",
  description: "test",
  authors: [Devs.domin],
  newElements: {
    Navigation: [
      {
        iconPath: "/something.svg",
        cb: () => Transform(<KeyTest />),
      },
    ],
  },
} satisfies Plugin;
