import { type Plugin, FixedString } from "../../api/devs/devs.types";
import { Devs } from "../../api/devs/devs";
import Transform from "../../utils/pageMaster";
import KeyTest from "../../pages/KeyTest";

// define config function
export default {
  name: new FixedString("new-nav-element", 60),
  tags: ["FUN"],
  description: new FixedString("test", 200),
  authors: [Devs.domin],
  newElements: {
    Navigation: [
      {
        iconPath: "/something.svg",
        cb: () => Transform(<KeyTest />),
      },
    ],
  },
  sourceCode: new URL("https://github.com/domin340/JotSphere")
} satisfies Plugin;
