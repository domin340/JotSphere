import "./style.scss";
import { TagsEnum } from "../../../api/devs/devs.types";

function TagElement({tag}: {tag: TagsEnum}) {
  return (
    <div className="tagElement">
      <p>{tag.replace("_", " ")}</p>
    </div>
  );
}

export default TagElement;
