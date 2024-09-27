import LinkIcon, { type LinkIconProps } from "../LinkIcon/component";
import KeyStore from "../../../utils/KeyStore";
import { NavElementsStore as navStore } from "./store";
import "./style.scss";
import { useEffect, useRef, useState } from "react";

function Navigation() {
  // functions, handlers
  function getIconItem(element: LinkIconProps): JSX.Element {
    return (
      <li className="Nav-List-Element" key={element.iconPath}>
        <LinkIcon
          iconPath={element.iconPath}
          alt={element.alt}
          cb={element.cb}
          className={element.className}
        />
      </li>
    );
  }
  // navigation specific (Stores, Event listeners)
  const nav = navStore((state) => state);
  const isShown = navStore((state) => state.isShown);
  const setShown = navStore((state) => state.setShown);
  const on = KeyStore.getState().on;
  const [isVisible, setVisible] = useState(false);
  const timeout = useRef<number>(null!);
  // constants or variables with intent of numeration
  const duration: number = 400;
  let num: number = 0;

  useEffect(() => {
    on("Escape", () => setShown(!isShown));
  }, [isVisible, setShown, isShown, on]);

  return (
    <div className={`${isShown ? "hide-nav-element" : ""} nav`}>
      <ul>
        {nav.elements.map((element) => {
          num++;
          if (num <= nav.max_icons_pn) return getIconItem(element);
        })}
        {num > nav.max_icons_pn ? (
          <li
            className="Nav-List-Element"
            onMouseEnter={() => {
              if (timeout.current) {
                clearTimeout(timeout.current);
              }
              setVisible(true);
            }}
            onMouseLeave={() => {
              timeout.current = setTimeout(() => {
                setVisible(false);
              }, duration);
            }}
          >
            <div
              style={{
                display: isVisible ? "block" : "none",
              }}
              className="showMore nav"
            >
              <ul>
                {nav.elements.slice(nav.max_icons_pn).map((element) => {
                  return getIconItem(element);
                })}
              </ul>
            </div>
            <LinkIcon iconPath="/moreContent.svg" />
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Navigation;
