// extensions template
import { LinkIconProps } from "../components/LinkIcon";
import { Page } from "../utils/pageMaster";
import About from "../pages/About";

export const NavElement: LinkIconProps = {
  iconPath: "/something.svg",
  cb: () => Page.getState().changeScene(<About/>),
}

// define config function

