import { useEffect } from "react";
import { EnumeratedDevs, ExtensionList } from "../api/devs/_db/init";

function DevTest() {
  useEffect(() => {
    console.log(ExtensionList);
  }, [])
  return (
    <div className="Devs">
      <ul>
        {EnumeratedDevs.map((dev) => (
          <li key={dev.id}>
            <p>
              {dev.id}, {dev.username}
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
