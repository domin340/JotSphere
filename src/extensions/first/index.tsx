import { type Plugin, FixedString } from "../../api/devs/devs.types";
import { Devs } from "../../api/devs/devs";
import Transform from "../../utils/pageMaster";
import KeyTest from "../../pages/KeyTest";

// define config function
export default {
  name: new FixedString<60>("new-nav-element"),
  tags: ["FUN"],
  description: new FixedString<200>("test"),
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
