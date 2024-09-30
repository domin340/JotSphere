import { useRef, useState } from "react";
import { ListedDevsEntries } from "../api/devs/_db";
import { Dev } from "../api/devs/devs.types";
import PopupDialog from "../lib/@me/Dialog/component";
import { RenderSocials } from "../lib/@me/RenderSocials/component";

function DevTest() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dev, setDev] = useState<Dev>();

  const handleModal = (dev: Dev) => {
    setDev(dev);
    dialogRef.current?.showModal();
  };

  return (
    <div className="Devs">
      <ul>
        {ListedDevsEntries.map((dev) => (
          <li key={dev.username.toString()}>
            <button onClick={() => handleModal(dev)}>Lookup</button>
          </li>
        ))}
      </ul>
      <PopupDialog dialogRef={dialogRef}>
        {dev ? (
          <>
            <h1>{dev.username}</h1>
            {dev.description ? <p>{dev.description}</p> : null}
            {dev.socials ? <RenderSocials {...dev.socials} /> : null}
          </>
        ) : null}
      </PopupDialog>
    </div>
  );
}

export default DevTest;
