import "./style.scss";
import LinkIcon from "../LinkIcon/component";
import { useEffect } from "react";
import KeyStore from "../../../utils/KeyStore";

export interface PopupDialog {
  /*
    I believe that using forwardRef might be overkill.
    For a simple function like this one
  */
  dialogRef: React.RefObject<HTMLDialogElement>;
  title?: string;
  children: React.ReactNode;
}

function PopupDialog({ dialogRef, title, children }: PopupDialog) {
  const on = KeyStore((state) => state.on);
  useEffect(() => {
    if (dialogRef.current?.hasAttribute("open"))
      on("Escape", () => dialogRef.current?.close());
  }, [on, dialogRef]);
  return (
    <dialog className="dialogPopup" ref={dialogRef}>
      <div className="dialogNav">
        <h1>{title ? title : "Popup"}</h1>
        <LinkIcon
          iconPath="/close.svg"
          alt="close"
          cb={() => {
            dialogRef.current?.close();
          }}
        />
      </div>
      <div className="children">{children}</div>
    </dialog>
  );
}

export default PopupDialog;
