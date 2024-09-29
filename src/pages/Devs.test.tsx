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
          <li key={dev.username.toString()}>
            <p>{dev.username}</p>
            <p>{dev.description}</p>
            {dev.socials ? (
              <ul>
                {Object.entries(dev.socials).map(([, value]) => (
                  <li>{value.hostname}</li>
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
