import { useEffect } from "react";
import { ExtensionList, ListedDevsEntries } from "../api/devs/_db";

function DevTest() {
  useEffect(() => {
    console.log(ExtensionList);
  }, []);
  return (
    <div className="Devs">
      <ul>
        {ListedDevsEntries.map((dev) => (
          <li key={dev.id}>
            <p>
              {dev.username}, {dev.username}
            </p>
            <p>{dev.description}</p>
            {dev.socials ? (
              <ul>
                {dev.socials.map((social) => (
                  <li key={social.hostname}>{social.hostname}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DevTest;
