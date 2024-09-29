import { ListedDevsEntries } from "../api/devs/_db";
import { RenderSocials } from "../lib/@me/RenderSocials/component";

function DevTest() {
  return (
    <div className="Devs">
      <ul>
        {ListedDevsEntries.map((dev) => (
          <li key={dev.username.toString()}>
            <p>{dev.username}</p>
            <p>{dev.description}</p>
            {dev.socials ? RenderSocials(dev.socials) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DevTest;
