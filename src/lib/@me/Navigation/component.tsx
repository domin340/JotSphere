import LinkIcon, { LinkIconProps } from "../LinkIcon/component";
import { NavElementsStore as navStore } from "./store";
import "./style.scss";
import { useRef, useState } from "react";

function Navigation() {
  const duration: number = 700;
  const get_icon_item = (element: LinkIconProps): JSX.Element => (
    <li className="Nav-List-Element" key={element.iconPath}>
      <LinkIcon
        iconPath={element.iconPath}
        alt={element.alt}
        cb={element.cb}
        className={element.className}
      />
    </li>
  );
  const nav = navStore((state) => state);
  const [isVisible, setVisible] = useState(false);
  const timeout = useRef<number>(null!);
  let num: number = 0;

  return (
    <div className="nav">
      <ul>
        {nav.elements.map((element) => {
          num++;
          if (num <= nav.max_icons_pn) return get_icon_item(element);
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
                  return get_icon_item(element);
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
