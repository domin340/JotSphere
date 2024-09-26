import { NavElementsStore } from "../lib/@me/Navigation/store";
import KeyTest from "./KeyTest";

function About() {
  const newElement = NavElementsStore((state) => state.add);

  return (
    <div className="About">
      <h1>Hi, I'm DOMIN1310</h1>
      <p>I like pizza</p>
      <button onClick={() => newElement({ iconPath: "/doc.svg", alt: "test" })}>
        New Navigation Element
      </button>
      <KeyTest />
    </div>
  );
}

export default About;
